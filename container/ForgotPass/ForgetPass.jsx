import { Button } from "@/components/Button";
import { CustomText } from "@/components/CustomText";
import { Input } from "@/components/Input";
import { verifyEmail } from "@/feature/slices/authSlice";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const ForgotPass = () => {
  const [email, setEmail] = useState("");
  // //   const dispatch = useDispatch();

  // //   const handleForgotPassword = () => {
  // //     dispatch(verifyEmail(email));
  //   }
  return (
    <>
      <CustomText weight={"500"} type={"Htype"} variant={"h2"}>
        Reset Your Password
      </CustomText>
      <CustomText weight={"500"} type={"Htype"} variant={"h4"}>
        Regain Access to Your Account in Just a Few Steps
      </CustomText>
      <Input
        type="email"
        label="Email address"
        variant="text"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
      />
      <Button type="submit" variant="defaultButton">
        Reset Password
      </Button>
    </>
  );
};

export { ForgotPass };
