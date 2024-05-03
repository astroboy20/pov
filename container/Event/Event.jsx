import React from "react";
import Image from "next/image";
import { BlueBackIcon } from "@/assets";
import { EventStyle } from "./Event.style";
import Link from "next/link";

const Event = () => {
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
        <Image
          src={"/images/oops.svg"}
          height={280}
          width={380}
          objectFit="contain"
          className="image"
        />
        <p>
          Oopss, you haven’t set any event up yet!!! <br />{" "}
          <Link href={"/event-setup"}>Click Here</Link> to set up an event.
        </p>
      </div>
    </EventStyle>
  );
};

export { Event };
