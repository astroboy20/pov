import React from "react";
import { AuthContainer } from "./Auth.style";
import Image from "next/image";
import { CustomText } from "@/components/CustomText";
import { Button } from "@/components/Button";
import { Spinner } from "@/components/Spinner";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { login, reset, googleLogin } from "@/feature/slices/authSlice";
import { Logo } from "@/assets";

const Auth = ({ event }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleRegisterRoute = () => {
    router.push("/invitee-register");
  };
  const handleLoginRoute = () => {
    router.push("/invitee-login");
  };

  const handleGoogleLogin = async () => {
    dispatch(googleLogin());
  };

  return (
    <>
      <AuthContainer background = {event?.event_thumbnail}>
        <div className="header">
          <div>
            Welcome to <Logo />{" "}
          </div>
          <p>Real time event photo sharing platform</p>
        </div>
        <div className="image-div">
          {" "}
          <Image
             width={356}
             height={3000}
            alt="welcome-image"
            objectFit="cover"
            className="image"
            src={event?.event_thumbnail}
          />
        </div>

        <div className="info">
          <p>To be a part of {event?.eventName} party, sign in to cliqpod</p>
        </div>
        <div className="buttons">
          {" "}
          <div className="login-with-google">
            <Button
              type={"button"}
              variant={"transparent"}
              onClick={handleGoogleLogin}
            >
              <div className="button-style">
                <Image
                  src="/images/google.svg"
                  width={25}
                  height={25}
                  alt={""}
                />{" "}
                <CustomText weight={"500"} type={"Htype"} variant={"h4"}>
                  Continue with Google
                </CustomText>
              </div>
            </Button>
          </div>
          <div className="or">or</div>
          <Button
            onClick={handleRegisterRoute}
            type={"submit"}
            variant={"defaultButton"}
          >
            Sign Up with password
          </Button>
          <div style={{ marginTop: "10px" }}>
            <CustomText weight={"500"} type={"Htype"} variant={"h4"}>
              Already have an Account?{" "}
              <span onClick={handleLoginRoute}>Sign In</span>
            </CustomText>
          </div>
        </div>
      </AuthContainer>
    </>
  );
};

export { Auth };
