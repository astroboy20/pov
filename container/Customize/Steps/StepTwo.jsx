import { useState } from "react";
import Image from "next/image";
import { Button, Box } from "@chakra-ui/react";
import { images } from "./Data";
import { Edit } from "./StepFour";

const StepTwo = ({ handleNext }) => {
  const imageInfo =
    typeof window !== "undefined" && localStorage.getItem("image");
  const parsedData = JSON.parse(imageInfo);

  const [editItem, setEditItem] = useState(false);
  const [showMoreImages, setShowMoreImages] = useState(false);

  const showMore = () => {
    setShowMoreImages(!showMoreImages);
  };
  const EditItem = () => {
    setEditItem(!editItem);
  };

  const eventName =
    typeof window !== "undefined" && localStorage.getItem("eventName");

  return (
    <div className="preview-body">
      <div className="preview">
        <Image
          className="image-preview"
          src={parsedData?.src}
          width={1080}
          height={1920}
          layout="responsive"
        />
        <div className="final-text">
          <h1>{parsedData?.filterName}</h1>
          <p> {parsedData?.info}</p>
          <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
            <Button
              fontSize={"12px"}
              onClick={handleNext}
              background={"#1D1465"}
              width={"100%"}
              color={"#fff"}
            >
              Edit Template
            </Button>
            <Button
              border={"0.5px solid #1D1465"}
              fontSize={"12px"}
              width={"100%"}
              background={"none"}
              color={"#1D1465"}
              onClick={showMore}
            >
              Show More
            </Button>
          </Box>
        </div>
      </div>
      {showMoreImages && (
        <div className="show-more">
          <h1>More Templates</h1>
          <div className="images">
            {images
              .filter((image) => image.type === eventName)
              .map((image) => (
                <Image
                  onClick={() => handleSelect(image.src)}
                  key={image.id}
                  src={image.src}
                  width={1080}
                  height={1920}
                  layout="responsive"
                />
              ))}
          </div>
        </div>
      )}
      {/* {editItem && (
        <div className="show-more">
          <Edit/>
        </div>
      )} */}
    </div>
  );
};

export { StepTwo };
