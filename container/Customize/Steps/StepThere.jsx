import React, { useState, useRef, useEffect } from "react";
import { editActions, popularFonts } from "./Data";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Center,
  Textarea,
  Select,
} from "@chakra-ui/react";
import Draggable from "react-draggable";
import axios from "axios";
import html2canvas from "html2canvas";
import { Spinner } from "@/components/Spinner";

const StepThree = ({ handleNext }) => {
  const imageInfo =
    typeof window !== "undefined" && localStorage.getItem("image");
  const parsedData = JSON.parse(imageInfo);
  const imageRef = useRef(null);
  const canvasRef = useRef(null);
  const [text, setText] = useState("");
  const [isAddTextModalOpen, setIsAddTextModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedElement, setSelectedElement] = useState("");
  const [font, setFont] = useState("");
  const [background, setBackground] = useState("");
  const [loading, setLoading] = useState(false);
  const MAX_FILE_SIZE_MB = 5;
  const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

  const handleAddText = () => {
    setIsAddTextModalOpen(true);
  };
  const handleAddBackground = () => {
    setIsAddTextModalOpen(true);
  };
  const handleFont = () => {
    setIsAddTextModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsAddTextModalOpen(false);
  };

  const handleSubmitAddText = () => {
    handleCloseModal();
  };

  const handleUploadImage = async () => {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];

    if (file && file.size > MAX_FILE_SIZE_BYTES) {
      console.error("File size exceeds the limit.");
      return;
    }

    if (file) {
      const imageURL = new FormData();
      imageURL.append("file", file);
      imageURL.append("upload_preset", "za8tsrje");

      try {
        const imageResponse = await axios.post(
          "https://api.cloudinary.com/v1_1/dm42ixhsz/image/upload",
          imageURL
        );
        const image = imageResponse.data.secure_url;
        setSelectedImage(image);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const handleUploadElement = async () => {
    const fileInput = document.getElementById("elementInput");
    const file = fileInput.files[0];

    if (file && file.size > MAX_FILE_SIZE_BYTES) {
      console.error("File size exceeds the limit.");
      return;
    }

    if (file) {
      const imageURL = new FormData();
      imageURL.append("file", file);
      imageURL.append("upload_preset", "za8tsrje");

      try {
        const imageResponse = await axios.post(
          "https://api.cloudinary.com/v1_1/dm42ixhsz/image/upload",
          imageURL
        );
        const image = imageResponse.data.secure_url;
        setSelectedElement(image);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const selectNewImage = () => {
    const fileInput = document.getElementById("fileInput");
    fileInput.click();
  };

  const selectNewElement = () => {
    const elementInput = document.getElementById("elementInput");
    elementInput.click();
  };

  const handleFontChange = (e) => {
    setFont(e.target.value);
  };

  const handleBackgroundChange = (e) => {
    setBackground(e.target.value);
  };

  const handleDelete = (e) => {
    setBackground("");
    setText("");
    setSelectedElement("");
    setSelectedImage("");
  };

  const handleAction = (actionId) => {
    switch (actionId) {
      case 1:
        handleAddText();
        break;
      case 2:
        selectNewImage();
        break;
      case 3:
        selectNewElement();
        break;
      case 4:
        handleFont();
        break;
      case 5:
        handleAddBackground();
        break;
      case 6:
        handleDelete();
        break;
      default:
        break;
    }
  };

  const downloadQrCode = async () => {
    try {
      setLoading(true);

      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const imageData = canvas.toDataURL("image/png");

        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dm42ixhsz/image/upload",
          {
            file: imageData,
            upload_preset: "za8tsrje",
          }
        );

        const imageUrl = response.data.secure_url;

        localStorage.setItem("event_image", imageUrl);

        setLoading(false); // Set loading state to false
        handleNext(); // Proceed to the next step after image upload
      }
    } catch (error) {
      setLoading(false); // Set loading state to false in case of error
      console.error("Error uploading image:", error);
    }
  };

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the background image
    const backgroundImage = new Image();
    backgroundImage.src = parsedData?.src;
    backgroundImage.onload = () => {
      ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

      // Draw the selected image
      if (selectedImage) {
        const img = new Image();
        img.src = selectedImage;
        img.onload = () => {
          ctx.drawImage(img, 150, 150, 150, 150); // Adjust position and size as needed
        };
      }

      // Draw the selected element
      if (selectedElement) {
        const elem = new Image();
        elem.src = selectedElement;
        elem.onload = () => {
          ctx.drawImage(elem, 300, 300, 100, 100); // Adjust position and size as needed
        };
      }

      // Draw the text
      if (text) {
        ctx.font = `20px ${font}`;
        ctx.fillStyle = background;
        ctx.fillText(text, 100, 100); // Adjust position as needed
      }
    };
  };

  useEffect(() => {
    drawCanvas();
  }, [parsedData, selectedImage, selectedElement, text, font, background]);

  return (
    <div className="edit">
      <Center
        display={"flex"}
        flexDirection={"column"}
        width={"100%"}
      >
        <canvas
          ref={canvasRef}
          width={500}
          height={500}
          style={{
            // background: "grey",
            margin: "5% auto",
            width: "90%",
            height: "80vh",
            border: "1px solid red",
          }}
        />
      </Center>
      <Button
        padding={"20px 24px"}
        fontSize={"16px"}
        fontWeight={"600"}
        borderRadius={"4px"}
        margin={"10px auto"}
        background={"#1D1465"}
        width={"100%"}
        color={"white"}
        onClick={downloadQrCode}
      >
        {loading ? <Spinner /> : "Next"}
      </Button>
      <div className="item">
        {editActions.map((edit) => (
          <div
            key={edit.id}
            className="sub-items"
            onClick={() => handleAction(edit.id)}
          >
            {edit.icon}
            <p>{edit.label}</p>
          </div>
        ))}
      </div>

      <input
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={handleUploadImage}
        style={{ display: "none" }}
      />

      <input
        id="elementInput"
        type="file"
        accept="image/*"
        onChange={handleUploadElement}
        style={{ display: "none" }}
      />

      <Modal isOpen={isAddTextModalOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Text</ModalHeader>
          <ModalCloseButton />
          <ModalBody display={"flex"} flexDirection={"column"} gap={"20px"}>
            <Textarea
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{
                border: "1px solid black",
                width: "100%",
                padding: "15px",
              }}
            />

            <Select placeholder="Select font" onChange={handleFontChange}>
              {popularFonts.map((font, index) => (
                <option key={index} value={font}>
                  {font}
                </option>
              ))}
            </Select>

            <input
              style={{ background: background }}
              type="color"
              value={background}
              onChange={handleBackgroundChange}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmitAddText}>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export { StepThree };
