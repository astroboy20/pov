/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import {
  BackdropOverlay,
  Buttons,
  Container,
  Span,
  Video,
} from "./Camera.style";
import { MdOutlineFlipCameraAndroid } from "react-icons/md";
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
  const [photosTaken, setPhotosTaken] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [inviteeName, setInviteeName] = useState("");
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const [facingMode, setFacingMode] = useState(FACING_MODE_USER);
  const eventId = typeof window !== "undefined" && localStorage.getItem("id");
  const router = useRouter();
  const [selectedImages, setSelectedImages] = useState([]);
  const {
    isOpen: isPreviewOpen,
    onOpen: onPreviewOpen,
    onClose: onPreviewClose,
  } = useDisclosure();
  const { isOpen, onClose, onOpen } = useDisclosure();

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
          width: { ideal: 1080 }, // Request a high resolution
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
      } else {
        takePictureFallback(); // Fallback for devices without ImageCapture support
      }
    } catch (error) {
      console.error("Error taking picture:", error);
      setIsLoading(false);
    }
  };

  const saveImage = () => {
    if (previewImage) {
      const images = JSON.parse(localStorage.getItem("capturedImages")) || [];
      images.push(previewImage);
      localStorage.setItem("capturedImages", JSON.stringify(images));
      setCapturedImages(images);
      setPreviewImage(null);
      onClose();
    }
  };

  const handlePreview = () => {
    const images = JSON.parse(localStorage.getItem("capturedImages")) || [];
    setCapturedImages(images);
    onPreviewOpen();
  };

  const handleSelectImage = (image) => {
    setSelectedImages((prevSelectedImages) =>
      prevSelectedImages.includes(image)
        ? prevSelectedImages.filter((img) => img !== image)
        : [...prevSelectedImages, image]
    );
  };
  useEffect(() => {
    if (photosTaken === events.photosPerPerson) {
      onOpen();
    }
  }, [photosTaken]);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const formData = new FormData();

      capturedImages.forEach((image, index) => {
        const blob = dataURLtoBlob(image);
        formData.append("file", blob, `photo${index}.jpg`);
      });

      formData.append("upload_preset", "za8tsrje");

      const responses = await Promise.all(
        capturedImages.map((image) =>
          axios.post(
            "https://api.cloudinary.com/v1_1/dm42ixhsz/image/upload",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          )
        )
      );

      const imageUrls = responses.map((res) => res.data.secure_url);
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
        <div className="left-icon">
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
