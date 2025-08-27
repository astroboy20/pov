"use client";
import React from "react";
import { AuthContainer } from "./Auth.style";
import Image from "next/image";
import { CustomText } from "@/components/CustomText";
import { Spinner } from "@/components/Spinner";
import { useRouter } from "next/navigation";
// import { useSelector, useDispatch } from "react-redux";
// import { login, reset, googleLogin } from "@/feature/slices/authSlice";
import { Logo } from "@/assets";
import { Button } from "@/components/ui/button";
const Auth = () => {
  const router = useRouter();
  // const dispatch = useDispatch();
  const handleRegisterRoute = () => {
    router.push("/register");
  };
  const handleLoginRoute = () => {
    router.push("/login");
  };

  // const handleGoogleLogin = async () => {
  //   dispatch(googleLogin());
  // };

  return (
    <>
      <main className="flex flex-col px-[5%] py-[2%] gap-[40px] mt-[3%] text-center">
        <div className="header flex flex-col text-left text-[#1D1465] text-sm gap-[10px]">
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
            className="m-auto"
          />
        </div>

        <div>
          <h1 className="text-[40px] font-bold text-[#1D1465] text-left">
            Welcome!
          </h1>{" "}
          <div className="login-with-google mt-[5%] text-center flex flex-col gap-[15px]">
            <Button
              type={"button"}
              variant={"outline"}
              // onClick={handleGoogleLogin}
            >
              <div className="button-style flex items-center gap-[5px] text-[13.3px] font-[600]">
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
            variant={"default"}
          >
            Sign Up with password
          </Button>
          <div className="mt-[10px]">
            <CustomText weight={"500"} type={"Htype"} variant={"h4"}>
              Already have an Account?{" "}
              <span
                className="text-[#1D1465] font-[600]"
                onClick={handleLoginRoute}
              >
                Sign In
              </span>
            </CustomText>
          </div>
        </div>
      </main>
    </>
  );
};

export { Auth };
