import { Button } from "@/components/Button";
import { CustomText } from "@/components/CustomText";
import { Input } from "@/components/Input";
import { verifyEmail } from "@/feature/slices/authSlice";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "./ForgotPass.style";

const NewPass = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleRoute = () => {
    router.push("/otp");
  };
  return (
    <>
      <Container>
        <div>
          <CustomText weight={"500"} type={"Htype"} variant={"h2"}>
            Reset Your Password
          </CustomText>

          <CustomText weight={"500"} type={"Htype"} variant={"h4"}>
            Regain Access to Your Account in Just a Few Steps
          </CustomText>
        </div>
        <div>
          <Input
            type="email"
            label="Enter New Password"
            variant="password"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
          <Input
            type="email"
            label="Confirm Password"
            variant="password"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
          <Button onClick={handleRoute} type="submit" variant="defaultButton">
            Reset Password
          </Button>
        </div>
      </Container>
    </>
  );
};

export { NewPass };
