/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect } from "react";
import { CustomText } from "@/components/CustomText";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import { useSelector, useDispatch } from "react-redux";
// import { login, reset, googleLogin } from "@/feature/slices/authSlice";
import { toast } from "react-toastify";
import { Spinner } from "@/components/Spinner";
import Link from "next/link";
// import { useFormik } from "formik";
import * as Yup from "yup";
import { BackIcon, EmailIcon, Hide, PassIcon, Show } from "@/assets";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Login = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  // const dispatch = useDispatch();
  // const { user, isLoading, isError, isSuccess, message } = useSelector(
  //   (state) => state.auth
  // );
  // const formik = useFormik({
  //   initialValues: {
  //     email: "",
  //     password: "",
  //   },
  //   validationSchema: Yup.object().shape({
  //     email: Yup.string().email("Invalid email address").required("Required"),
  //     password: Yup.string()
  //       .required("Required")
  //       .min(8, "Must be at least 8 characters")
  //       .matches(
  //         /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+={}\[\]:;<>.,?])[A-Za-z0-9!@#$%^&*()_+={}\[\]:;<>.,?]{8,}$/,
  //         "Must contain at least one uppercase letter and one special character"
  //       ),
  //   }),
  //   onSubmit: async (values) => {
  //     await dispatch(login(values));
  //   },
  // });

  // useEffect(() => {
  //   if (isError) {
  //     toast.error(message || "Email or password does not exist");
  //   }
  //   if (isSuccess && user) {
  //     router.push("/dashboard");
  //     toast.success("Login Successful");
  //   }
  //   dispatch(reset());
  // }, [router, user, isSuccess, isError, message, dispatch]);

  const handleRoute = () => {
    router.push("/register");
  };

  // const handleGoogleLogin = async () => {
  //    dispatch(googleLogin());
  // };

  return (
    <>
      <main className="p-[5%]">
        <header className="flex flex-col gap-[30px] py-[30px]">
          <span onClick={handleRoute}>
            <BackIcon />
          </span>

          <h1 className="text-[28px] font-[800]">Sign In</h1>
          {/* <CustomText weight={"500"} type={"Htype"} variant={"h1"}>
            
          </CustomText> */}
        </header>

        <form className="flex flex-col">
          <div className="flex flex-col gap-[5px] text-[13px] my-[6%]">
            <div className="relative w-full">
              <span className="absolute left-3 top-1/2 -translate-y-1/2">
                <EmailIcon />
              </span>

              <Input
                type="email"
                placeholder="Email"
                name="email"
                required
                className="text-[16px] text-gray-500 pl-10 rounded-[4px] border border-[#878e9c] w-full py-7" // padding so text doesn’t overlap the icon
              />
            </div>
          </div>

          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2">
              {" "}
              <PassIcon />
            </span>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="pl-10 pr-10 text-gray-400 py-7 rounded-[4px] border border-[#878e9c] w-full"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* <Input
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="Email"
                name="email"
                icon={}
                variant={"text"}
                required
                value={undefined}
                label={undefined}
                onChange={undefined}
                error={undefined} 
                error={
                  formik.errors?.email && formik.errors.email
                    ? `${formik.errors.email}`
                    : null
                }
              /> */}
          {/* <Input
              type="password"
              variant={"password"}
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Password"
              name="password"
              required value={undefined} label={undefined} onChange={undefined} error={undefined}  
                            error={
                formik.errors?.password && formik.errors.password
                  ? `${formik.errors.password}`
                  : null
              }
              password
            /> */}

          <div className="text-right my-[5%]">
            <Link className="text-[13.3px] font-bold" href={"/"}>
              Forgot Password?
            </Link>
          </div>

          <Button
            type={"submit"}
            variant={"default"}
            className="w-full flex justify-center items-center text-base font-[600] rounded-[4px] px-[24px] py-[14px] bg-[#1d1465] text-white h-[48px]"
          >
            {/* {isLoading ? <Spinner /> : "Login"} */} Login
          </Button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-5 text-gray-500">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <div className="mt-[5%] text-center flex flex-col gap-[15px]">
          <Button
            // onClick={handleGoogleLogin}
            type={"button"}
            variant={"outline"}
            className="w-full flex justify-center items-center text-base font-[600] rounded-[4px] px-6 py-[14px] bg-white text-[#1D1465] border border-[#1D1465] h-[48px]"
          >
            <Image src="/images/google.svg" width={25} height={25} alt={""} />{" "}
            <h4 className="text-[13.3px] font-normal"> Continue with Google</h4>
          </Button>
          <h4 className="text-[13.3px] font-normal">
            Don`t have an account?{" "}
            <span className="font-bold text-[#1D1465]" onClick={handleRoute}>
              Sign Up
            </span>
          </h4>
        </div>
      </main>
    </>
  );
};

export { Login };
