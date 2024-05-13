import { Select } from "@chakra-ui/select";
import React from "react";
import Image from "next/image";
import { events, images } from "./Data";

const StepOne = ({ handleNext }) => {
  const handleSelect = (src) => {
    const selectedImage = images.find((image) => image.src === src);
    typeof window != "undefined" &&
      localStorage.setItem("image", JSON.stringify(selectedImage));
    handleNext();
  };
  const eventName =
    typeof window !== "undefined" && localStorage.getItem("eventName");
  console.log("f", eventName);
  return (
    <>
      {/* <Select
        fontSize={"16px"}
        fontWeight={"500"}
        placeholder="Choose Frame Size"
        border={"none"}
      >
        <option hidden disabled value={""}>
          Choose Frame Size
        </option>
        <option>1080 by 1920</option>
      </Select> */}
      <p>
        Choose your own customized templates for different event categories.
      </p>

      {/* <div className="event-list">
        {events.map((event) => (
          <span key={event.id}>{event.label}</span>
        ))}
      </div> */}

      <div className="images">
        {images
          .filter((image) => image.type === eventName)
          .map((image) => (
            <Image
              onClick={() => handleSelect(image.src)}
              key={image.id}
              src={image.src}
              width={180}
              height={320}
            />
          ))}
      </div>
    </>
  );
};

export { StepOne };
