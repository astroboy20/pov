"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "motion/react";

const Hero = () => {
  const [typedName, setTypedName] = useState("");
  const typingSpeed = 200;
  const switchDelay = 3500;
  const nameIndexRef = useRef(0);

  useEffect(() => {
    const names = ["Stylishly", "Seamlessly", "Elegantly"];

    let typingInterval: NodeJS.Timeout;

    if (typedName.length < names[nameIndexRef.current].length) {
      typingInterval = setInterval(() => {
        const currentName = names[nameIndexRef.current];
        setTypedName((prev) => prev + currentName.charAt(prev.length));
      }, typingSpeed);
    } else {
      const switchTimeout = setTimeout(() => {
        setTypedName("");
        nameIndexRef.current = (nameIndexRef.current + 1) % names.length;
      }, switchDelay);
      return () => clearTimeout(switchTimeout);
    }

    return () => clearInterval(typingInterval);
  }, [typedName]);

  const floatingAnimation = {
    y: [0, -20, 20, -10, 10, 0],
    x: [0, 10, -15, 15, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const images = [
    { src: "/images/a.svg", alt: "float-a", delay: 0 },
    { src: "/images/b.svg", alt: "float-b", delay: 1 },
    { src: "/images/c.svg", alt: "float-c", delay: 2 },
  ];

  return (
    <main className="relative px-[5%] pt-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center text-center gap-[35px]"
      >
        <h1 className="m-auto font-[700] text-4xl lg:text-[72px] w-full sm:w-[80%]">
          Capture Moments and Create Memories of your Event In Real-time; <br />
          <span className="underline text-[#1d1465]">{typedName}.</span>
        </h1>
        <p className="text-[20px] lg:text-[24px] font-medium text-[#1d1465]">
          Transform fleeting moments into timeless memories as an album with
          cliqpod
        </p>
        <div className="flex items-center justify-center gap-5">
          <Link
            href="/auth"
            className="rounded-[40px] bg-[#1d1465] py-[10px] px-[30px] text-white hover:bg-transparent hover:border-l hover:border-r hover:border-[#1d1465] hover:text-[#1d1465] transition ease-in-out duration-500"
          >
            Get Cliqpod
          </Link>
          <Link
            href="/auth"
            className="rounded-[40px] bg-transparent py-[10px] px-[30px] text-[#1d1465] border-l border-r border-[#1d1465] hover:bg-[#1d1465] hover:text-white transition ease-in-out duration-500"
          >
            Know More
          </Link>
        </div>
      </motion.div>

      {/* Floating Images */}
      {images.map((img, index) => (
        <motion.img
          key={index}
          src={img.src}
          alt={img.alt}
          initial={{ opacity: 0 }}
          animate={{
            y: [0, -20, 20, -10, 10, 0],
            x: [0, 10, -15, 15, -10, 0],
            opacity: 1,
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            top: `${20 + index * 15}%`,
            left: `${10 + index * 30}%`,
            width: "40px",
            height: "40px",
            zIndex: 0,
          }}
        />
      ))}

      <motion.span
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {" "}
        <hr className="border border-[#1d146599] opacity-[0.4] mt-10" />
      </motion.span>
    </main>
  );
};

export { Hero };
