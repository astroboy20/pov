import { useState } from "react";
import { CustomizeStyle } from "./Customize.style";
import { BlueBackIcon } from "@/assets";
import { Select } from "@chakra-ui/select";
import Image from "next/image";
import { StepOne } from "./Steps/StepOne";
import { StepTwo } from "./Steps/StepTwo";
import { StepThree } from "./Steps/StepThere";

const Customize = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };
  const handlePrev = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <CustomizeStyle>
      <div className="header">
      <span onClick={currentStep > 1 ? handlePrev : null}>
          <BlueBackIcon />
        </span>
        <h1>Gallery</h1>
        <span style={{ color: "white" }}>.</span>
      </div>
      <div className="body">
        {currentStep === 1 && <StepOne handleNext={handleNext} />}
        {currentStep === 2 && <StepTwo  handleNext={handleNext}/>}
        {currentStep === 3 && <StepThree  handleNext={handleNext}/>}
      </div>
    </CustomizeStyle>
  );
};

export { Customize };
