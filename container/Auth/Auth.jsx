import React from "react";
import { AuthContainer } from "./Auth.style";
import Image from "next/image";
import { CustomText } from "@/components/CustomText";
import { Button } from "@/components/Button";
import { Spinner } from "@/components/Spinner";
import { useRouter } from "next/router";
const Auth = () => {
  const router = useRouter();
  const handleRegisterRoute = () => {
    router.push("/register");
  };
  const handleLoginRoute = () => {
    router.push("/login");
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
            width={218.367}
            height={211.768}
            alt="welcome-image"
            src={"/images/login-amico.svg"}
          />
        </div>
        <div>
          {" "}
          <div className="login-with-google">
            <Button type={"button"} variant={"transparent"}>
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
