import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import { Customize } from "@/container/Home/Customize/Customize";
import { Hero } from "@/container/Home/Hero";
import { FAQ } from "./FAQs";
import { Memories } from "./Memories/Memorises";

const HomeContainer = () => {
  const controlsHero = useAnimation();
  const controlsCustomize = useAnimation();
  const controlsMemories = useAnimation();
  const controlsFAQ = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const heroOffset = document.getElementById("hero").offsetTop;
      const customizeOffset = document.getElementById("customize").offsetTop;
      const memoriesOffset = document.getElementById("memories").offsetTop;
      const faqOffset = document.getElementById("faq").offsetTop;

      if (scrollPosition >= heroOffset - windowHeight / 2) {
        controlsHero.start({ opacity: 1, y: 0 });
      }
      if (scrollPosition >= customizeOffset - windowHeight / 2) {
        controlsCustomize.start({ opacity: 1, y: 0 });
      }
      if (scrollPosition >= memoriesOffset - windowHeight / 2) {
        controlsMemories.start({ opacity: 1, y: 0 });
      }
      if (scrollPosition >= faqOffset - windowHeight / 2) {
        controlsFAQ.start({ opacity: 1, y: 0 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controlsHero, controlsCustomize, controlsMemories, controlsFAQ]);

  return (
    <>
      <motion.div id="hero">
        <Hero />
      </motion.div>
      <motion.div id="customize" animate={controlsCustomize} initial={{ opacity: 0, y: 50 }}>
        <Customize />
      </motion.div>
      <motion.div id="memories" animate={controlsMemories} initial={{ opacity: 0, y: 50 }}>
        <Memories />
      </motion.div>
      <motion.div id="faq" animate={controlsFAQ} initial={{ opacity: 0, y: 50 }}>
        <FAQ />
      </motion.div>
    </>
  );
};

export { HomeContainer };
