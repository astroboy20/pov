import React, { useState, useEffect } from "react";
import { GalleryStyle } from "./CreateEvent.style";
import { useSelector } from "react-redux";
import { StepOne } from "./Steps/StepOne";
import { StepTwo } from "./Steps/StepTwo";
import useFetchItems from "@/hooks/useFetchItems";

const CreateEvent = () => {
  const { user } = useSelector((state) => state.auth);
  const accessToken = user ? user.token : "";
  const [step, setStep] = useState(1);
  const [prices, setPrices] = useState([]);
  const eventName =
    typeof window !== "undefined" && localStorage.getItem("eventName");

  const [eventData, setData] = useState({
    eventName: "",
    mode: "",
    location: "",
    photosPerPerson: "",
    expectedGuests: "",
    event_date: "",
    endDate: "",
    revealTime: "",
    event_thumbnail: "",
  });

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
    typeof window !== "undefined" &&
      localStorage.setItem("data", JSON.stringify(eventData));
      window.scrollTo(0, 0);
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
    // setData ("")
    window.scrollTo(0, 0);
  };

  const { data } = useFetchItems({
    url: "https://api-cliqpod.koyeb.app/expected-guest",
    token: accessToken,
  });
  
  useEffect(() => {
    if (data) {
      setPrices(data?.guestsExpected);
    }
  }, [data]);

  return (
    <>
      <GalleryStyle>
        {step === 1 && (
          <>
            <StepOne
              step={step}
              eventData={eventData}
              setData={setData}
              eventName={eventName}
              handleNext={handleNext}
              handlePrev={handlePrev}
              prices={prices}
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
