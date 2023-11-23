import { Button } from "@/components/Button";
import { CustomText } from "@/components/CustomText";
import { Input } from "@/components/Input";
import { verifyEmail } from "@/feature/slices/authSlice";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export const Verify = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleVerify = () => {
    dispatch(verifyEmail(email));
  };
  return (
    <>
      <CustomText weight={"500"} type={"Htype"} variant={"h2"}>
        Verify Your Email Address
      </CustomText>
      <CustomText weight={"500"} type={"Htype"} variant={"h4"}>
        Complete the Verification Process to Access Your Account
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
      <Button onClick={handleVerify} type="submit" variant="defaultButton">
        Verify Email
      </Button>
    </>
  );
};
