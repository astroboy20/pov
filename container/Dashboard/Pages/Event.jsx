/* eslint-disable react/no-unescaped-entities */
import { useOptionContext } from "@/context/option-context";
import React from "react";
import { BodyStyle, HeaderStyle } from "../Dashboard.style";
import { CustomText } from "@/components/CustomText";
import { Button } from "@/components/Button";
import { FaPlus } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";

const Event = () => {
  const { option } = useOptionContext();
  return (
    <>
      <HeaderStyle>
        <div>
          <CustomText weight={"500"} type={"Htype"} variant={"h2"}>
            Events
          </CustomText>
          <CustomText weight={"500"} type={"Htype"} variant={"h4"}>
            Your events
          </CustomText>
        </div>
        <div className="new-event">
          <CustomText weight={"500"} type={"Htype"} variant={"h4"}>
            <FaPlus /> New event
          </CustomText>
        </div>
      </HeaderStyle>
      <BodyStyle>
        <CiCirclePlus size={"50px"} />
        create event let's start set up your first Event
        <Button type="submit" variant="white">
          Setup my event
        </Button>
      </BodyStyle>
    </>
  );
};

export default Event;
