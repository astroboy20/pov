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
import { ShutterIcon } from "@/assets";
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
        video: { facingMode },
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

        if (events.event_image) {
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

        canvas.toBlob(async (blob) => {
          audioRef.current.play();
          const formData = new FormData();
          formData.append("file", blob);
          formData.append("upload_preset", "za8tsrje");

          const response = await axios.post(
            "https://api.cloudinary.com/v1_1/dm42ixhsz/image/upload",
            formData
          );

          const imageUrl = response.data.secure_url;
          setCapturedImages((prevImages) => [...prevImages, imageUrl]);
          setPhotosTaken((prevCount) => prevCount + 1);
        }, "image/jpeg");
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

        const formData = new FormData();
        formData.append("file", blob);
        formData.append("upload_preset", "za8tsrje");

        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dm42ixhsz/image/upload",
          formData
        );

        const imageUrl = response.data.secure_url;
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

  useEffect(() => {
    if (photosTaken === events.photosPerPerson) {
      onOpen();
    }
  }, [photosTaken]);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const payload = {
        inviteeName,
        pictures: capturedImages,
        eventId,
      };
      await axios.post(
        `https://api-cliqpod.koyeb.app/camera/${eventId}`,
        payload
      );
      toast.success("Images submitted successfully!");
      router.push("/");
    } catch (error) {
      console.error("Error submitting images:", error);
      toast.error("Failed to submit images.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <BackdropOverlay backdropUrl={events?.event_image} />
      <Video ref={videoRef} autoPlay playsInline></Video>
      <Buttons className="button">
        {photosTaken === events.photosPerPerson ? (
          "done"
        ) : (
          <span onClick={takePicture}>
            <ShutterIcon />
          </span>
        )}
        <MdOutlineFlipCameraAndroid
          fontSize={"30px"}
          color="#fff"
          onClick={switchCamera}
        />
      </Buttons>
      <audio ref={audioRef} src={"./sound/sound.mp3"} preload="auto" />
      <Span style={{ marginTop: "10px" }}>
        {photosTaken}/{events?.photosPerPerson}
      </Span>

      {photosTaken === events.photosPerPerson && (
        <Modal isOpen={isOpen}>
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
