"use client";
import {
  ChooseIcon,
  DigitalIcon,
  NextArrowIcon,
  NextIcon,
  QRIcon,
  SetupIcon,
  StartIcon,
} from "@/assets";
import { motion } from "motion/react";

const steps = [
  {
    icon: <ChooseIcon />,
    next: <NextArrowIcon />,
    title: "Choose event category",
    desc: "Select your event choice which could either be wedding, birthday or even corporate events.",
  },
  {
    icon: <SetupIcon />,
    next: <NextArrowIcon />,
    title: "Set up an event",
    desc: "By inputing your event itineraries, you are on your way to setting up an event!",
  },
  {
    icon: <DigitalIcon />,
    next: <NextIcon />,
    title: "Customize digital backdrop",
    desc: "Design your digital backdrop to suit your event type.",
  },
  {
    icon: <QRIcon />,
    next: <NextArrowIcon />,
    title: "Scan QR code",
    desc: "Selected event attendees scan QR code to access your already set up event.",
  },
  {
    icon: <StartIcon />,
    next: null,
    title: "Start Cliqing",
    desc: "Start creating event memories and also access to event album.",
  },
];

const HowItWorks = () => {
  return (
    <main className="px-[5%] flex flex-col gap-[50px]">
      {/* Header */}
      <motion.div
        className="text-center lg:text-left"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-[72px] font-bold leading-tight">
          How It Works
        </h1>
        <p className="text-[20px] md:text-xl lg:text-[28px] font-medium text-[#1d1465]">
          Follow these five simple steps to <br className="block md:hidden" />{" "}
          initiate your journey with cliqpod.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-[50px] items-start">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex flex-col gap-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <span className="flex items-center gap-[30px]">
              {step.icon}
              <div className="hidden lg:flex">{step.next}</div>
            </span>
            <h2 className="text-[28px] font-bold">{step.title}</h2>
            <p className="text-[24px] font-[400]">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export { HowItWorks };
