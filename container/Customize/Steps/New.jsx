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
  Center,
  Textarea,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import { fabric } from "fabric";
import { Spinner } from "@/components/Spinner";
import { Button } from "@/components/Button";

const StepThree = ({ handleNext }) => {
  const imageInfo =
    typeof window !== "undefined" && localStorage.getItem("image");
  const parsedData = JSON.parse(imageInfo);
  const canvasRef = useRef(null);
  const [text, setText] = useState("");
  const [isAddTextModalOpen, setIsAddTextModalOpen] = useState(false);
  const [font, setFont] = useState("");
  const [background, setBackground] = useState("");
  const [loading, setLoading] = useState(false);
  const [fabricCanvas, setFabricCanvas] = useState(null);
  const MAX_FILE_SIZE_MB = 5;
  const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

  useEffect(() => {
    const fabricCanvasInstance = new fabric.Canvas(canvasRef.current, {
      selection: true,
    });
    setFabricCanvas(fabricCanvasInstance);

    fabricCanvasInstance.on('object:selected', () => {
      fabricCanvasInstance.bringToFront(fabricCanvasInstance.getActiveObject());
    });

    return () => {
      fabricCanvasInstance.dispose();
    };
  }, []);

  const drawBackground = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const backgroundImage = new Image();
    backgroundImage.src = parsedData?.src;
    backgroundImage.crossOrigin = "anonymous";
    backgroundImage.onload = () => {
      ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    };
  };

  const handleAddText = () => {
    setIsAddTextModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsAddTextModalOpen(false);
  };

  const handleSubmitAddText = () => {
    const textObject = new fabric.Text(text, {
      left: 100,
      top: 100,
      fontFamily: font,
      fill: background,
      editable: true,
    });
    fabricCanvas.add(textObject).setActiveObject(textObject);
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
        fabric.Image.fromURL(image, (img) => {
          img.set({
            left: 150,
            top: 150,
            scaleX: 0.5,
            scaleY: 0.5,
            editable: true,
          });
          fabricCanvas.add(img).setActiveObject(img);
        });
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
        fabric.Image.fromURL(image, (img) => {
          img.set({
            left: 300,
            top: 300,
            scaleX: 0.5,
            scaleY: 0.5,
            editable: true,
          });
          fabricCanvas.add(img).setActiveObject(img);
        });
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

  const handleDelete = () => {
    const activeObject = fabricCanvas.getActiveObject();
    if (activeObject) {
      fabricCanvas.remove(activeObject);
    } else {
      fabricCanvas.clear();
      drawBackground();
    }
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
        handleAddText();
        break;
      case 5:
        handleAddText();
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
      const dataUrl = fabricCanvas.toDataURL({
        format: "png",
        quality: 1,
      });

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dm42ixhsz/image/upload",
        {
          file: dataUrl,
          upload_preset: "za8tsrje",
        }
      );

      const imageUrl = response.data.secure_url;
      localStorage.setItem("event_image", imageUrl);

      setLoading(false);
      handleNext();
    } catch (error) {
      setLoading(false);
      console.error("Error uploading image:", error);
    }
  };

  useEffect(() => {
    drawBackground();
  }, [parsedData]);

  return (
    <div className="edit">
      <Center display={"flex"} flexDirection={"column"} width={"100%"}>
        <canvas
          ref={canvasRef}
          width={""}
          style={{
            margin: "5% auto",
            width: "90%",
            height: "80vh",
            border: "1px solid red",
          }}
        ></canvas>
      </Center>
      <Button type={"submit"} variant={"defaultButton"} onClick={downloadQrCode}>
        {loading ? <Spinner /> : "Next"}
      </Button>
      <div className="item">
        {editActions.map((edit) => (
          <div key={edit.id} className="sub-items" onClick={() => handleAction(edit.id)}>
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
              type="color"
              value={background}
              onChange={handleBackgroundChange}
              style={{ width: "100%" }}
            />
          </ModalBody>

          <ModalFooter>
            <button  onClick={handleSubmitAddText}>
              Add
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export { StepThree };
