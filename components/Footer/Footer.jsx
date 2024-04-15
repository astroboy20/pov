import React from "react";
import { FooterContainer } from "./Footer.style";
import { Logo_White } from "@/assets";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="one">
        <div>
          <Logo_White />
          <p>Share digital memories of your event...</p>
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
          Cliqpod is a <br /> digital platform <br /> that helps with <br />{" "}
          different templates for <br /> your different event.{" "}
        </p>
        {/* <p>Real-time capturing</p> */}
      </div>
    </FooterContainer>
  );
};

export { Footer };
