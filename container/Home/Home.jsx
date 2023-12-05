import { useState } from "react";
import { Container, StepOnestyle } from "./Home.style";
import { Button } from "@/components/Button";
import { useRouter } from "next/router";
import Image from "next/image";
import { CustomText } from "@/components/CustomText";
import MultiStep from "react-multistep";

const HomePage = () => {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const handleRoute = () => {
    router.push("/auth");
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <>
      <>
        {step === 1 && (
          <>
            <Container>
              <StepOnestyle>
                <Image
                  src={"/images/capture.png"}
                  width={300}
                  height={500}
                  alt="."
                />
              </StepOnestyle>
              <div className="text">
                <CustomText weight={"500"} type={"Htype"} variant={"h2"}>
                  Capture moments and memories on your big day
                </CustomText>
                <div
                  style={{
                    marginTop: "20px",
                    fontSize: "16px",
                    fontWeight: "800",
                  }}
                >
                  <Button
                    type="submit"
                    variant="defaultButton"
                    onClick={handleNext}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </Container>
          </>
        )}
        {step === 2 && (
          <>
            <Container>
              <StepOnestyle>
                <Image
                  src={"/images/several.svg"}
                  width={300}
                  height={500}
                  alt="."
                />
              </StepOnestyle>
              <div className="text">
                <CustomText weight={"500"} type={"Htype"} variant={"h2"}>
                  Take several cliqs with your created digital backdrops
                </CustomText>
                <div
                  style={{
                    marginTop: "20px",
                    fontSize: "16px",
                    fontWeight: "800",
                  }}
                >
                  <Button
                    type="submit"
                    variant="defaultButton"
                    onClick={handleNext}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </Container>
          </>
        )}
        {step === 3 && (
          <>
            <Container>
              <StepOnestyle>
                <Image
                  src={"/images/qr.svg"}
                  width={300}
                  height={500}
                  alt="."
                />
              </StepOnestyle>
              <div className="text">
                <CustomText weight={"500"} type={"Htype"} variant={"h2"}>
                  Guest scan barcode to access your digital backdrop
                </CustomText>
                <div
                  style={{
                    marginTop: "20px",
                    fontSize: "16px",
                    fontWeight: "800",
                  }}
                >
                  <Button
                    type="submit"
                    variant="defaultButton"
                    onClick={handleNext}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </Container>
          </>
        )}
        {step === 4 && (
          <>
            <Container>
              <StepOnestyle>
                <Image
                  src={"/images/album.svg"}
                  width={300}
                  height={500}
                  alt="."
                />
              </StepOnestyle>
              <div className="text">
                <CustomText weight={"500"} type={"Htype"} variant={"h2"}>
                  A digital album from cliqs taken at your event
                </CustomText>
                <div
                  style={{
                    marginTop: "20px",
                    fontSize: "16px",
                    fontWeight: "800",
                  }}
                >
                  <Button
                    type="submit"
                    variant="defaultButton"
                    onClick={handleRoute}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </Container>
          </>
        )}
      </>
    </>
  );
};

export { HomePage };
