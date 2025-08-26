"use client";
import React from "react";
import { Logo_White } from "@/assets";
import Image from "next/image";
import { motion } from "motion/react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
    },
  }),
};

const Footer = () => {
  return (
    <main className="px-[5%] py-[3%] text-white bg-[#1d1465] flex flex-col gap-[30px] overflow-hidden">
      <hr className="opacity-[0.4]" />
      <footer className="flex flex-col lg:flex-row gap-[25px] text-white lg:justify-between">
        {/* Logo + Socials */}
        <motion.div
          className="hidden lg:flex flex-col gap-[25px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0}
        >
          <div>
            <Logo_White />
            <p>Share digital memories of your event...</p>
          </div>
          <div className="flex gap-[10px]">
            <Image src={"/images/x.svg"} width={24} height={24} alt="x-logo" />
            <Image
              src={"/images/whatsapp.svg"}
              width={24}
              height={24}
              alt="whatsapp-logo"
            />
            <Image
              src={"/images/instagram.svg"}
              width={24}
              height={24}
              alt="instagram-logo"
            />
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          className="flex flex-col gap-[25px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={1}
        >
          <span className="text-[18px] font-bold">Features</span>
          <p>QR Code</p>
          <p>Templates</p>
          <p>Real-time capturing</p>
        </motion.div>

        {/* Support */}
        <motion.div
          className="flex flex-col gap-[25px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={2}
        >
          <span className="text-[18px] font-bold">Support</span>
          <p>FAQs</p>
          <p>Terms of service</p>
        </motion.div>

        {/* About */}
        <motion.div
          className="flex flex-col gap-[25px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={3}
        >
          <span className="text-[18px] font-bold">About</span>
          <p>
            cliqpod is a real <br /> time event photo <br /> sharing platform.
          </p>
        </motion.div>

        {/* Mobile Socials */}
        <motion.div
          className="five flex lg:hidden gap-[10px] items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={4}
        >
          <Image src={"/images/x.svg"} width={24} height={24} alt="x-logo" />
          <Image
            src={"/images/whatsapp.svg"}
            width={24}
            height={24}
            alt="whatsapp-logo"
          />
          <Image
            src={"/images/instagram.svg"}
            width={24}
            height={24}
            alt="instagram-logo"
          />
        </motion.div>
      </footer>

      <hr className="opacity-[0.4]" />
    </main>
  );
};

export { Footer };
