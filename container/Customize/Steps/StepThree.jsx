import React, { useState, useRef, useEffect } from "react";
import { editActions, items, popularFonts } from "./Data";
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
  Box,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { Button } from "@/components/Button";
import { fabric } from "fabric";
import { toast } from "react-toastify";
import Image from "next/image";

const StepThree = ({ handleNext, blankCanvas }) => {
  const imageInfo =
    typeof window !== "undefined" && localStorage.getItem("image");
  const parsedData = JSON.parse(imageInfo);
  const canvasRef = useRef(null);
  const [text, setText] = useState("");
  const [isAddTextModalOpen, setIsAddTextModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(parsedData?.src || "");
  const [color, setColor] = useState("black");
  const [font, setFont] = useState("");
  const [loading, setLoading] = useState(false);
  const [fabricCanvas, setFabricCanvas] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadingElement, setUploadingElement] = useState(false);
  const [selectedElement, setSelectedElement] = useState(null);
  const MAX_FILE_SIZE_MB = 5;
  const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

  const eventName =
    typeof window !== "undefined" && localStorage.getItem("eventName");

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const canvasElement = canvasRef.current;
    const fabricCanvasInstance = new fabric.Canvas(canvasElement, {
      preserveObjectStacking: true,
    });
    setFabricCanvas(fabricCanvasInstance);

    const resizeCanvas = () => {
      const { width: containerWidth } =
        canvasElement.parentNode.getBoundingClientRect();
      const scaleFactor = containerWidth / 1080;
      const canvasWidth = 1080 * scaleFactor;
      const canvasHeight = 1920 * scaleFactor;
      fabricCanvasInstance.setDimensions({
        width: canvasWidth,
        height: canvasHeight,
      });
      fabricCanvasInstance.setZoom(scaleFactor);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas, { passive: true });

    return () => {
      fabricCanvasInstance.dispose();
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  useEffect(() => {
    if (fabricCanvas) {
      fabricCanvas.clear();
      if (blankCanvas) {
        fabricCanvas.setBackgroundColor(
          "white",
          fabricCanvas.renderAll.bind(fabricCanvas)
        );
      } else if (selectedImage && typeof selectedImage === "string") {
        fabric.Image.fromURL(
          selectedImage,
          (img) => {
            img.set({ left: 0, top: 0, selectable: false, evented: false });
            fabricCanvas.setBackgroundImage(
              img,
              fabricCanvas.renderAll.bind(fabricCanvas)
            );
          },
          { crossOrigin: "anonymous" }
        );
      }
    }
  }, [fabricCanvas, selectedImage, blankCanvas]);

  const handleAddText = () => {
    setIsAddTextModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsAddTextModalOpen(false);
  };

  const handleSubmitAddText = () => {
    if (fabricCanvas && text) {
      const textbox = new fabric.Textbox(text, {
        left: 100,
        top: 100,
        fontFamily: font || "sans-serif",
        fontSize: 20,
        fill: color,
        width: 300,
        scalable: true,
        uniformScaling: true,
      });
      fabricCanvas.add(textbox).setActiveObject(textbox);
      fabricCanvas.renderAll();
      toast.success("Text added to the canvas!");

      setText("");
      setFont("");
      setColor("black");
    }
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
        setUploadingImage(true);
        const imageResponse = await axios.post(
          "https://api.cloudinary.com/v1_1/dm42ixhsz/image/upload",
          imageURL
        );
        const image = imageResponse.data.secure_url;
        setSelectedElement(image);

        fabric.Image.fromURL(
          image,
          (img) => {
            img.set({
              left: 150,
              top: 150,
              angle: 0,
              padding: 10,
              cornersize: 10,
            });
            img.scaleToWidth(fabricCanvas.width / 2);
            fabricCanvas.add(img).setActiveObject(img);
            fabricCanvas.renderAll();
            toast.success("Image uploaded successfully!");
          },
          { crossOrigin: "anonymous" }
        );
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error("Error uploading image.");
      } finally {
        setUploadingImage(false);
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
      const elementURL = new FormData();
      elementURL.append("file", file);
      elementURL.append("upload_preset", "za8tsrje");

      try {
        setUploadingElement(true);
        const elementResponse = await axios.post(
          "https://api.cloudinary.com/v1_1/dm42ixhsz/image/upload",
          elementURL
        );
        const element = elementResponse.data.secure_url;

        fabric.Image.fromURL(
          element,
          (img) => {
            img.set({
              left: 150,
              top: 150,
              angle: 0,
              padding: 10,
              cornersize: 10,
            });
            img.scaleToWidth(fabricCanvas.width / 2);
            fabricCanvas.add(img).setActiveObject(img);
            fabricCanvas.renderAll();
            toast.success("Element uploaded successfully!");
          },
          { crossOrigin: "anonymous" }
        );
      } catch (error) {
        console.error("Error uploading element:", error);
        toast.error("Error uploading element.");
      } finally {
        setUploadingElement(false);
      }
    }
  };

  const handleSelectItem = (item) => {
    if (fabricCanvas) {
      fabric.Image.fromURL(
        item.src,
        (img) => {
          img.set({
            left: 150,
            top: 150,
            angle: 0,
            padding: 10,
            cornersize: 10,
          });
          img.scaleToWidth(fabricCanvas.width / 2);
          fabricCanvas.add(img).setActiveObject(img);
          fabricCanvas.renderAll();
          toast.success("Item added to the canvas!");
        },
        { crossOrigin: "anonymous" }
      );
      onClose();
    }
  };

  const selectNewImage = () => {
    const fileInput = document.getElementById("fileInput");
    fileInput.click();
  };

  const selectNewElement = () => {
    if (
      eventName === "BIRTHDAY" ||
      eventName === "WEDDING" ||
      eventName === "HANGOUT" ||
      eventName === "COOPERATE" ||
      eventName === "OTHERS"
    ) {
      onOpen();
    }
    // else {
    //   const fileInput = document.getElementById("elementInput");
    //   fileInput.click();
    // }
  };

  const handleFontChange = (e) => {
    setFont(e.target.value);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleDelete = () => {
    if (fabricCanvas) {
      const activeObject = fabricCanvas.getActiveObject();
      if (activeObject && activeObject !== fabricCanvas.backgroundImage) {
        fabricCanvas.remove(activeObject);
        fabricCanvas.discardActiveObject();
        fabricCanvas.renderAll();
        toast.success("Element deleted!");
      }
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

      if (fabricCanvas) {
        // Increase resolution for HD quality
        const dataURL = fabricCanvas.toDataURL({
          format: "png",
          quality: 1,
          multiplier: 2, // Increase resolution by 2x
        });

        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dm42ixhsz/image/upload",
          {
            file: dataURL,
            upload_preset: "za8tsrje",
          }
        );

        const imageUrl = response.data.secure_url;

        localStorage.setItem("event_image", imageUrl);

        setLoading(false);
        handleNext();
      }
    } catch (error) {
      setLoading(false);
      console.error("Error uploading image:", error);
      toast.error("Error uploading the QR code image.");
    }
  };

  const handleObjectScaling = (e) => {
    const obj = e.target;
    if (!obj) return;

    if (obj.getBoundingRect().top < 0 || obj.getBoundingRect().left < 0) {
      obj.top = Math.max(obj.top, obj.getBoundingRect().height / 2);
      obj.left = Math.max(obj.left, obj.getBoundingRect().width / 2);
    }

    if (
      obj.getBoundingRect().top + obj.getBoundingRect().height >
      fabricCanvas.height
    ) {
      obj.top = Math.min(
        obj.top,
        fabricCanvas.height - obj.getBoundingRect().height / 2
      );
    }
    if (
      obj.getBoundingRect().left + obj.getBoundingRect().width >
      fabricCanvas.width
    ) {
      obj.left = Math.min(
        obj.left,
        fabricCanvas.width - obj.getBoundingRect().width / 2
      );
    }
  };

  useEffect(() => {
    if (fabricCanvas) {
      fabricCanvas.on("object:scaling", handleObjectScaling);
    }

    return () => {
      if (fabricCanvas) {
        fabricCanvas.off("object:scaling", handleObjectScaling);
      }
    };
  }, [fabricCanvas]);

  return (
    <div className="edit">
      <Center display={"flex"} flexDirection={"column"} width={"100%"}>
        <div style={{ border: "2px solid red", display: "inline-block" }}>
          <canvas
            ref={canvasRef}
            style={{
              display: "block",
            }}
          />
        </div>
      </Center>

      {uploadingImage && <Spinner />}
      {uploadingElement && <Spinner />}
      <Box marginTop={"5%"}>
        <Button
          type={"submit"}
          variant={"defaultButton"}
          onClick={downloadQrCode}
        >
          {loading ? <Spinner /> : "Next"}
        </Button>
      </Box>

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

        <ModalContent width={"90%"}>
          <ModalHeader>Add Text</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display={"flex"}
            flexDirection={"column"}
            gap={"20px"}
            padding={"6%"}
          >
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
            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <label>Colour: </label>{" "}
              <input
                style={{ color: color }}
                type="color"
                value={color}
                onChange={handleColorChange}
              />
            </div>

            <Button
              type={"button"}
              variant={"defaultButton"}
              onClick={handleSubmitAddText}
            >
              Add
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal size={"lg"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width={"95%"} height={"90%"} overflow={"scroll"}>
          <ModalHeader>Select Item</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px",
              }}
            >
              {items &&
                items.map((item) => (
                  <div key={item.id} onClick={() => handleSelectItem(item)}>
                    <Image
                      src={item.src}
                      width={80}
                      height={80}
                      alt={item.alt}
                    />
                  </div>
                ))}
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export { StepThree };
