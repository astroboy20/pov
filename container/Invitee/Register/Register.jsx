/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { CustomText } from "@/components/CustomText";
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
import { Input } from "@chakra-ui/input";

const Register = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  const handleRoute = () => {
    router.push("/invitee-login");
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
      router.push("/invitee-home");
      toast.success("Account created sucessfully");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, router, dispatch]);

  return (
    <>
      <RegisterContainer>
        <FormHeader>
         
         <h1>Sign Up
</h1>
<p>Get started with cliqpod</p>
        </FormHeader>

        <FormContainer>
          <form onSubmit={formik.handleSubmit}>
            <Input
              type="text"
              placeholder="Username"
              required
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              size={"lg"}
              borderRadius={"4px"}
              padding={"25px 10px"}
              borderColor={"#1D1465"}
              error={
                formik.errors?.username && formik.errors.username
                  ? `${formik.errors.username}`
                  : null
              }
            />
            <Input
              type="email"
              placeholder="Email"
              required
              value={formik.values.email}
              name="email"
              onChange={formik.handleChange}
              size={"lg"}
              borderRadius={"4px"}
              padding={"25px 10px"}
              borderColor={"#1D1465"}
              error={
                formik.errors?.email && formik.errors.email
                  ? `${formik.errors.email}`
                  : null
              }
            />

            <Input
              type="password"
              placeholder="Password"
              id="password-input"
              required
              size={"lg"}
              borderRadius={"4px"}
              padding={"25px 10px"}
              borderColor={"#1D1465"}
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
              placeholder="Confirm password"
              required
              size={"lg"}
              borderRadius={"4px"}
              padding={"25px 10px"}
              borderColor={"#1D1465"}
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
              <CustomText weight={"700"} type={"Htype"} variant={"h4"}>
              Already have an account? <span onClick={handleRoute}>Sign in</span>
              </CustomText>
            </div>
          </form>
        </FormContainer>
      </RegisterContainer>
    </>
  );
};

export { Register };
