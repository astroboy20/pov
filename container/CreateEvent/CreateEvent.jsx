import React, { useState, useEffect } from "react";
import Image from "next/image";
import { GalleryStyle } from "./CreateEvent.style";
import { CustomText } from "@/components/CustomText";

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
import { PurpleSpinner, Spinner } from "@/components/Spinner/Spinner";
import { toast } from "react-toastify";
import { Cloudinary } from "@cloudinary/url-gen";
import axios from "axios";
import { StepOne } from "./Steps/StepOne";
import { StepTwo } from "./Steps/StepTwo";

const CreateEvent = () => {
  const { user } = useSelector((state) => state.auth);
  const accessToken = user ? user.token : "";
  const [step, setStep] = useState(1);
  const [prices, setPrices] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const eventName =
    typeof window !== "undefined" && localStorage.getItem("eventName");

  const [data, setData] = useState({
    eventName: eventName,
    eventHashtag: "",
    eventMode: "",
    location: "",
    photosPerPerson: "",
    expectedGuests: "",
    startDate: "",
    endDate: "",
    revealTime: "",
    image: "",
  });

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
    typeof window !== "undefined" &&
      localStorage.setItem("data", JSON.stringify(data));
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

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

      const eventResponse = await axios.post(
        "https://api-cliqpod.koyeb.app/create-event",
        data,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

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
    } catch (error) {
      setLoading(false);
      console.error("Error occurred:", error);
    }
  };

  return (
    <>
      <GalleryStyle>
        {step === 1 && (
          <>
            <StepOne
              step={step}
              data={data}
              setData={setData}
              eventName={eventName}
              handleNext={handleNext}
              handlePrev={handlePrev}
            />
          </>
        )}

        {step === 2 && (
          <StepTwo
            step={step}
            setStep={setStep}
            eventName={eventName}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        )}
      </GalleryStyle>
    </>
  );
};

export { CreateEvent };
