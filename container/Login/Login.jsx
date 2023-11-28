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

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message || "Email or password does not exist");
    }
    if (isSuccess || user) {
      router.push("/dashboard");
      toast.success("Login succesful" );
    
    }
    dispatch(reset);
  }, [router, user, isSuccess, isError, message, dispatch]);

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(login(data));
  };
  const handleRoute = () => {
    router.push("/register");
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
          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              value={data.email}
              onChange={handleOnChange}
              label="Email address"
              name="email"
              variant={"text"}
              required
            />
            <Input
              type="password"
              variant={"password"}
              value={data.password}
              onChange={handleOnChange}
              label="Enter password"
              name="password"
              required
            />
            <div className="link">
              <CustomText weight={"500"} type={"Htype"} variant={"h4"}>
                <Link style={Linkstyle} href={"forgotpassword"}>
                  Forgot Password?
                </Link>
              </CustomText>
            </div>

            <Button type={"submit"} variant={"defaultButton"}>
              Login
            </Button>
          </form>
        </FormContainer>
        <div className="login-with-google">
          <Button type={"button"} variant={"transparent"}>
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
