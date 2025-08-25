"use client";
import React from "react";
import { Logo_White } from "@/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <main className="px-[5%] py-[3%] text-white bg-[#1d1465] flex flex-col gap-[30px]">
      <hr className="hr opacity-[0.4]" />
      <footer className="flex flex-col lg:flex-row gap-[25px] text-white lg:justify-between">
        <div className="hidden lg:flex flex-col gap-[25px] ">
          <div>
            <Logo_White />
            <p>Share digital memories of your event...</p>
          </div>
          <div className="flex gap-[10px]">
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
        <div className="flex flex-col gap-[25px]">
          <span className="text-[18px] font-bold">Features</span>
          <p>QR Code</p>
          <p>Templates</p>
          <p>Real-time capturing</p>
        </div>
        <div className="flex flex-col gap-[25px]">
          {" "}
          <span className="text-[18px] font-bold">Support</span>
          <p>FAQs</p>
          <p>Terms of service</p>
        </div>
        <div className="flex flex-col gap-[25px]">
          {" "}
          <span className="text-[18px] font-bold">About</span>
          <p>
            cliqpod is a real <br /> time event photo <br /> sharing platform.
          </p>
          {/* <p>Real-time capturing</p> */}
        </div>
        <div className="five">
          <div className="flex lg:hidden gap-[10px] items-center">
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

      <hr className="hr opacity-[0.4]" />
    </main>
  );
};

export { Footer };
