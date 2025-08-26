"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import { Customize } from "@/container/Home/customize-section";
import { FAQ } from "./FAQs";
import { Work } from "./Work";
import { Slider } from "@/container/Home/slider-section";
import { Hero } from "./hero-section";
import { Memories } from "./memorises-section";

const HomeContainer = () => {
  const controlsSlider = useAnimation();
  const controlsCustomize = useAnimation();
  const controlsMemories = useAnimation();
  const controlsWorks = useAnimation();
  const controlsFAQ = useAnimation();

  return (
    <main className="flex flex-col gap-20">
      <Hero />
      <Customize />
      <Memories />
      <Slider />
      {/* <motion.div
        id="slider"
        animate={controlsSlider}
        initial={{ opacity: 0, y: 50 }}
      >
      
      </motion.div> */}

      {/* <motion.div
        id="work"
        animate={controlsWorks}
        initial={{ opacity: 0, y: 50 }}
      >
        <Work />
      </motion.div> */}

      {/* <motion.div
        id="faq"
        animate={controlsFAQ}
        initial={{ opacity: 0, y: 50 }}
      >
        <FAQ />
      </motion.div> */}
    </main>
  );
};

export { HomeContainer };
