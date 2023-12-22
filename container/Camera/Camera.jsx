import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/Button";
import { Container } from "./Camera.style";
import { BackIcon, BlueBackIcon } from "@/assets";
import { CustomText } from "@/components/CustomText";

const Camera = () => {
  const [capturedImages, setCapturedImages] = useState([]);
  const [photosTaken, setPhotosTaken] = useState(0); // Track the number of photos taken
  const photosPerPerson =
    typeof window !== "undefined" && localStorage.getItem("photosPerPerson");
  const videoRef = useRef(null);
  const eventName =
    typeof window !== "undefined" && localStorage.getItem("eventName");

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        videoRef.current.srcObject = stream;
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    };

    startCamera();
  }, []);

  const takePicture = async () => {
    if (photosTaken <= photosPerPerson) {
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

      console.log("Uploaded Image:", response.data.secure_url);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <Container>
        <div className="header-head">
            <span >
              {" "}
              <BackIcon />
            </span>

            <CustomText type={"Htype"} variant={"h3"}>
              {eventName}
            </CustomText>
            <span style={{ color: "white" }}>.</span>
          </div>
      <h1>Take Pictures</h1>
      <video ref={videoRef} autoPlay></video>
      <Button type={"submit"} variant={"defaultButton"} onClick={takePicture}>
        {photosTaken === photosPerPerson ? "Submit" : "Take Picture"}
      </Button>
    </Container>
  );
};

export { Camera };
