import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/accordion";
import Image from "next/image";
import { GalleryStyle } from "./CreateEvent.style";
import { CustomText } from "@/components/CustomText";
import { PhotoData, RevealData } from "./Options/data";
import { ItemStyle } from "./Options/Options.style";
import { Input } from "@chakra-ui/input";
import { CiCalendarDate, CiCamera } from "react-icons/ci";
import { SiNamebase } from "react-icons/si";
import { BlueBackIcon, EndIcon, ImageIcon, PIcon, RevealIcon } from "@/assets";
import Option from "./Options/Options";
import { useRouter } from "next/router";
import { Button } from "@/components/Button";
const CreateEvent = () => {
  const eventName =
    typeof window !== "undefined" && localStorage.getItem("eventName");
  
  const [selectedImage, setSelectedImage] = useState(null);

  const [data, setData] = useState({
    eventName: eventName,
    subName: "",
    photosPerPerson: "",
    expectedGuests: "",
    startDate: "",
    endDate: "",
    revealTime: "",
    image: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(data);
  };

  const handleRevealValue = (newValue) => {
    setData((prevData) => ({
      ...prevData,
      revealTime: newValue,
    }));
  };

  const handlePhotoValue = (newValue) => {
    setData((prevData) => ({
      ...prevData,
      photosPerPerson: newValue,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setSelectedImage(e.target.result);

        // Update the 'image' property in the 'data' state with the selected image
        setData((prevData) => ({
          ...prevData,
          image: e.target.result, // Set 'image' to the selected image
        }));
      };

      reader.readAsDataURL(file);
    }
  };
  const handleImageClick = () => {
    document.getElementById("selectFile").click();
  };

  const router = useRouter();
  const handleRoute = () => {
    router.push("/dashboard");
  };
  return (
    <>
      <GalleryStyle>
        <div className="header">
          <div className="header-head">
            <span onClick = {handleRoute}> <BlueBackIcon /></span>
           
            <CustomText type={"Htype"} variant={"h3"}>
              {eventName}
            </CustomText>
            <span style={{ color: "white" }}>.</span>
          </div>
          <div htmlFor="customFileInput" className="image-input">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              hidden
              id="selectFile"
            />
            {selectedImage ? (
              <Image
                src={selectedImage}
                alt="Selected"
                width={100}
                height={100}
                style={{
                  width: "100%",
                  height: "30vh",
                }}
              />
            ) : (
              <span className="icon-style" onClick={handleImageClick}>
                <ImageIcon />
              </span>
            )}
            <div></div>
          </div>
        </div>
        <div className="body">
          <Accordion allowToggle>
            <AccordionItem>
              <AccordionButton
                style={{
                  background: "none",
                  border: "none",
                  gap: "10px",
                }}
              >
                <div className="item">
                  <SiNamebase />
                  <div className="sub-item">
                    <CustomText weight={"500"} type={"Htype"} variant={"h5"}>
                      Sub Name
                    </CustomText>{" "}
                    {data.subName && (
                      <CustomText weight={"500"} type={"Htype"} variant={"h5"}>
                        {data.subName}
                      </CustomText>
                    )}
                  </div>
                </div>
              </AccordionButton>
              <AccordionPanel background="none" p={10}>
                <Input
                  placeholder="Event name"
                  size="md"
                  type="text"
                  name="subName"
                  value={data.subName}
                  onChange={handleChange}
                  className="input"
                />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Accordion allowToggle>
            <AccordionItem>
              <AccordionButton
                style={{
                  background: "none",
                  border: "none",
                  gap: "10px",
                }}
              >
                <div className="item">
                  <EndIcon />
                  <div className="sub-item">
                    <CustomText weight={"500"} type={"Htype"} variant={"h5"}>
                      Start Date
                    </CustomText>{" "}
                    {data.startDate && (
                      <CustomText weight={"500"} type={"Htype"} variant={"h5"}>
                        {data.startDate}
                      </CustomText>
                    )}
                  </div>
                </div>
              </AccordionButton>
              <AccordionPanel background="none" p={10}>
                <Input
                  placeholder="Select Date and Time"
                  size="md"
                  name="startDate"
                  type="datetime-local"
                  value={data.startDate}
                  onChange={handleChange}
                  className="input"
                />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Accordion allowToggle>
            <AccordionItem>
              <AccordionButton
                style={{
                  background: "none",
                  border: "none",
                  gap: "10px",
                }}
              >
                <div className="item">
                  <EndIcon />
                  <div className="sub-item">
                    <CustomText weight={"500"} type={"Htype"} variant={"h5"}>
                      End Date
                    </CustomText>{" "}
                    {data.endDate && (
                      <CustomText weight={"500"} type={"Htype"} variant={"h5"}>
                        {data.endDate}
                      </CustomText>
                    )}
                  </div>
                </div>
              </AccordionButton>
              <AccordionPanel background="none" p={10}>
                <Input
                  placeholder="Select Date and Time"
                  size="md"
                  name="endDate"
                  type="datetime-local"
                  value={data.endDate}
                  onChange={handleChange}
                  className="input"
                />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion allowToggle>
            <AccordionItem>
              <AccordionButton
                style={{
                  background: "none",
                  border: "none",
                  gap: "10px",
                }}
              >
                 <div className="item">
                  <RevealIcon />
                  <div className="sub-item">
                    <CustomText weight={"500"} type={"Htype"} variant={"h5"}>
                      Reveal Photo
                    </CustomText>{" "}
                  </div>
                </div>
              </AccordionButton>
              <AccordionPanel background="none" p={10}>
                <ItemStyle>
                  {RevealData.map((reveal) => (
                    <Option
                      key={reveal.id}
                      label={reveal.label}
                      value={reveal.value}
                      setValue={handleRevealValue}
                      selected={data.revealTime === reveal.value}
                    />
                  ))}
                </ItemStyle>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion allowToggle>
            <AccordionItem>
              <AccordionButton
                style={{
                  background: "none",
                  border: "none",
                  gap: "10px",
                }}
              >
                <div className="item">
                  <PIcon />
                  <div className="sub-item">
                    <CustomText weight={"500"} type={"Htype"} variant={"h5"}>
                      Photo per person
                    </CustomText>{" "}
                  </div>
                </div>
              </AccordionButton>
              <AccordionPanel background="none" p={10}>
                <ItemStyle>
                  {PhotoData.map((photo) => (
                    <Option
                      key={photo.id}
                      label={photo.label}
                      value={photo.value}
                      selected={data.photosPerPerson === photo.value}
                      setValue={handlePhotoValue}
                    />
                  ))}
                </ItemStyle>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Button
            onClick={""}
            type={"submit"}
            variant={"defaultButton"}
          >Continue</Button>
        </div>
      </GalleryStyle>
    </>
  );
};

export { CreateEvent };
