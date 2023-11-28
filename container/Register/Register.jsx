/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { CustomText } from "@/components/CustomText";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { RegisterContainer, FormContainer } from "./Register.style";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "@/feature/slices/authSlice";
import { toast } from "react-toastify";
import { Spinner } from "@/components/Spinner";
import { useFormik } from "formik";
import { Validate } from "@/components/validate";
import * as Yup from "yup";

const Register = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  const handleRoute = () => {
    router.push("/login");
  };
  
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      middlename: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      firstname: Yup.string().required("Required"),
      lastname: Yup.string().required("Required"),
      middlename: Yup.string().required("Required"),
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
      await dispatch(register(values));
    },
  });

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      router.push('/dashboard');
      toast.success("Account created sucessfully");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, router, dispatch]);

  return (
    <>
      <RegisterContainer>
        <CustomText weight={"500"} type={"Htype"} variant={"h2"}>
          Register
        </CustomText>
        <CustomText weight={"500"} type={"Htype"} variant={"h4"}>
          Create a new account
        </CustomText>
        <FormContainer>
          <form onSubmit={formik.handleSubmit}>
            <Input
              type="text"
              label="First name"
              variant="text"
              name="firstname"
              value={formik.values.firstname}
              onChange={formik.handleChange}
              error={
                formik.errors?.firstname && formik.errors.firstname
                  ? `${formik.errors.firstname}`
                  : null
              }
            />
            <Input
              type="text"
              label="Last name"
              variant="text"
              required
              name="lastname"
              value={formik.values.lastname}
              onChange={formik.handleChange}
              error={
                formik.errors?.lastname && formik.errors.lastname
                  ? `${formik.errors.lastname}`
                  : null
              }
            />
            <Input
              type="text"
              label="Middle name"
              variant="text"
              required
              name="middlename"
              value={formik.values.middlename}
              onChange={formik.handleChange}
              error={
                formik.errors?.middlename && formik.errors.middlename
                  ? `${formik.errors.middlename}`
                  : null
              }
            />
            <Input
              type="email"
              label="Email address"
              variant="text"
              required
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
              label="Create password"
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

            <Button type="submit" variant="defaultButton">
              {"Register"}
            </Button>
            <div className="sign-in">
              <CustomText weight={"500"} type={"Htype"} variant={"h4"}>
                Have an account? <span  onClick={handleRoute}>Sign in</span>
              </CustomText>
            </div>
          </form>
        </FormContainer>
      </RegisterContainer>
    </>
  );
};

export { Register };
