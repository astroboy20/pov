import { useState } from "react";
import { CustomizeStyle } from "./Customize.style";
import { BlueBackIcon } from "@/assets";
import { StepOne } from "./Steps/StepOne";
import { StepTwo } from "./Steps/StepTwo";
import { StepThree } from "./Steps/StepThree";
import { StepFour } from "./Steps/StepFour";
import { useRouter } from "next/router";

const Customize = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [blankCanvas, setBlankCanvas] = useState(false);
  const [cameFromNewTemplate, setCameFromNewTemplate] = useState(false);
  const router = useRouter();

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
    window.scrollTo(0, 0);
  };

  const handlePrev = () => {
    if (cameFromNewTemplate && currentStep === 3) {
      setCurrentStep(1);
      setCameFromNewTemplate(false);
    } else if (currentStep === 4) {
      setCurrentStep(1);
    } else if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      setBlankCanvas(false);
    } else {
      router.push("/create-event");
    }
    window.scrollTo(0, 0);
  };

  return (
    <CustomizeStyle>
      <div className="header">
        <span onClick={handlePrev}>
          <BlueBackIcon />
        </span>
        <h1>Customize</h1>
        <span style={{ color: "white" }}>.</span>
      </div>
      <div className="body">
        {currentStep === 1 && (
          <StepOne
            setCurrentStep={setCurrentStep}
            handleNext={handleNext}
            setBlankCanvas={setBlankCanvas}
            setCameFromNewTemplate={setCameFromNewTemplate}
          />
        )}
        {currentStep === 2 && <StepTwo handleNext={handleNext} />}
        {currentStep === 3 && (
          <StepThree handleNext={handleNext} blankCanvas={blankCanvas} />
        )}
        {currentStep === 4 && <StepFour handleNext={handleNext} />}
      </div>
    </CustomizeStyle>
  );
};

export { Customize };
