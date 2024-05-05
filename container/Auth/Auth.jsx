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
const Auth = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleRegisterRoute = () => {
    router.push("/register");
  };
  const handleLoginRoute = () => {
    router.push("/login");
  };

  const handleGoogleLogin = async () => {
    dispatch(googleLogin());
  };

  return (
    <>
      <AuthContainer>
        <div className="header">
          <Logo />

          <p>Share digital memories of your event...</p>
        </div>
        <div>
          {" "}
          <Image
            width={356}
            height={300}
            alt="welcome-image"
            src={"/images/auth.svg"}
            objectFit="contain"
            className="image"
          />
        </div>

       
        <div>
        <h1>Welcome!</h1>
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
