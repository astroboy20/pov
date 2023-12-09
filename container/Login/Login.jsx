/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import {
  FormContainer,
  FormHeader,
  Linkstyle,
  LoginContainer,
} from "./Login.style";
import { CustomText } from "@/components/CustomText";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { login, reset, googleLogin } from "@/feature/slices/authSlice";
import { toast } from "react-toastify";
import { Spinner } from "@/components/Spinner";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BackIcon, EmailIcon } from "@/assets";
// import { googleUserLogin } from "@/feature/slices/authSlice";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .required("Required")
        .min(8, "Must be at least 8 characters")
        .matches(
          /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+={}\[\]:;<>.,?])[A-Za-z0-9!@#$%^&*()_+={}\[\]:;<>.,?]{8,}$/,
          "Must contain at least one uppercase letter and one special character"
        ),
    }),
    onSubmit: async (values) => {
      await dispatch(login(values));
    },
  });

  useEffect(() => {
    if (isError) {
      toast.error(message || "Email or password does not exist");
    }
    if (isSuccess && user) {
      router.push("/dashboard");
      toast.success("Login Successful");
    }
    dispatch(reset());
  }, [router, user, isSuccess, isError, message, dispatch]);

  const handleRoute = () => {
    router.push("/register");
  };



  const handleGoogleLogin = async () => {
    try {
      await dispatch(googleLogin());
      dispatch(reset());
    } catch (error) {
      
    }
  };



  return (
    <>
      <LoginContainer>
        <FormHeader>
          <span onClick={handleRoute}>
            <BackIcon />
          </span>

          <CustomText weight={"500"} type={"Htype"} variant={"h1"}>
            Sign In
          </CustomText>
        </FormHeader>

        <FormContainer>
          <form onSubmit={formik.handleSubmit}>
            <Input
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Email"
              name="email"
              icon={<EmailIcon />}
              variant={"text"}
              required
              error={
                formik.errors?.email && formik.errors.email
                  ? `${formik.errors.email}`
                  : null
              }
            />
            <Input
              type="password"
              variant={"password"}
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Password"
              name="password"
              required
              error={
                formik.errors?.password && formik.errors.password
                  ? `${formik.errors.password}`
                  : null
              }
              password
            />
            <div className="link">
              <CustomText weight={"500"} type={"Htype"} variant={"h4"}>
                <Link style={Linkstyle} href={"forgotpassword"}>
                  Forgot Password?
                </Link>
              </CustomText>
            </div>

            <Button type={"submit"} variant={"defaultButton"}>
              {isLoading ? <Spinner /> : "Login"}
            </Button>
          </form>
        </FormContainer>

        <div className="or">or</div>

        <div className="login-with-google">
          <Button
            onClick={handleGoogleLogin}
            type={"button"}
            variant={"transparent"}
          >
            <div className="button-style">
              <Image src="/images/google.svg" width={25} height={25} alt={""} />{" "}
              <CustomText weight={"500"} type={"Htype"} variant={"h4"}>
                Continue with Google
              </CustomText>
            </div>
          </Button>
          <CustomText weight={"500"} type={"Htype"} variant={"h4"}>
            Don`t have an account? <span onClick={handleRoute}>Sign Up</span>
          </CustomText>
        </div>
      </LoginContainer>
    </>
  );
};

export { Login };
