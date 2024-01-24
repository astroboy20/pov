/* eslint-disable react-hooks/exhaustive-deps */
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
import FilterOptions from "./FilterOption";

const Camera = ({ events }) => {
  const [capturedImages, setCapturedImages] = useState([]);
  const [photosTaken, setPhotosTaken] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const [facingMode, setFacingMode] = useState("environment");
  const eventId = typeof window !== "undefined" && localStorage.getItem("id");
  const [filter, setFilter] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const router = useRouter();

  const switchCamera = () => {
    setIsLoading(true);
    const newFacingMode = facingMode === "environment" ? "user" : "environment";
    setFacingMode(newFacingMode);
    startCamera().finally(() => setIsLoading(false));
  };

  useEffect(() => {
    startCamera();
  }, [facingMode, selectedFilter]);

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

  const takePictureFallback = async () => {
    try {
      if (photosTaken < events.photosPerPerson) {
        const canvas = document.createElement("canvas");
        const video = videoRef.current;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext("2d").drawImage(video, 0, 0);

        canvas.toBlob(async (blob) => {
          audioRef.current.play();
          const formData = new FormData();
          formData.append("image", blob);

          const config = {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          };

          const response = await axios.post(
            `https://api-cliqpod.koyeb.app/camera/${eventId}`,
            formData,
            config
          );

          const imageUrl = response.data;
          setCapturedImages([...capturedImages, imageUrl]);
          setPhotosTaken(photosTaken + 1);
        }, "image/jpeg");
      } else {
        toast.warning("Maximum number of photos reached.");
      }
    } catch (error) {
      console.error("Error taking picture (fallback):", error);
      setIsLoading(false);
    }
  };

  // const takePicture = async () => {
  //   try {
  //     if (typeof ImageCapture !== "undefined") {
  //       const stream = videoRef.current.srcObject;
  //       const tracks = stream.getVideoTracks();
  //       const imageCapture = new ImageCapture(tracks[0]);
  //       const blob = await imageCapture.takePhoto();
  //       audioRef.current.play();
  //       const formData = new FormData();
  //       formData.append("image", blob);

  //       const config = {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       };

  //       const response = await axios.post(
  //         `https://api-cliqpod.koyeb.app/camera/${eventId}`,
  //         formData,
  //         config
  //       );

  //       const imageUrl = response.data;
  //       setCapturedImages([...capturedImages, imageUrl]);
  //       setPhotosTaken(photosTaken + 1);
  //     } else {
  //       takePictureFallback(); // Fallback for devices without ImageCapture support
  //     }
  //   } catch (error) {
  //     console.error("Error taking picture:", error);
  //     setIsLoading(false);
  //   }
  // };

  

  const takePicture = async () => {
    try {
      if (typeof ImageCapture !== "undefined") {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getVideoTracks();
        const imageCapture = new ImageCapture(tracks[0]);
        const blob = await imageCapture.takePhoto();
        audioRef.current.play();
  
        // Create a new Image object with the selected filter as a background
        const image = new Image();
        image.crossOrigin = "anonymous"; // Set the crossorigin attribute
        image.src = events.event_image;
  
        // Replace with a default filter image URL
        image.onload = () => {
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");
          canvas.width = videoRef.current.videoWidth;
          canvas.height = videoRef.current.videoHeight;
  
          // Draw the image from the camera first
          context.drawImage(
            videoRef.current,
            0,
            0,
            canvas.width,
            canvas.height
          );
  
          // Draw the filter image on top
          context.globalCompositeOperation = "source-over";
          context.drawImage(image, 0, 0, canvas.width, canvas.height);
  
          // Convert the canvas to a Blob
          canvas.toBlob(async (blobWithFilter) => {
            const formData = new FormData();
            formData.append("image", blobWithFilter);
  
            const config = {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            };
  
            // Send the image with the filter to the server
            const response = await axios.post(
              `https://api-cliqpod.koyeb.app/camera/${eventId}`,
              formData,
              config
            );
  
            const imageUrl = response.data;
            setCapturedImages([...capturedImages, imageUrl]);
            setPhotosTaken(photosTaken + 1);
          }, "image/jpeg");
        };
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
      router.push("/");
    }
  }, []);

  return (
    <Container>
      <video
       
        ref={videoRef}
        autoPlay
        playsInline
      ></video>
      <div className="button">
        {photosTaken === events.photosPerPerson ? (
          "done"
        ) : (
          <MdOutlineCamera fontSize={"50px"} onClick={takePicture} />
        )}
        <MdOutlineFlipCameraAndroid fontSize={"50px"} onClick={switchCamera} />
      </div>
      <audio ref={audioRef} src={"./sound/sound.mp3"} preload="auto" />
      <span style={{ marginTop: "10px" }}>
        Pictures Taken: {photosTaken} / {events.photosPerPerson}
      </span>
    </Container>
  );
};

export { Camera };
