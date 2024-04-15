import React from "react";

import { Customize } from "@/container/Home/Customize/Customize";
import { Hero } from "@/container/Home/Hero";
import { FAQ } from "./FAQs";

const HomeContainer = () => {
  return (
    <>
      <Hero />
      <Customize />
      <FAQ/>
    </>
  );
};

export { HomeContainer };
