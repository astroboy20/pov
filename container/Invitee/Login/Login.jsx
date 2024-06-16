/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import {
  FormContainer,
  FormHeader,
  Linkstyle,
  LoginContainer,
} from "./Login.style";
import { CustomText } from "@/components/CustomText";
import { Button } from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import {
  login,
  reset,
  googleLogin,
  googleLogin_Invitee,
} from "@/feature/slices/authSlice";
import { toast } from "react-toastify";
import { Spinner } from "@/components/Spinner";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BackIcon, EmailIcon, Show } from "@/assets";
import { Input } from "@chakra-ui/input";
import { Box, FormControl } from "@chakra-ui/react";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
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
      router.push("/invitee-home");
      toast.success("Login Successful");
    }
    dispatch(reset());
  }, [router, user, isSuccess, isError, message, dispatch]);

  const handleClick = () => {
    setShow(!show);
  };

  const handleRoute = () => {
    router.push("/invitee-register");
  };

  const handleGoogleLogin = async () => {
    dispatch(googleLogin_Invitee());
  };

  return (
    <>
      <LoginContainer>
        <FormHeader>
          <h1>Welcome back!</h1>
          <p>Log in to cliqpod to capture your event memories!</p>
        </FormHeader>

        <FormContainer>
          <form onSubmit={formik.handleSubmit}>
            <Input
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Email"
              name="email"
              required
              borderColor={"#1D1465"}
              padding={"25px 10px"}
              borderRadius={"4px"}
              error={
                formik.errors?.email && formik.errors.email
                  ? `${formik.errors.email}`
                  : null
              }
              size={"lg"}
            />

            <FormControl>
              <Box
                display={"flex"}
                borderRadius={"4px"}
                border={"1px solid #1D1465"}
                padding={"8px"}
                alignItems={"center"}
              >
                <Input
                  type={show ? "text" : "password"}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  placeholder="Password"
                  name="password"
                  required
                  border={0}
                  p={0}
                  error={
                    formik.errors?.password && formik.errors.password
                      ? `${formik.errors.password}`
                      : null
                  }
                  password
                />
                <span onClick={handleClick}>
                  <Show />
                </span>
              </Box>
            </FormControl>
            {/* <div className="link">
              <CustomText weight={"500"} type={"Htype"} variant={"h4"}>
                <Link style={Linkstyle} href={"/"}>
                  Forgot Password?
                </Link>
              </CustomText>
            </div> */}

            <Button type={"submit"} variant={"defaultButton"}>
              {isLoading ? <Spinner /> : "Login"}
            </Button>
          </form>
        </FormContainer>

        {/* <div className="or">or</div> */}

        <div className="login-with-google">
          {/* <Button
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
          </Button> */}
          <CustomText weight={"500"} type={"Htype"} variant={"h4"}>
            Don`t have an account? <span onClick={handleRoute}>Sign Up</span>
          </CustomText>
        </div>
      </LoginContainer>
    </>
  );
};

export { Login };
