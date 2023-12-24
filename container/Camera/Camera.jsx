import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/Button";
import { Container } from "./Camera.style";
import { BackIcon, BlueBackIcon } from "@/assets";
import { CustomText } from "@/components/CustomText";
import { MdOutlineCamera } from "react-icons/md";
import { MdOutlineFlipCameraAndroid } from "react-icons/md";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Camera = ({ events }) => {
  const [capturedImages, setCapturedImages] = useState([]);
  const [photosTaken, setPhotosTaken] = useState(0); // Track the number of photos taken
  const videoRef = useRef(null);
  const [facingMode, setFacingMode] = useState("environment");
  const { user } = useSelector((state) => state.auth);
  const accessToken = user ? user.token : "";
  const eventId = typeof window !== "undefined" && localStorage.getItem("id");

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
        const canvas = document.createElement("canvas");

        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;

        const context = canvas.getContext("2d");
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

        const imageData = canvas.toDataURL("image/jpeg");
        

        setCapturedImages([...capturedImages, imageData]);
        setPhotosTaken(photosTaken + 1);

        await uploadImageToCloudinary(imageData);
      } catch (error) {
        console.error("Error taking picture:", error);
      }
    } else {
      console.log("Maximum number of photos reached.");
    }
  };

  const uploadImageToCloudinary = async (imageData) => {
    try {
      const formData = new FormData();
      formData.append("file", imageData);
      formData.append("upload_preset", "za8tsrje");

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dm42ixhsz/image/upload",
        formData
      );
      SavePictures(imageUrl);
      console.log("Uploaded Image:", response.data.secure_url);
      
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const SavePictures = async (imageUrl) => {
    if (imageUrl) {
      await axios
        .post(`https://api-cliqpod.koyeb.app/camera/${eventId}`, imageUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <Container>
      {/* Header and other components */}
      <div className="header-head">
        <span>
          {" "}
          <BackIcon />
        </span>
        <CustomText type={"Htype"} variant={"h3"}>
          {events.eventName}
        </CustomText>
        <span style={{ color: "white" }}>.</span>
      </div>
      <video ref={videoRef} autoPlay playsInline></video>
      <div className="button">
        {photosTaken === events.photosPerPerson ? (
          <Button onClick={SavePictures} type="submit" variant="defaultButton">
            Submit
          </Button>
        ) : (
          <>
            <MdOutlineCamera fontSize={"50px"} onClick={takePicture} />
          </>
        )}
        <MdOutlineFlipCameraAndroid fontSize={"50px"} onClick={switchCamera} />
      </div>
      <span style={{ marginTop: "10px" }}>
        Pictures Taken: {photosTaken} / {events.photosPerPerson}
      </span>
    </Container>
  );
};

export { Camera };
