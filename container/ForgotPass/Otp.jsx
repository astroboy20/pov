import { Button } from "@/components/Button";
import { CustomText } from "@/components/CustomText";
import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Container } from "./ForgotPass.style";
import axios from "axios";
import {toast} from "react-toastify"
import { useRouter } from "next/navigation";

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputBox = styled.input`
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: 20px;
  margin: 0 5px;
  border-radius: 50%;
  color: white;
  border: 1px solid white;
  background-color: transparent;
`;

const OTPInput = () => {
  const numInputs = 5; // Number of OTP input fields
  const [otpValues, setOtpValues] = useState(Array(numInputs).fill(""));
  const inputRefs = useRef([]);
  const router = useRouter()

  const handleInputChange = (index, event) => {
    const { value } = event.target;
    const newValues = [...otpValues];
    newValues[index] = value;

    setOtpValues(newValues);

    // Move focus to the next input field
    if (value !== "" && index < numInputs - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handlePaste = (event) => {
    event.preventDefault();
    const pastedData = event.clipboardData.getData("text/plain").trim();

    const newValues = Array(numInputs).fill("");
    for (let i = 0; i < numInputs && i < pastedData.length; i++) {
      newValues[i] = pastedData[i];
    }

    setOtpValues(newValues);
  };

  const handleOPT = async () => {
    try {
      const otp = otpValues.join('');
        
      const response = await axios.post("", { otp });
  
      if (response.status === 200) {
        const data = response.data;
        toast.success("Valid OTP, proceed to change your password")
        router.push("/forgotpassword/savepassword")
      } else {
        toast.error("OTP verification failed");
      }
    } catch (error) {
      toast.error("Error verifying OTP:", error);
    }
  };
  

  return (
    <>
      <div></div>
      <Container>
        <div>
          <CustomText weight={"500"} type={"Htype"} variant={"h2"}>
            Reset Your Password
          </CustomText>
          <CustomText weight={"500"} type={"Htype"} variant={"h4"}>
            Regain Access to Your Account in Just a Few Steps
          </CustomText>
        </div>
        <InputContainer>
          {otpValues.map((value, index) => (
            <InputBox
              key={index}
              type="text"
              maxLength={1}
              value={value}
              onChange={(e) => handleInputChange(index, e)}
              onPaste={handlePaste}
              ref={(input) => (inputRefs.current[index] = input)}
            />
          ))}
        </InputContainer>
        <Button type="button" variant="defaultButton" onClick={handleOPT}>
          Send
        </Button>
      </Container>
    </>
  );
};

export default OTPInput;
