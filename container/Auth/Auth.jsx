import React from "react";
import { AuthContainer } from "./Auth.style";
import Image from "next/image";
import { CustomText } from "@/components/CustomText";
import { Button } from "@/components/Button";
import { Spinner } from "@/components/Spinner";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { googleLogin } from "@/feature/slices/authSlice";

const Auth = () => {
  const router = useRouter();
  const dispatch = useDispatch()

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
        <div>
          {" "}
          <CustomText weight={"500"} type={"Htype"} variant={"h1"}>
            Welcome
          </CustomText>
        </div>
        <div>
          {" "}
          <Image
            width={356}
            height={300}
            alt="welcome-image"
            src={"/images/auth.svg"}
          />
        </div>
        <div>
          {" "}
          <div className="login-with-google">
            <Button type={"button"} variant={"transparent"} onClick = {handleGoogleLogin}>
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
