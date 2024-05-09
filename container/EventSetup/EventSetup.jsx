import React, { useState } from "react";
import { BodyStyle, EventSetupStyle, HeaderStyle } from "./EventSetup.style";
import { CustomText } from "@/components/CustomText";
import { Select } from "@chakra-ui/select";
import { Button } from "@/components/Button";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const EventSetup = () => {
  const router = useRouter();
  const [eventName, setEventName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (eventName.trim() !== "") {
      typeof window !== "undefined" &&
        localStorage.setItem("eventName", eventName.toUpperCase());

      router.push("/create-event");
    } else {
      toast.warning("Enter a valid event name");
    }
  };

  const handleRoute = () => {
    router.push("/create-event");
  };
  return (
    <EventSetupStyle>
      {" "}
      <HeaderStyle></HeaderStyle>
      <BodyStyle>
        <CustomText weight={"500"} type={"Htype"} variant={"h1"}>
          Event Set Up
        </CustomText>
        <div>
          <form onSubmit={handleSubmit}>
            <Select
              size="lg"
              fontSize={"14px"}
              borderRadius={"4px"}
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            >
              <option value="" disabled hidden>
                Select Event Category
              </option>
              <option value="Birthday">Birthday </option>
              <option value="Wedding">Wedding</option>
              <option value="Graduation">Graduation</option>
              <option value="Hangout">Hangout</option>
              <option value="House Party">House party</option>
            </Select>
            <Button type="submit" variant="defaultButton">
              Setup up event
            </Button>
          </form>
        </div>
      </BodyStyle>
    </EventSetupStyle>
  );
};

export { EventSetup };
