import { BlueBackIcon } from "@/assets";
import { Button } from "@/components/Button";
import React from "react";
import {useRouter} from "next/router"

const StepTwo = ({ step, handlePrev, handleRoute, eventName }) => {
  const data = typeof window !== "undefined" && localStorage.getItem("data");
  const parsedData = JSON.parse(data);


  const formatDate =(dateString)=> {
    const date = new Date(dateString);
  
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
  
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
  
    const formattedDate = `${month} ${day}th by ${hours}:${minutes} GMT`;
  
    return formattedDate;
  }
  
  const router = useRouter()

  const handleRouter = () =>{
    return router.push ("/customize")
  }
 
  
  return (
    <>
      <div className="header-step2">
        <div className="header-head">
          <span onClick={step === 2 && handlePrev}>
            <BlueBackIcon />
          </span>

          <h1>{eventName}</h1>

          <span style={{ color: "white" }}>.</span>
        </div>

        <div className="header-text">
          {" "}
          <h1>{parsedData?.eventName}</h1>
        </div>
      </div>
      <div className="body-step2">
        <div className="text">
            <p>{parsedData?.eventName}</p>
            <p>{formatDate(parsedData.event_date)}</p>
            <p>{parsedData?.location}</p>
            <p>Event Mode: {parsedData?.eventMode}</p>
            <p>{parsedData?.photosPerPerson} cliqs</p>
            <p>cliq reveal after {parsedData?.revealTime}</p>
        </div>


        <Button
            onClick={handleRouter}
          type={"submit"}
          variant={"defaultButton"}
        >
          Customize Cliq
        </Button>
      </div>
    </>
  );
};

export { StepTwo };
