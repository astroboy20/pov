import { Button } from "@/components/Button";
import { CustomText } from "@/components/CustomText";
import { Input } from "@/components/Input";
import { resetPassword } from "@/feature/slices/authSlice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, FormHeader } from "./ForgotPass.style";
import { toast } from "react-toastify";
import { BackIcon, EmailIcon } from "@/assets";
const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const { isError, isNewpasswordSuccess, message } = useSelector(
    (state) => state.auth
  );

  const handleRoute = () => {
    router.push("/login");
  };

  const reset = async (e) => {
    e.preventDefault();
    if (email) {
      await dispatch(resetPassword({ email }));
    } else {
      toast.error("something went wrong!");
    }
  };

  useEffect(() => {
    if (isError) {
      toast.warning(message);
    }
    if (isNewpasswordSuccess) {
      toast.success(message);
      router.push("/forgotpassword/otp");
    }
  }, [isError, isNewpasswordSuccess, message, router]);
  return (
    <>
      <Container>
        <FormHeader>
          <span onClick={handleRoute}>
            <BackIcon />
          </span>

          <CustomText weight={"500"} type={"Htype"} variant={"h1"}>
            Reset Your Password
          </CustomText>
        </FormHeader>

        <form onSubmit={reset}>
          <Input
            type="email"
            placeholder="Email address"
            variant="text"
            icon={<EmailIcon />}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
          <Button type="submit" variant="defaultButton">
            Send
          </Button>
        </form>
      </Container>
    </>
  );
};

export { ForgotPass };
