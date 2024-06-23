import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import {
  BackdropOverlay,
  Buttons,
  Container,
  Span,
  Video,
} from "./Camera.style";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { PreviewIcon, ShutterIcon, SwitchIcon } from "@/assets";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Input,
  Spinner,
} from "@chakra-ui/react";
import { Button } from "@/components/Button";

const Camera = ({ events }) => {
  const FACING_MODE_USER = "user";
  const FACING_MODE_ENVIRONMENT = "environment";
  const [capturedImages, setCapturedImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [photosTaken, setPhotosTaken] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [inviteeName, setInviteeName] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const [facingMode, setFacingMode] = useState(FACING_MODE_USER);
  const eventId = typeof window !== "undefined" && localStorage.getItem("id");
  const router = useRouter();
  const previewModal = useDisclosure();
  const submitModal = useDisclosure();

  const switchCamera = React.useCallback(() => {
    setFacingMode((prevState) =>
      prevState === FACING_MODE_USER
        ? FACING_MODE_ENVIRONMENT
        : FACING_MODE_USER
    );
  }, []);

  useEffect(() => {
    startCamera();
  }, [facingMode]);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode,
          width: { ideal: 1080 },
          height: { ideal: 1920 },
        },
      });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error("Error accessing camera:", error);
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = devices.filter(
          (device) => device.kind === "videoinput"
        );
        const device = videoDevices.find((device) =>
          device.label.includes(facingMode)
        );

        if (device && device.deviceId) {
          const constraints = { deviceId: device.deviceId };
          const stream = await navigator.mediaDevices.getUserMedia({
            video: constraints,
          });
          videoRef.current.srcObject = stream;
        } else {
          console.error("Camera device not found or missing deviceId.");
        }
      } catch (err) {
        console.error("Error accessing camera on iOS:", err);
      }
    }
  };

  const takePictureFallback = async () => {
    try {
      if (photosTaken < events.photosPerPerson) {
        const canvas = document.createElement("canvas");
        const video = videoRef.current;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const context = canvas.getContext("2d");

        // Flip the image horizontally if using the front camera
        if (facingMode === FACING_MODE_USER) {
          context.translate(canvas.width, 0);
          context.scale(-1, 1);
        }

        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        if (events?.event_image) {
          const filterImage = new Image();
          filterImage.crossOrigin = "anonymous";
          filterImage.src = events.event_image;
          await new Promise((resolve, reject) => {
            filterImage.onload = () => {
              context.globalCompositeOperation = "source-over";
              context.drawImage(filterImage, 0, 0, canvas.width, canvas.height);
              resolve();
            };
            filterImage.onerror = reject;
          });
        }

        const imageUrl = canvas.toDataURL("image/png");
        setCapturedImages((prevImages) => [...prevImages, imageUrl]);
        setPhotosTaken((prevCount) => prevCount + 1);
        audioRef.current.play();
        uploadImage(imageUrl);
      } else {
        toast.warning("Maximum number of photos reached.");
      }
    } catch (error) {
      console.error("Error taking picture (fallback):", error);
      setIsLoading(false);
    }
  };

  const takePicture = async () => {
    try {
      if (typeof ImageCapture !== "undefined") {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getVideoTracks();
        const imageCapture = new ImageCapture(tracks[0]);
        const blob = await imageCapture.takePhoto();
        audioRef.current.play();

        const img = document.createElement("img");
        img.src = URL.createObjectURL(blob);
        await img.decode();

        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;

        // Flip the image horizontally if using the front camera
        if (facingMode === FACING_MODE_USER) {
          context.translate(canvas.width, 0);
          context.scale(-1, 1);
        }

        context.drawImage(img, 0, 0, canvas.width, canvas.height);

        if (events?.event_image) {
          const filterImage = new Image();
          filterImage.crossOrigin = "anonymous";
          filterImage.src = events.event_image;
          await new Promise((resolve, reject) => {
            filterImage.onload = () => {
              context.globalCompositeOperation = "source-over";
              context.drawImage(filterImage, 0, 0, canvas.width, canvas.height);
              resolve();
            };
            filterImage.onerror = reject;
          });
        }

        const imageUrl = canvas.toDataURL("image/png");
        setCapturedImages((prevImages) => [...prevImages, imageUrl]);
        setPhotosTaken((prevCount) => prevCount + 1);
        uploadImage(imageUrl);
      } else {
        takePictureFallback(); // Fallback for devices without ImageCapture support
      }
    } catch (error) {
      console.error("Error taking picture:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (photosTaken === events.photosPerPerson) {
      submitModal.onOpen();
    }
  }, [photosTaken]);

  const uploadImage = async (imageUrl) => {
    setUploading(true);
    try {
      const formData = new FormData();
      const blob = dataURLtoBlob(imageUrl);
      formData.append("file", blob, `photo${photosTaken}.jpg`);
      formData.append("upload_preset", "za8tsrje");

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dm42ixhsz/image/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setImageUrls((prevUrls) => [...prevUrls, response.data.secure_url]);
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Failed to upload image.");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);

      const payload = {
        inviteeName,
        image: imageUrls,
        eventId,
      };

      await axios.post(
        `https://api-cliqpod.koyeb.app/camera/${eventId}`,
        payload
      );
      toast.success("Images saved!");
      router.push("/");
    } catch (error) {
      console.error("Error submitting images:", error);
      toast.error("Failed to submit images.");
    } finally {
      setIsLoading(false);
    }
  };

  const dataURLtoBlob = (dataURL) => {
    const byteString = atob(dataURL.split(",")[1]);
    const mimeString = dataURL.split(",")[0].split(":")[1].split(";")[0];
    const buffer = new ArrayBuffer(byteString.length);
    const dataView = new Uint8Array(buffer);

    for (let i = 0; i < byteString.length; i++) {
      dataView[i] = byteString.charCodeAt(i);
    }

    return new Blob([buffer], { type: mimeString });
  };

  const handlePreview = () => {
    previewModal.onOpen();
  };

  const handleSelectImage = (image) => {
    setSelectedImages((prevSelectedImages) =>
      prevSelectedImages.includes(image)
        ? prevSelectedImages.filter((img) => img !== image)
        : [...prevSelectedImages, image]
    );
  };

  const handleDeleteSelectedImages = () => {
    if (selectedImages.length === 0) {
      toast.warning("No images selected for deletion.");
      return;
    }
    setImageUrls((prevImageUrls) =>
      prevImageUrls.filter((imageUrl) => !selectedImages.includes(imageUrl))
    );
    setSelectedImages([]);
  };

  return (
    <Container>
      <BackdropOverlay backdropUrl={events?.event_image} />
      <Video
        ref={videoRef}
        autoPlay
        playsInline
        style={{
          transform:
            facingMode === FACING_MODE_USER ? "scaleX(-1)" : "scaleX(1)",
        }}
      ></Video>
      <Buttons className="button">
        <div className="left-icon" onClick={handlePreview}>
          <PreviewIcon />
        </div>
        <div className="center-buttons">
          {photosTaken === events.photosPerPerson ? (
            "done"
          ) : (
            <span onClick={takePicture} disabled={uploading}>
              {uploading ? <Spinner /> : <ShutterIcon />}
            </span>
          )}
          <span onClick={switchCamera}>
            <SwitchIcon />
          </span>
        </div>
      </Buttons>
      <audio ref={audioRef} src={"./sound/sound.mp3"} preload="auto" />
      <Span style={{ marginTop: "10px" }}>
        {photosTaken}/{events?.photosPerPerson}
      </Span>

      <Modal
        size={"full"}
        isOpen={previewModal.isOpen}
        onClose={previewModal.onClose}
      >
        <ModalOverlay />
        <ModalContent
          width={"100%"}
          overflow={"scroll"}
          position={"fixed"}
          padding={"3%"}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "6px",
              }}
            >
              {imageUrls.map((imageUrl, index) => (
                <img
                  key={index}
                  width={"1080"}
                  height={"1920"}
                  src={imageUrl}
                  alt={`Uploaded ${index}`}
                  style={{
                    cursor: "pointer",
                    border: selectedImages.includes(imageUrl)
                      ? "2px solid blue"
                      : "none",
                  }}
                  onClick={() => handleSelectImage(imageUrl)}
                />
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Button
                type={"button"}
                variant={"defaultButton"}
                onClick={handleDeleteSelectedImages}
                disabled={selectedImages.length === 0}
              >
                Delete
              </Button>
              <Button
                type={"button"}
                variant={"defaultButton"}
                onClick={() => {
                  if (selectedImages.length === 0) {
                    toast.warning("No images selected for submission.");
                  } else {
                    submitModal.onOpen();
                  }
                }}
                disabled={selectedImages.length === 0}
              >
                Submit
              </Button>
            </div>
          </div>
        </ModalContent>
      </Modal>

      <Modal isOpen={submitModal.isOpen} onClose={submitModal.onClose}>
        <ModalOverlay />
        <ModalContent
          display={"flex"}
          flexDirection={"column"}
          gap={"20px"}
          padding={"6%"}
          width={"90%"}
        >
          <div>
            <h2>Invitee Name</h2>
            <Input
              size="lg"
              type="text"
              value={inviteeName}
              onChange={(e) => setInviteeName(e.target.value)}
            />
          </div>

          <Button
            type={"submit"}
            variant={"defaultButton"}
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? <Spinner /> : "Submit"}
          </Button>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export { Camera };
