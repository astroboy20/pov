import { useState } from "react";
import { CustomizeStyle } from "./Customize.style";
import { BlueBackIcon } from "@/assets";
import { StepOne } from "./Steps/StepOne";
import { StepTwo } from "./Steps/StepTwo";
import { StepThree } from "./Steps/StepThere";
import { StepFour } from "./Steps/StepFour";
import { useRouter } from "next/router";

const Customize = () => {
  const [currentStep, setCurrentStep] = useState(1);
 const router =  useRouter()

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
    window.scrollTo(0,0)
  };
  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    } else {
      router.push("/create-event");
    }
    window.scrollTo(0,0)
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
        {currentStep === 1 && <StepOne setCurrentStep={setCurrentStep} handleNext={handleNext} />}
        {currentStep === 2 && <StepTwo  handleNext={handleNext}/>}
        {currentStep === 3 && <StepThree  handleNext={handleNext}/>}
        {currentStep === 4 && <StepFour  handleNext={handleNext}/>}
      </div>
    </CustomizeStyle>
  );
};

export { Customize };
