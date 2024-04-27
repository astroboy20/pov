import React from "react";
import Image from "next/image";
import { BlueBackIcon } from "@/assets";
import { EventStyle } from "./Event.style";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "@chakra-ui/react";

const Event = () => {
  const router = useRouter();

  return (
    <EventStyle>
      <div className="header">
        <h1>Welcome to Adedamola @ 18 birthday party.</h1>
      </div>

      <div className="body">
        <p>Adedamola@18 birthday party</p>
        <p>#Adedamola@18</p>
      </div>

      <Button
        background={"#1D1465"}
        padding={"20px"}
        borderRadius={"4px"}
        color={"#fff"}
        width={"90%"}
        margin={"auto 5%"}
        position={"absolute"}
        left={"0"}
        bottom={"0"}
        onClick={router.push("/camera")}
      >
        Start cliqing
      </Button>
    </EventStyle>
  );
};

export { Event };
