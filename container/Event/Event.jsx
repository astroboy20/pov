import React from "react";
import Image from "next/image";
import { BlueBackIcon } from "@/assets";
import { EventStyle } from "./Event.style";
import Link from "next/link"
import { useRouter } from "next/router";

const Event = () => {
    const router = useRouter()

    const handleRoute  = ()=>{
        return router.push("/dashboard")
    }
  return (
    <EventStyle>
      <div className="header">
        <span onClick={handleRoute}> 
          <BlueBackIcon />
        </span>
        <h1>Events</h1>
        <span style={{ color: "white" }}>.</span>
      </div>

      <div className="body">
        <Image src={"/images/oops.svg"} width={380} height={280} alt="oops" />
        <div className="text">
          <p>
            Oopss, you haven’t set any event up yet!!! <br />
          <Link href={"/event-setup"}> Click Here</Link>  to set up an event.
          </p>
        </div>
      </div>
    </EventStyle>
  );
};

export { Event };
