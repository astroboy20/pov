/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import { FormContainer, Linkstyle, LoginContainer } from "./Login.style";
import { CustomText } from "@/components/CustomText";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "@/feature/slices/authSlice";
import { toast } from "react-toastify";
import { Spinner } from "@/components/Spinner";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup"
import axios from "axios"

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
    if (isSuccess || user) {
      router.push("/dashboard");
      toast.success("Login succesful");
    }
    dispatch(reset());
  }, [router, user, isSuccess, isError, message, dispatch]);

  const handleRoute = () => {
    router.push("/register");
  };
  const handlLoginwithgoogle = async() => {
   
    
      try {
  
        // Send the ID token to your backend for verification
        const response = await axios.get('https://api-cliqpod.koyeb.app/auth/google');
        
        // Handle response from the server after successful login
        console.log(response.data);
      } catch (error) {
        // Handle error
        console.error('Error during login:', error);
      }
  };
  return (
    <>
      <LoginContainer>
        <CustomText weight={"500"} type={"Htype"} variant={"h2"}>
          Welcome!
        </CustomText>
        <CustomText weight={"500"} type={"Htype"} variant={"h4"}>
          Please do well to login
        </CustomText>
        <FormContainer>
          <form onSubmit={formik.handleSubmit}>
            <Input
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              label="Email address"
              name="email"
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
              label="Enter password"
              name="password"
              required
              error={
                formik.errors?.password && formik.errors.password
                  ? `${formik.errors.password}`
                  : null
              }password
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
        <div className="login-with-google">
          <Button onClick={handlLoginwithgoogle} type={"button"} variant={"transparent"}>
            <div className="button-style">
              <Image src="/images/google.svg" width={25} height={25} alt={""} />{" "}
              <CustomText weight={"500"} type={"Htype"} variant={"h4"}>
                Continue with Google
              </CustomText>
            </div>
          </Button>
          <CustomText weight={"500"} type={"Htype"} variant={"h4"}>
            Don`t have an account?{" "}
            <span onClick={handleRoute}>Create account</span>
          </CustomText>
        </div>
      </LoginContainer>
    </>
  );
};

export { Login };
