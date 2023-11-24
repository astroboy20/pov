import { Button } from "@/components/Button";
import { CustomText } from "@/components/CustomText";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import {
  FormContainer,
  RegisterContainer,
  VerifyContainer,
} from "./Register.style";
import { useRouter } from "next/router";

export const Verify = () => {
  const { user } = useSelector((state) => state.auth);
  const verificationToken = user ? user.emailVerificationToken : "";
  const username = user ? user.username : "";
  console.log(verificationToken);
  console.log(username);
  const URL = `https://api-cliqpod.koyeb.app/auth/emailVerification/${verificationToken}`;
  const router = useRouter();
  if (!user || !user.emailVerificationToken) {
    console.log("User or verification token not available");
  }

  const handleVerify = () => {
    try {
      axios.post(URL);
      toast.success("Email registration successful!");
      router.push("/dashboard");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      <VerifyContainer>
        <CustomText weight={"500"} type={"Htype"} variant={"h2"}>
          Verify Your Email Address
        </CustomText>

        <div className="verify-text" >
          <CustomText weight={"500"} type={"Htype"} variant={"h4"}>
            Hey, {username}
          </CustomText>
          <CustomText weight={"500"} type={"Htype"} variant={"h4"}>
            Thank you for signing up for the platform
          </CustomText>
          <CustomText weight={"500"} type={"Htype"} variant={"h4"}>
            Complete the verification process to access your account by by
            clicking on the Button!
          </CustomText>
        </div>

        <Button onClick={handleVerify} type="submit" variant="defaultButton">
          Verify Email
        </Button>
      </VerifyContainer>
    </>
  );
};
