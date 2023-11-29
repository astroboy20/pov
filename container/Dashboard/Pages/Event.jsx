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
          <CustomText weight={"500"} type={"Htype"} variant={"p"}>
            Events
          </CustomText>
          <CustomText weight={"500"} type={"Htype"} variant={"h4"}>
            Your events
          </CustomText>
        </div>
        <div className="new-event">
          <FaPlus />
          <CustomText weight={"500"} type={"Htype"} variant={"h6"}>
            New event
          </CustomText>
        </div>
      </HeaderStyle>
      <BodyStyle>
        <CiCirclePlus size={"50px"} />
        <CustomText weight={"500"} type={"Htype"} variant={"h2"}>
          create event
        </CustomText>
        <CustomText weight={"500"} type={"Htype"} variant={"h4"}>
          let's set up your first Event
        </CustomText>

        <Button type="submit" variant="defaultButton">
          Setup my event
        </Button>
      </BodyStyle>
    </>
  );
};

export default Event;
