import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/Button";
import { Container } from "./Camera.style";
import { MdOutlineCamera, MdOutlineFlipCameraAndroid } from "react-icons/md";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { PurpleSpinner } from "@/components/Spinner/Spinner";
import { useRouter } from "next/router";
import { headers } from "@/next.config";

const Camera = ({ events }) => {
  const [capturedImages, setCapturedImages] = useState([]);
  const [photosTaken, setPhotosTaken] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef(null);
  const [facingMode, setFacingMode] = useState("environment");
  const eventId = typeof window !== "undefined" && localStorage.getItem("id");
  const router = useRouter();

  const switchCamera = () => {
    setIsLoading(true);
    const newFacingMode = facingMode === "environment" ? "user" : "environment";
    setFacingMode(newFacingMode);
    startCamera().finally(() => setIsLoading(false));
  };

  useEffect(() => {
    startCamera();
  }, [facingMode]);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { exact: facingMode } },
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

  const takePicture = async () => {
    if (photosTaken < events.photosPerPerson) {
      try {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getVideoTracks();
        const imageCapture = new ImageCapture(tracks[0]);
        const blob = await imageCapture.takePhoto();

        const formData = new FormData();
        formData.append("file", blob);
        formData.append("upload_preset", "za8tsrje");
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dm42ixhsz/image/upload",
          formData
        );

        const imageUrl = response.data.secure_url;
        console.log(imageUrl);
       
        if (response && imageUrl) {
          axios
            .post(`https://api-cliqpod.koyeb.app/camera/${eventId}`, {
              image: imageUrl,
            })
            .then((response) => {
              console.log(response.data);
            
            })
            .catch((error) => {
              console.log(error);
            });

         
        }
        
        setPhotosTaken(photosTaken + 1);
      } catch (error) {
        console.error("Error taking picture:", error);
        setIsLoading(false);
      }
    } else {
      toast.warning("Maximum number of photos reached.");
    }
  };

  useEffect(() => {
    if (photosTaken === events.photosPerPerson) {
      toast.success("All photos have been successfully taken and saved!")
      router.push("/invitee");
    }
  }, [photosTaken, events.photosPerPerson, router]);

  return (
    <Container>
      <video ref={videoRef} autoPlay playsInline></video>
      <div className="button">
        {photosTaken === events.photosPerPerson ? (
          <PurpleSpinner />
        ) : (
          <MdOutlineCamera fontSize={"50px"} onClick={takePicture} />
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
