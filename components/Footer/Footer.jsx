import React from "react";
import { FooterContainer } from "./Footer.style";
import { Logo_White } from "@/assets";
import Image from "next/image"

const Footer = () => {
  return (
    <FooterContainer>
        <hr className="hr"/>
        <footer>
        <div className="one">
        <div>
          <Logo_White />
          <p>Share digital memories of your event...</p>
        </div>
        <div className="icon">
              {" "}
              <Image
                src={"/images/x.png"}
                width={24}
                height={24}
                alt="x-logo"
              />
              <Image
                src={"/images/whatsapp.png"}
                width={24}
                height={24}
                alt="x-logo"
              />
              <Image
                src={"/images/instagram.png"}
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
          Cliqpod is a <br /> digital platform <br /> that helps with <br />{" "}
          different templates for <br /> your different event.{" "}
        </p>
        {/* <p>Real-time capturing</p> */}
      </div>

        </footer>
     
       <hr className="hr"/>
    </FooterContainer>
  );
};

export { Footer };
