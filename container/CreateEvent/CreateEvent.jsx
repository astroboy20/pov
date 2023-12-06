import React, { useState, useEffect } from "react";
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
import { SiNamebase } from "react-icons/si";
import { useSelector } from "react-redux";
import {
  BackArrow,
  BlueBackIcon,
  EndIcon,
  GuestIcon,
  ImageIcon,
  PIcon,
  RevealIcon,
} from "@/assets";
import Option, { GuestOption } from "./Options/Options";
import { useRouter } from "next/router";
import { Button } from "@/components/Button";
import axios from "axios";
import { PurpleSpinner } from "@/components/Spinner/Spinner";
const CreateEvent = () => {
  const { user } = useSelector((state) => state.auth);
  const accessToken = user ? user.token : "";
  const eventName =
    typeof window !== "undefined" && localStorage.getItem("eventName");

  const [selectedImage, setSelectedImage] = useState(null);
  const [step, setStep] = useState(1);

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

  const handleIDValue = (newValue) => {
    setData((prevData) => ({
      ...prevData,
      expectedGuests: newValue,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const fileName = file.name;
      const imageURL = URL.createObjectURL(file);
      setSelectedImage(imageURL);
      console.log(fileName);
      setData((prevData) => ({
        ...prevData,
        image: imageURL,
      }));
    }
  };
  const handleImageClick = () => {
    document.getElementById("selectFile").click();
  };

  const router = useRouter();
  const handleRoute = () => {
    router.push("/dashboard");
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };
  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const [prices, setPrices] = useState([]);
  const [isloading,setIsLoading] = useState (false)

  useEffect(() => {
    setIsLoading(true)
    axios
      .get("https://api-cliqpod.koyeb.app/expected-guest", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        const data = response.data.guestsExpected;
        setPrices(data);
        setIsLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching prices:", error);
        setIsLoading(false)
      });
  }, [accessToken]);

  const handleSubmit = () =>{
    console.log(data)
  }

  return (
    <>
      <GalleryStyle>
        <div className="header">
          <div className="header-head">
            <span onClick={handleRoute}>
              {" "}
              <BlueBackIcon />
            </span>

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
          {step === 1 && (
            <>
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
                        <CustomText
                          weight={"500"}
                          type={"Htype"}
                          variant={"h5"}
                        >
                          Sub Name
                        </CustomText>{" "}
                        {data.subName && (
                          <CustomText
                            weight={"500"}
                            type={"Htype"}
                            variant={"h5"}
                          >
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
                        <CustomText
                          weight={"500"}
                          type={"Htype"}
                          variant={"h5"}
                        >
                          Start Date
                        </CustomText>{" "}
                        {data.startDate && (
                          <CustomText
                            weight={"500"}
                            type={"Htype"}
                            variant={"h5"}
                          >
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
                        <CustomText
                          weight={"500"}
                          type={"Htype"}
                          variant={"h5"}
                        >
                          End Date
                        </CustomText>{" "}
                        {data.endDate && (
                          <CustomText
                            weight={"500"}
                            type={"Htype"}
                            variant={"h5"}
                          >
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
                        <CustomText
                          weight={"500"}
                          type={"Htype"}
                          variant={"h5"}
                        >
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
                        <CustomText
                          weight={"500"}
                          type={"Htype"}
                          variant={"h5"}
                        >
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
                onClick={handleNext}
                type={"submit"}
                variant={"defaultButton"}
              >
                Continue
              </Button>
            </>
          )}
          {step === 2 && (
            <>
              <div style={{ display: "flex", gap: "10px" }}>
                <span onClick={handlePrev}>
                  <BackArrow />
                </span>
                <CustomText weight={"500"} type={"Htype"} variant={"h1-b"}>
                  Finish Up
                </CustomText>
              </div>

              <CustomText weight={"500"} type={"Htype"} variant={"h3-b"}>
                How many guest are participating?
              </CustomText>

              <CustomText weight={"500"} type={"Htype"} variant={"h3-c"}>
                Pricing scales for more guests. Upgrade at any time (even after
                publishing). Guests can participate without downloading the app
                by scanning a QR code or opening a link. iPhone users can
                participate too!
              </CustomText>

             {isloading ? (<PurpleSpinner/>) : (<> {prices.map((price) => (
                <GuestOption
                  key={price._id}
                  value={price._id}
                  price={price.price}
                  guest={price.expectedGuest}
                  setValue={handleIDValue}
                  selected={data.expectedGuests === price._id}
                />
              ))}</>)}
             

              <Button
                onClick={handleSubmit}
                type={"submit"}
                variant={"defaultButton"}
              >
                Publish
              </Button>
            </>
          )}
        </div>
      </GalleryStyle>
    </>
  );
};

export { CreateEvent };
