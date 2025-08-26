"use client"
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import { Customize } from "@/container/Home/Customize/customize-section";
import { FAQ } from "./FAQs";
import { Memories } from "./Memories/Memorises";
import { Work } from "./Work";
import { Slider } from "./Slider";
import { Hero } from "./hero-section";

const HomeContainer = () => {
  const controlsSlider = useAnimation();
  const controlsCustomize = useAnimation();
  const controlsMemories = useAnimation();
  const controlsWorks = useAnimation();
  const controlsFAQ = useAnimation();


  return (
    <>
      <Hero />
      <Customize />
      <Memories />
      {/* <motion.div
        id="memories"
        animate={controlsMemories}
        initial={{ opacity: 0, y: 50 }}
      >
     
      </motion.div> */}
      {/* <motion.div
        id="slider"
        animate={controlsSlider}
        initial={{ opacity: 0, y: 50 }}
      >
        <Slider />
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
    </>
  );
};

export { HomeContainer };
