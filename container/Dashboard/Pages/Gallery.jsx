import React, { useState } from "react";
import { GalleryStyle } from "../Dashboard.style";
import { CiCalendarDate } from "react-icons/ci";
import { FaRegHourglass } from "react-icons/fa";
import { CiCamera } from "react-icons/ci";
import { CustomText } from "@/components/CustomText";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/accordion";
import { Input } from "@chakra-ui/input";
const Gallery = () => {
  const [value, setValue] = React.useState("");
  const handleChange = (event) => setValue(event.target.value);

  return (
    <>
      <GalleryStyle>
        <div className="header">
          <div className="header-head">heyyy</div>
        </div>
        <div className="body">
          <Accordion allowToggle>
            <AccordionItem>
              <AccordionButton
                style={{
                  background: "none",
                  color: "white",
                  border: "none",
                  gap: "10px",
                }}
              >
                <div>
                  <CiCalendarDate />
                </div>
                <div className="item">
                  <CustomText weight={"500"} type={"Htype"} variant={"h5"}>
                    Start Date
                  </CustomText>{" "}
                  {value && (
                    <CustomText weight={"500"} type={"Htype"} variant={"h5"}>
                      {value}
                    </CustomText>
                  )}
                </div>
              </AccordionButton>
              <AccordionPanel background="none">
                <Input
                  placeholder="Select Date and Time"
                  size="md"
                  type="datetime-local"
                  value={value}
                  onChange={handleChange}
                />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          
          <Accordion allowToggle>
            <AccordionItem>
              <AccordionButton
                style={{
                  background: "none",
                  color: "white",
                  border: "none",
                  gap: "10px",
                }}
              >
                <FaRegHourglass />{" "}
                <CustomText weight={"500"} type={"Htype"} variant={"h5"}>
                  Reveal Photo
                </CustomText>{" "}
              </AccordionButton>
              <AccordionPanel background="none">
                <div>
                    12 hours after
                    24 hours later
                </div>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion allowToggle>
            <AccordionItem>
              <AccordionButton
                style={{
                  background: "none",
                  color: "white",
                  border: "none",
                  gap: "10px",
                }}
              >
                <CiCamera />{" "}
                <CustomText weight={"500"} type={"Htype"} variant={"h5"}>
                  Photo per person
                </CustomText>{" "}
              </AccordionButton>
              <AccordionPanel background="none">
                5 photos 10 photos 15 photos 25 photos
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </GalleryStyle>
    </>
  );
};

export default Gallery;
