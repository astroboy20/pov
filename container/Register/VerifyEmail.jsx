import { Button } from "@/components/Button";
import { CustomText } from "@/components/CustomText";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import {
  FormContainer,
  RegisterContainer,
  VerifyContainer,
} from "./Register.style";
import { useRouter } from "next/router";
import { verifyEmail } from "@/feature/slices/authSlice";
import { useParams } from "next/navigation";

export const Verify = () => {
  const { user, isError } = useSelector((state) => state.auth);
  const verificationToken = user ? user : "nothing";
  console.log(verificationToken)
  const userData =
    typeof window !== "undefined" && (localStorage.getItem("user"));
  console.log("ver", verificationToken, userData);
  const username = user ? user.username : "";
  const dispatch = useDispatch();
  
  const router = useRouter();

  const handleVerify = () => {
    dispatch(verifyEmail( userData.emailVerificationToken ));
  };

  return (
    <>
      <VerifyContainer>
        <CustomText weight={"500"} type={"Htype"} variant={"h2"}>
          Verify Your Email Address
        </CustomText>

        <div className="verify-text">
          <CustomText weight={"500"} type={"Htype"} variant={"h4"}>
            Hey, {username}
          </CustomText>
          <CustomText weight={"500"} type={"Htype"} variant={"h4"}>
            Thank you for signing up for the cliqpod
          </CustomText>
          <CustomText weight={"500"} type={"Htype"} variant={"h4"}>
            Complete the verification process to access your account by clicking
            on the Button!
          </CustomText>
        </div>

        <Button onClick={handleVerify} type="submit" variant="defaultButton">
          Verify Email
        </Button>
      </VerifyContainer>
    </>
  );
};
