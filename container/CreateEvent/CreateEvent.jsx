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
import { PurpleSpinner, Spinner } from "@/components/Spinner/Spinner";
import { toast } from "react-toastify";
import {Cloudinary} from "@cloudinary/url-gen"
const CreateEvent = () => {
  const { user } = useSelector((state) => state.auth);
  const accessToken = user ? user.token : "";

  const eventName =
    typeof window !== "undefined" && localStorage.getItem("eventName");

  const [selectedImage, setSelectedImage] = useState(null);
  const [step, setStep] = useState(1);

  const [data, setData] = useState({
    eventName: eventName,
    photosPerPerson: "",
    expectedGuests: "",
    startDate: "",
    endDate: "",
    revealTime: "",
    image: "",
  });

  const MAX_FILE_SIZE_MB = 5;
  const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

  const selectNewImage = () => {
    document.getElementById("selectFile").click();
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
    if (file && file.size > MAX_FILE_SIZE_BYTES) {
      setSelectedImage(null);
      setData((prevData) => ({
        ...prevData,
        image: null,
      }));
      toast.warning("Please upload an image file smaller than 5MB.");
      return;
    }
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setSelectedImage(imageURL);
      setData((prevData) => ({
        ...prevData,
        image: file,
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

  const isStepOneValid = () => {
    const { image, startDate, endDate, revealTime, photosPerPerson } =
      data;
    return (
      startDate !== "" &&
      endDate !== "" &&
      revealTime !== "" &&
      photosPerPerson !== "" &&
      image !== ""
    );
  };

  const [prices, setPrices] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://api-cliqpod.koyeb.app/expected-guest", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        const data = response.data.guestsExpected;
        setPrices(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching prices:", error);
        setIsLoading(false);
      });
  }, [accessToken]);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const imageData = new FormData();
      imageData.append("file", data.image);
      imageData.append("upload_preset", "za8tsrje");

      const imageResponse = await axios.post(
        "https://api.cloudinary.com/v1_1/dm42ixhsz/image/upload",
        imageData
      );

      if (imageResponse && imageResponse.data.secure_url) {
        const imageUrl = imageResponse.data.secure_url;

        // Create a new data object including the uploaded image URL
        const updatedData = { ...data, image: imageUrl };

        // Submit the event data with the updated image URL to create an event
        const eventResponse = await axios.post(
          "https://api-cliqpod.koyeb.app/create-event",
          updatedData,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        // Handle event creation response
        if (eventResponse) {
          const userData = eventResponse.data;
          if (userData?.authorization_url) {
            router.push(userData.authorization_url);
            toast.success("Please proceed to payment!");
            setLoading(false);
          } else {
            toast.success("Event created successfully!");
            router.push("/gallery");
            setLoading(false);
          }
        }
      }
    } catch (error) {
      setLoading(false);
      console.error("Error occurred:", error);
    }
  };

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
            {data.image ? (
              <div className="image">
                <Image
                  src={selectedImage}
                  alt="Selected"
                  width={1920}
                  height={1080}
                  objectFit="cover"
                  style={{
                    width: "40%",
                    height: "40vh",
                    margin: "2% 30%",
                  }}
                />
                <button className="change-image" onClick={selectNewImage}>
                  Change Image
                </button>
              </div>
            ) : (
              <span
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "16px",
                  alignItems: "center",
                }}
                className="icon-style"
                onClick={handleImageClick}
              >
                <ImageIcon />
                <CustomText weight={"500"} type={"Htype"} variant={"h2-b"}>
                  upload frame
                </CustomText>
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
                      <EndIcon />
                      <div className="sub-item">
                        <CustomText
                          weight={"500"}
                          type={"Htype"}
                          variant={"h2-b"}
                        >
                          Start Date
                        </CustomText>{" "}
                        {data.startDate && (
                          <CustomText
                            weight={"500"}
                            type={"Htype"}
                            variant={"h2-b"}
                          >
                            {data.startDate}
                          </CustomText>
                        )}
                      </div>
                    </div>
                  </AccordionButton>
                  <AccordionPanel background="none" p={10}>
                    <p style={{ margin: "2% 0" }}>
                      Select the start date and time for the event
                    </p>
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
                          variant={"h2-b"}
                        >
                          End Date
                        </CustomText>{" "}
                        {data.endDate && (
                          <CustomText
                            weight={"500"}
                            type={"Htype"}
                            variant={"h2-b"}
                          >
                            {data.endDate}
                          </CustomText>
                        )}
                      </div>
                    </div>
                  </AccordionButton>
                  <AccordionPanel background="none" p={10}>
                    <p style={{ margin: "2% 0" }}>
                      Select the end date and time for the event
                    </p>
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
                          variant={"h2-b"}
                        >
                          Reveal Photo
                        </CustomText>{" "}
                        {data.revealTime && (
                          <CustomText
                            weight={"500"}
                            type={"Htype"}
                            variant={"h2-b"}
                          >
                            {data.revealTime} hours
                          </CustomText>
                        )}
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
                          variant={"h2-b"}
                        >
                          Photo per person
                        </CustomText>{" "}
                        {data.photosPerPerson && (
                          <CustomText
                            weight={"500"}
                            type={"Htype"}
                            variant={"h2-b"}
                          >
                            {data.photosPerPerson} photos
                          </CustomText>
                        )}
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
                disabled={!isStepOneValid()}
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
                      <GuestIcon />
                      <div className="sub-item">
                        <CustomText
                          weight={"500"}
                          type={"Htype"}
                          variant={"h2-b"}
                        >
                          Select Guest
                        </CustomText>{" "}
                        {/* {data.expectedGuests && (
                          <CustomText
                            weight={"500"}
                            type={"Htype"}
                            variant={"h2-b"}
                          >
                            {data.expectedGuests}
                          </CustomText>
                        )} */}
                      </div>
                    </div>
                  </AccordionButton>
                  <AccordionPanel
                    background="none"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                    gap={10}
                    p={10}
                  >
                    {isloading ? (
                      <PurpleSpinner />
                    ) : (
                      <>
                        {" "}
                        {prices.map((price) => (
                          <GuestOption
                            key={price._id}
                            value={price._id}
                            price={price.price}
                            guest={price.expectedGuest}
                            setValue={handleIDValue}
                            selected={data.expectedGuests === price._id}
                          />
                        ))}
                      </>
                    )}
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>

              <Button
                onClick={handleSubmit}
                type={"submit"}
                variant={"defaultButton"}
              >
                {loading ? <Spinner /> : " Publish"}
              </Button>
            </>
          )}
        </div>
      </GalleryStyle>
    </>
  );
};

export { CreateEvent };
