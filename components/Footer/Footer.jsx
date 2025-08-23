"use client"
import React from "react";
import { FooterContainer } from "./Footer.style";
import { Logo_White } from "@/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <FooterContainer>
      <hr className="hr" />
      <footer>
        <div className="one">
          <div>
            <Logo_White />
            <p>Share digital memories of your event...</p>
          </div>
          <div className="icon">
            {" "}
            <Image src={"/images/x.svg"} width={24} height={24} alt="x-logo" />
            <Image
              src={"/images/whatsapp.svg"}
              width={24}
              height={24}
              alt="x-logo"
            />
            <Image
              src={"/images/instagram.svg"}
              width={24}
              height={24}
              alt="x-logo"
            />
          </div>
        </div>
        <div className="two">
          <span>Features</span>
          <p>QR Code</p>
          <p>Templates</p>
          <p>Real-time capturing</p>
        </div>
        <div className="three">
          {" "}
          <span>Support</span>
          <p>FAQs</p>
          <p>Terms of service</p>
        </div>
        <div className="four">
          {" "}
          <span>About</span>
          <p>
            cliqpod is a real <br /> time event photo <br /> sharing platform.
          </p>
          {/* <p>Real-time capturing</p> */}
        </div>
        <div className="five">
          <div className="icon-mobile">
            {" "}
            <Image src={"/images/x.svg"} width={24} height={24} alt="x-logo" />
            <Image
              src={"/images/whatsapp.svg"}
              width={24}
              height={24}
              alt="x-logo"
            />
            <Image
              src={"/images/instagram.svg"}
              width={24}
              height={24}
              alt="x-logo"
            />
          </div>
        </div>
      </footer>

      <hr className="hr" />
    </FooterContainer>
  );
};

export { Footer };
