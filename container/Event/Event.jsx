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
        <span>
          <BlueBackIcon />
        </span>

        <h1>Events</h1>

        <span style={{ color: "white" }}>.</span>
      </div>

      <div className="body">
        <Image src={"/images/oops.svg"} height={280} width={380} />
        <p>
          Oopss, you haven’t set any event up yet!!! <br />{" "}
          <Link href={"/event-setup"}>Click Here</Link> to set up an event.
        </p>
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
      >
        Start cliqing
      </Button>
    </EventStyle>
  );
};

export { Event };
