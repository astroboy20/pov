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
import { PreviewIcon, SaveIcon, ShutterIcon, SwitchIcon } from "@/assets";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Input,
  Spinner,
} from "@chakra-ui/react";
import { Button } from "@/components/Button";
import Image from "next/image";

const Camera = ({ events }) => {
  const FACING_MODE_USER = "user";
  const FACING_MODE_ENVIRONMENT = "environment";
  const [capturedImages, setCapturedImages] = useState([]);
  const [photosTaken, setPhotosTaken] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [inviteeName, setInviteeName] = useState("");
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const [facingMode, setFacingMode] = useState(FACING_MODE_USER);
  const router = useRouter();
  const [selectedImages, setSelectedImages] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);
  const {
    isOpen: isPreviewOpen,
    onOpen: onPreviewOpen,
    onClose: onPreviewClose,
  } = useDisclosure();
  const {
    isOpen: isSubmitOpen,
    onOpen: onSubmitOpen,
    onClose: onSubmitClose,
  } = useDisclosure();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const switchCamera = () => {
    setFacingMode((prevState) =>
      prevState === FACING_MODE_USER ? FACING_MODE_ENVIRONMENT : FACING_MODE_USER
    );
  };

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
        const videoDevices = devices.filter((device) => device.kind === "videoinput");
        const device = videoDevices.find((device) => device.label.includes(facingMode));

        if (device && device.deviceId) {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: { deviceId: device.deviceId },
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

        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        if (events?.event_image) {
          const filterImage = new window.Image();
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

        const imageUrl = canvas.toDataURL("image/jpeg", 0.8); // Adjust quality here (0.0 - 1.0)
        setCapturedImages((prevImages) => [...prevImages, imageUrl]);
        setPreviewImage(imageUrl);
        setPhotosTaken((prevCount) => prevCount + 1);
        audioRef.current.play();
        setModalOpen(true);
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

        context.drawImage(img, 0, 0, canvas.width, canvas.height);

        if (events?.event_image) {
          const filterImage = new window.Image();
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

        const imageUrl = canvas.toDataURL("image/jpeg", 1); // Adjust quality here (0.0 - 1.0)
        setPreviewImage(imageUrl);
        setPhotosTaken((prevCount) => prevCount + 1);
        setModalOpen(true);
      } else {
        takePictureFallback(); // Fallback for devices without ImageCapture support
      }
    } catch (error) {
      console.error("Error taking picture:", error);
      setIsLoading(false);
    }
  };

  const saveImage = () => {
    if (previewImage && !capturedImages.includes(previewImage)) {
      setCapturedImages((prevImages) => [...prevImages, previewImage]);
      setPreviewImage(null);
      setModalOpen(false);
    }
  };

  const handlePreview = () => {
    onPreviewOpen();
  };

  const handleSelectImage = (image) => {
    setSelectedImages((prevSelectedImages) =>
      prevSelectedImages.includes(image)
        ? prevSelectedImages.filter((img) => img !== image)
        : [...prevSelectedImages, image]
    );
  };

  const uploadSelectedImages = async () => {
    try {
      setIsLoading(true);
      const uploadedUrls = await Promise.all(
        selectedImages.map(async (image) => {
          const formData = new FormData();
          const blob = dataURLtoBlob(image);
          formData.append("file", blob);
          formData.append("upload_preset", "za8tsrje");

          const response = await axios.post(
            "https://api.cloudinary.com/v1_1/dm42ixhsz/image/upload",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              }
            }
          );

          return response.data.secure_url;
        })
      );

      return uploadedUrls;
    } catch (error) {
      console.error("Error uploading images:", error);
      toast.error("Failed to upload images.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (photosTaken === events.photosPerPerson) {
      onSubmitOpen();
    }
  }, [photosTaken]);

  const handleSubmit = async () => {
    try {
      const imageUrls = await uploadSelectedImages();

      if (imageUrls.length > 0) {
        const payload = {
          inviteeName,
          image: imageUrls,
          eventId: events.id,
        };

        await axios.post(
          `https://api-cliqpod.koyeb.app/camera/${events.id}`,
          payload
        );
        toast.success("Images saved!");
        router.push("/");
      } else {
        toast.error("No images selected for upload.");
      }
    } catch (error) {
      console.error("Error submitting images:", error);
      toast.error("Failed to submit images.");
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

  return (
    <Container>
      <BackdropOverlay backdropUrl={events?.event_image} />
      <Video
        ref={videoRef}
        autoPlay
        playsInline
        style={{
          transform: facingMode === FACING_MODE_USER ? "scaleX(-1)" : "scaleX(1)",
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
            <span onClick={takePicture}>
              <ShutterIcon />
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

      {previewImage && (
        <Modal size={"full"} isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          <ModalOverlay />
          <ModalContent
            position="relative"
            top="0"
            left="0"
            height="100%"
            width="100vw"
            padding="0"
          >
            <Image
              src={previewImage}
              width={1080}
              height={1920}
              alt="Preview"
              layout="responsive"
              style={{
                zIndex: 1,
                width: "100%",
                height: "100%",
                margin: "auto",
                position: "relative",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              }}
            />

            <span
              onClick={saveImage}
              style={{
                zIndex: 10,
                cursor: "pointer",
                background: "#fff",
                position: "absolute",
                bottom: "25px",
                left: "20px",
              }}
            >
              <SaveIcon />
            </span>
          </ModalContent>
        </Modal>
      )}

      <Modal size={"full"} isOpen={isPreviewOpen} onClose={onPreviewClose}>
        <ModalOverlay />
        <ModalContent width={"100%"} overflow={"hidden"} position={"fixed"}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "6px" }}>
            {capturedImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Captured ${index}`}
                style={{
                  width: "200px",
                  height: "200px",
                  cursor: "pointer",
                  border: selectedImages.includes(image) ? "2px solid blue" : "none",
                }}
                onClick={() => handleSelectImage(image)}
              />
            ))}
          </div>
          <Button type={"button"} variant={"defaultButton"} onClick={onPreviewClose}>
            Close
          </Button>
          <Button type={"button"} variant={"defaultButton"} onClick={uploadSelectedImages}>
            Submit
          </Button>
        </ModalContent>
      </Modal>

      {photosTaken === events.photosPerPerson && (
        <Modal isOpen={isOpen} onClose={onClose}>
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
      )}
    </Container>
  );
};

export { Camera };
