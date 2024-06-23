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
import Image from "next/image";
import { Grid } from "react-loader-spinner";

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

        const imageUrl = canvas.toDataURL("image/png");
        setCapturedImages((prevImages) => [...prevImages, imageUrl]);
        setPreviewImage(imageUrl);
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

        const imageUrl = canvas.toDataURL("image/png");
        setCapturedImages((prevImages) => [...prevImages, imageUrl]);
        setPreviewImage(imageUrl);
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
      setModalOpen(false);
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
      onSubmitOpen();
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
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          <ModalOverlay />
          <ModalContent
            position="fixed"
            top="0"
            left="0"
            height="100vh"
            width="100vw"
            padding="0"
          >
            <Image
              src={previewImage}
              alt="Preview"
              // layout="fill"
              width={1080}
              height={1920}
              objectFit="cover" // or "cover" if you want the image to cover the entire area
              style={{ zIndex: 1 }}
            />

            <span
              onClick={saveImage}
              style={{
                zIndex: 10,
                cursor: "pointer",
                background: "red",
              }}
            >
              <SaveIcon />
            </span>
          </ModalContent>
        </Modal>
      )}

      <Modal isOpen={isPreviewOpen} onClose={onPreviewClose}>
        <ModalOverlay />
        <ModalContent height={"100dvh"} width={"100%"} overflow={"hidden"} position={"fixed"}>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {capturedImages.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Captured ${index}`}
                width={1080}
                height={1920}
                onClick={() => handleSelectImage(image)}
                // border={
                //   selectedImages.includes(image)
                //     ? "2px solid blue"
                //     : "2px solid transparent"
                // }
                cursor="pointer"
              />
            ))}
          </Grid>
          <Button
            type={"button"}
            variant={"defaultButton"}
            onClick={onPreviewClose}
          >
            Close
          </Button>
          <Button
            type={"button"}
            variant={"defaultButton"}
            onClick={onSubmitOpen}
          >
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
