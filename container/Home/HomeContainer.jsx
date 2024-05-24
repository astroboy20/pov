import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import { Customize } from "@/container/Home/Customize/Customize";
import { Hero } from "@/container/Home/Hero";
import { FAQ } from "./FAQs";
import { Memories } from "./Memories/Memorises";
import { Work } from "./Work";

const HomeContainer = () => {
  const controlsHero = useAnimation();
  const controlsCustomize = useAnimation();
  const controlsMemories = useAnimation();
  const controlsWorks = useAnimation();
  const controlsFAQ = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const customizeOffset = document.getElementById("customize").offsetTop;
      const memoriesOffset = document.getElementById("memories").offsetTop;
      const workOffset = document.getElementById("work").offsetTop;
      const faqOffset = document.getElementById("faq").offsetTop;

      
      if (scrollPosition >= customizeOffset - windowHeight / 2) {
        controlsCustomize.start({ opacity: 1, y: 0 });
      }
      if (scrollPosition >= memoriesOffset - windowHeight / 2) {
        controlsMemories.start({ opacity: 1, y: 0 });
      }
      if (scrollPosition >= workOffset - windowHeight / 2) {
        controlsWorks.start({ opacity: 1, y: 0 });
      }
      if (scrollPosition >= faqOffset - windowHeight / 2) {
        controlsFAQ.start({ opacity: 1, y: 0 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [
    controlsCustomize,
    controlsMemories,
    controlsFAQ,
    controlsWorks,
  ]);

  return (
    <>
       
      
        <Hero />
      <motion.div
        id="customize"
        animate={controlsCustomize}
        initial={{ opacity: 0, y: 50 }}
      >
        <Customize />
      </motion.div>
      <motion.div
        id="memories"
        animate={controlsMemories}
        initial={{ opacity: 0, y: 50 }}
      >
        <Memories />
      </motion.div>
      <motion.div
        id="work"
        animate={controlsWorks}
        initial={{ opacity: 0, y: 50 }}
      >
        <Work />
      </motion.div>

      <motion.div
        id="faq"
        animate={controlsFAQ}
        initial={{ opacity: 0, y: 50 }}
      >
        <FAQ />
      </motion.div>
    </>
  );
};

export { HomeContainer };
