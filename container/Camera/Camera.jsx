import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/Button";
import { ButtonContainer, Container, Video } from "./Camera.style";
import { BackIcon, BlueBackIcon } from "@/assets";
import { CustomText } from "@/components/CustomText";
import { MdOutlineCamera } from "react-icons/md";
import { MdOutlineFlipCameraAndroid } from "react-icons/md";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { PurpleSpinner } from "@/components/Spinner/Spinner";
import { useRouter } from "next/router";

const Camera = ({ events }) => {
  const [capturedImages, setCapturedImages] = useState([]);
  const [photosTaken, setPhotosTaken] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef(null);
  const [facingMode, setFacingMode] = useState("environment");
  const { user } = useSelector((state) => state.auth);
  const accessToken = user ? user.token : "";
  const eventId = typeof window !== "undefined" && localStorage.getItem("id");
  const router = useRouter();
  const switchCamera = () => {
    const newFacingMode = facingMode === "environment" ? "user" : "environment";
    setFacingMode(newFacingMode);
    startCamera();
  };

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: { exact: facingMode },
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
            const constraints = {
              deviceId: device.deviceId,
            };

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

    startCamera();
  }, [facingMode]);

  const takePicture = async () => {
    if (photosTaken < events.photosPerPerson) {
      try {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getVideoTracks();
        const imageCapture = new ImageCapture(tracks[0]);

        const blob = await imageCapture.takePhoto();

        setCapturedImages([...capturedImages, blob]);
        setPhotosTaken(photosTaken + 1);
      } catch (error) {
        console.error("Error taking picture:", error);
      }
    } else {
      toast.warning("Maximum number of photos reached.");
    }
  };

  const handleSavePictures = async () => {
    try {
      const uploadPromises = capturedImages.map(async (imageData) => {
        const formData = new FormData();
        formData.append("file", imageData);
        formData.append("upload_preset", "za8tsrje");

        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dm42ixhsz/image/upload",
          formData
        );
        return response.data.secure_url;
      });

      const uploadedImageUrls = await Promise.all(uploadPromises);

      uploadedImageUrls.forEach((imageUrl) => {
        SavePictureToDatabase(imageUrl);
      });

      setCapturedImages([]);
      setPhotosTaken(0);

      toast.success("Images uploaded successfully!");
    } catch (error) {
      console.error("Error uploading images:", error);
      toast.error("Failed to upload images.");
    }
  };

  const SavePictureToDatabase = async (imageUrl) => {
    if (imageUrl) {
      try {
        setIsLoading(true);
        await axios
          .post(
            `https://api-cliqpod.koyeb.app/camera/${eventId}`,
            { imageUrl },
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          )
          .then(() => {
            setIsLoading(false);
            router.push("/invitee");
          })
          .catch((error) => {
            console.error("Error saving image:", error);
          });
      } catch (error) {
        console.error("Error saving image:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <Container>
      <Video ref={videoRef} autoPlay playsInline></Video>
      {/* <VideoOverlay src="path_to_your_image.jpg" alt="Overlay Image" /> */}
      <ButtonContainer>
        {/* Place your button inside this div */}
        {photosTaken === events.photosPerPerson ? (
          <Button
            onClick={handleSavePictures}
            type="submit"
            variant="defaultButton"
          >
            {isLoading ? <PurpleSpinner /> : "Submit"}
          </Button>
        ) : (
          <>
            <MdOutlineCamera fontSize={"50px"} onClick={takePicture} />
          </>
        )}
        <MdOutlineFlipCameraAndroid fontSize={"50px"} onClick={switchCamera} />
      </ButtonContainer>
      <span style={{ marginTop: "100px" }}>
        Pictures Taken: {photosTaken} / {events.photosPerPerson}
      </span>
    </Container>
  );
};

export { Camera };
