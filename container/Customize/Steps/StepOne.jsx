import React from "react";
import Image from "next/image";
import { images } from "./Data";

const StepOne = ({ handleNext, setCurrentStep, setBlankCanvas, setCameFromNewTemplate }) => {
  const handleSelect = (src) => {
    const selectedImage = images.find((image) => image.src === src);
    if (typeof window !== "undefined") {
      localStorage.setItem("image", JSON.stringify(selectedImage));
      setBlankCanvas(false);
    }
    handleNext();
  };

  const eventName =
    typeof window !== "undefined" && localStorage.getItem("eventName");

  return (
    <>
      <p>
        Choose your own customized templates for different event categories.
      </p>
      <div className="images">
        {images
          .filter((image) => image.type === eventName)
          .map((image) => (
            <Image
              onClick={() => handleSelect(image.src)}
              key={image.id}
              src={image.source}
              width={1080}
              height={1920}
              layout="responsive"
            />
          ))}
        <div className="customize-page">
          <h1
            onClick={() => {
              setCurrentStep(3);
              setBlankCanvas(true);
              setCameFromNewTemplate(true);
            }}
          >
            Create New Template
          </h1>
        </div>
      </div>
    </>
  );
};

export { StepOne };
