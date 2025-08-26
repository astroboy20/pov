import { Customize } from "@/container/home-container/customize-section";
import { Slider } from "@/container/home-container/slider-section";
import { Hero } from "./hero-section";
import { Memories } from "./memorises-section";
import { HowItWorks } from "./how-it-works";
import { FAQ } from "./faqs/faq-section";

const HomeContainer = () => {
  return (
    <main className="flex flex-col gap-20">
      <Hero />
      <Customize />
      <Memories />
      <Slider />
      <HowItWorks />
      <FAQ />
    </main>
  );
};

export { HomeContainer };
