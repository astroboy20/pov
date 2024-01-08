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
  const audioRef = useRef(null);
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
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 1920, height: 1080 },
      })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const takePictureFallback = async () => {
  //   if (photosTaken < events.photosPerPerson) {
  //     const canvas = document.createElement("canvas");
  //     const video = videoRef.current;
  //     canvas.width = video.videoWidth;
  //     canvas.height = video.videoHeight;
  //     canvas.getContext("2d").drawImage(video, 0, 0);

  //     canvas.toBlob(async (blob) => {
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
  //     }, "image/jpeg");
  //   } else {
  //     toast.warning("Maximum number of photos reached.");
  //   }
  // };

  const takePicture = async () => {
    if (photosTaken < events.photosPerPerson) {
      const stream = videoRef.current.srcObject;
      const tracks = stream.getVideoTracks();
      const imageCapture = new ImageCapture(tracks[0]);
      const blob = await imageCapture.takePhoto();
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
    } else {
      // takePictureFallback();
      toast.warning("Maximum number of photos reached.");
    }
  };

  // useEffect(() => {
  // if (photosTaken === events.photosPerPerson){
  //   router.push("./invitee")
  // }
  // }, [])

  return (
    <Container>
      <video ref={videoRef} autoPlay playsInline></video>
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
