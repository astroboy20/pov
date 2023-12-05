/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { CustomText } from "@/components/CustomText";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { RegisterContainer, FormContainer, FormHeader } from "./Register.style";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "@/feature/slices/authSlice";
import { toast } from "react-toastify";
import { Spinner } from "@/components/Spinner";
import { useFormik } from "formik";
import { Validate } from "@/components/validate";
import Image from "next/image";
import * as Yup from "yup";
import { BackIcon, EmailIcon, ProfileIcon } from "@/assets";

const Register = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  const handleRoute = () => {
    router.push("/login");
  };
  const handleAuthRoute = () => {
    router.push("/auth");
  };

  const formik = useFormik({
    initialValues: {
      usernameusername: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .required("Required")
        .min(8, "Must be at least 8 characters")
        .matches(
          /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+={}\[\]:;<>.,?])[A-Za-z0-9!@#$%^&*()_+={}\[\]:;<>.,?]{8,}$/,
          "Must contain at least one uppercase letter and one special character"
        ),
      confirmpassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      await dispatch(register(values));
    },
  });

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess && user) {
      router.push("/dashboard");
      toast.success("Account created sucessfully");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, router, dispatch]);

  return (
    <>
      <RegisterContainer>
        <FormHeader>
          <span onClick={handleAuthRoute}>
            <BackIcon />
          </span>

          <CustomText weight={"500"} type={"Htype"} variant={"h1"}>
            Sign Up
          </CustomText>
        </FormHeader>

        <FormContainer>
          <form onSubmit={formik.handleSubmit}>
            <Input
              type="text"
              placeholder="Username"
              variant="text"
              required
              icon={<ProfileIcon />}
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={
                formik.errors?.username && formik.errors.username
                  ? `${formik.errors.username}`
                  : null
              }
            />
            <Input
              type="email"
              placeholder="Email"
              variant="text"
              required
              icon={<EmailIcon />}
              value={formik.values.email}
              name="email"
              onChange={formik.handleChange}
              error={
                formik.errors?.email && formik.errors.email
                  ? `${formik.errors.email}`
                  : null
              }
            />

            <Input
              type="password"
              variant="password"
              placeholder="Password"
              id="password-input"
              required
              value={formik.values.password}
              name="password"
              onChange={formik.handleChange}
              error={
                formik.errors?.password && formik.errors.password
                  ? `${formik.errors.password}`
                  : null
              }
            />
            <Input
              type="password"
              variant="password"
              placeholder="Confirm password"
              required
              value={formik.values.confirmpassword}
              name="confirmpassword"
              onChange={formik.handleChange}
              error={
                formik.errors?.confirmpassword && formik.errors.confirmpassword
                  ? `${formik.errors.confirmpassword}`
                  : null
              }
            />

            <Button type="submit" variant="defaultButton">
              {isLoading ? <Spinner /> : "Sign Up"}
            </Button>
            <div className="sign-in">
              <CustomText weight={"500"} type={"Htype"} variant={"h4"}>
                Have an account? <span onClick={handleRoute}>Sign in</span>
              </CustomText>
            </div>
          </form>
        </FormContainer>
      </RegisterContainer>
    </>
  );
};

export { Register };
