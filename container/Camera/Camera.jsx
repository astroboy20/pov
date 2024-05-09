/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { BackdropOverlay, Button, Container, Span, Video } from "./Camera.style";
import { MdOutlineCamera, MdOutlineFlipCameraAndroid } from "react-icons/md";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { ShutterIcon } from "@/assets";

const Camera = ({ events }) => {
  const FACING_MODE_USER = "user";
  const FACING_MODE_ENVIRONMENT = "environment";
  const [capturedImages, setCapturedImages] = useState([]);
  const [photosTaken, setPhotosTaken] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const [facingMode, setFacingMode] = useState(FACING_MODE_USER);
  const eventId = typeof window !== "undefined" && localStorage.getItem("id");
  const router = useRouter();

  const switchCamera = React.useCallback(() => {
    setFacingMode((prevState) =>
      prevState === FACING_MODE_USER
        ? FACING_MODE_ENVIRONMENT
        : FACING_MODE_USER
    );
  }, []);

  console.log(facingMode);

  // const switchCamera = () => {
  //   setIsLoading(true);
  //   const newFacingMode = facingMode === "environment" ? "user" : "environment";
  //   setFacingMode(newFacingMode);
  //   startCamera().finally(() => setIsLoading(false));
  // };

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

  // const takePictureFallback = async () => {
  //   try {
  //     if (photosTaken < events.photosPerPerson) {
  //       const canvas = document.createElement("canvas");
  //       const video = videoRef.current;
  //       canvas.width = video.videoWidth;
  //       canvas.height = video.videoHeight;
  //       canvas.getContext("2d").drawImage(video, 0, 0);

  //       canvas.toBlob(async (blob) => {
  //         audioRef.current.play();
  //         const formData = new FormData();
  //         formData.append("image", blob);

  //         const config = {
  //           headers: {
  //             "Content-Type": "multipart/form-data",
  //           },
  //         };

  //         const response = await axios.post(
  //           `https://api-cliqpod.koyeb.app/camera/${eventId}`,
  //           formData,
  //           config
  //         );

  //         const imageUrl = response.data;
  //         setCapturedImages([...capturedImages, imageUrl]);
  //         setPhotosTaken(photosTaken + 1);
  //       }, "image/jpeg");
  //     } else {
  //       toast.warning("Maximum number of photos reached.");
  //     }
  //   } catch (error) {
  //     console.error("Error taking picture (fallback):", error);
  //     setIsLoading(false);
  //   }
  // };

  const takePictureFallback = async () => {
    try {
      if (photosTaken < events.photosPerPerson) {
        const canvas = document.createElement("canvas");
        const video = videoRef.current;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const context = canvas.getContext("2d");

        // Draw the video stream onto the canvas
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Apply the selected filter (if any) to the canvas
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

        // Convert the canvas content to a Blob
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
        image.src = events?.event_image;

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
  }, [photosTaken]);

  return (
   <Container>
      {/* Render the backdrop overlay */}
      <BackdropOverlay backdropUrl={events?.event_image} />

      {/* Your existing camera preview and capture button */}
      <>
        <Video ref={videoRef} autoPlay playsInline></Video>
        <Button className="button">
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
        </Button>
        <audio ref={audioRef} src={"./sound/sound.mp3"} preload="auto" />
        <Span style={{ marginTop: "10px" }}>{photosTaken}/{events?.photosPerPerson}</Span>
      </>
    </Container>
  );
};

export { Camera };
