/* eslint-disable react/no-unescaped-entities */
import { useOptionContext } from "@/context/option-context";
import React, { useState } from "react";
import { BodyStyle, DashboardStyle, HeaderStyle } from "../Dashboard.style";
import { CustomText } from "@/components/CustomText";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useRouter } from "next/router";
import NavLink from "next/link";
import styled from "../Dashboard.module.css";
import {toast} from "react-toastify"
import Image from "next/image"

const Event = () => {
  const { option } = useOptionContext();
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
    <>
    {/* <Image width={100} height={"100"} src={"/images/dashboard.png"} alt="hey"/> */}
      <DashboardStyle>
        <HeaderStyle></HeaderStyle>

        <BodyStyle>
          <CustomText weight={"500"} type={"Htype"} variant={"h1"}>
            CliqPod
          </CustomText>
          <div>
            <form onSubmit={handleSubmit}>
              <Input
                type="email"
                placeholder="What is the Occasion?"
                variant="text"
                required
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
              />
              <Button type="submit" variant="defaultButton">
                Setup my event
              </Button>
            </form>
          </div>
        </BodyStyle>
      </DashboardStyle>
    </>
  );
};

export default Event;
