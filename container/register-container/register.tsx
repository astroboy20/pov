/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState, useEffect } from "react";
import { CustomText } from "@/components/CustomText";
import { useRouter } from "next/navigation";
// import { useSelector, useDispatch } from "react-redux";
// import { register, reset } from "@/feature/slices/authSlice";
import { toast } from "react-toastify";
import { Spinner } from "@/components/Spinner";
// import { useFormik } from "formik";
import { Validate } from "@/components/validate";
import Image from "next/image";
import * as Yup from "yup";
import { BackIcon, EmailIcon, PassIcon, ProfileIcon } from "@/assets";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

const Register = () => {
  // const dispatch = useDispatch();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  // const { user, isError, isSuccess, isLoading, message } = useSelector(
  //   (state) => state.auth
  // );

  const handleRoute = () => {
    router.push("/login");
  };
  const handleAuthRoute = () => {
    router.push("/auth");
  };

  // const formik = useFormik({
  //   initialValues: {
  //     usernameusername: "",
  //     email: "",
  //     password: "",
  //     confirmpassword: "",
  //   },
  //   validationSchema: Yup.object().shape({
  //     username: Yup.string().required("Required"),
  //     email: Yup.string().email("Invalid email address").required("Required"),
  //     password: Yup.string()
  //       .required("Required")
  //       .min(8, "Must be at least 8 characters")
  //       .matches(
  //         /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+={}\[\]:;<>.,?])[A-Za-z0-9!@#$%^&*()_+={}\[\]:;<>.,?]{8,}$/,
  //         "Must contain at least one uppercase letter and one special character"
  //       ),
  //     confirmpassword: Yup.string()
  //       .oneOf([Yup.ref("password"), null], "Passwords must match")
  //       .required("Required"),
  //   }),
  //   onSubmit: async (values) => {
  //     await dispatch(register(values));
  //   },
  // });

  // useEffect(() => {
  //   if (isError) {
  //     toast.error(message);
  //   }

  //   if (isSuccess && user) {
  //     router.push("/dashboard");
  //     toast.success("Account created sucessfully");
  //   }

  //   dispatch(reset());
  // }, [user, isError, isSuccess, message, router, dispatch]);

  return (
    <>
      <main className="p-[5%]">
        <header className="flex flex-col gap-[30px] py-[30px]">
          <span onClick={handleAuthRoute}>
            <BackIcon />
          </span>

          <h1 className="text-[28px] font-[800]">Sign Up</h1>
        </header>

        <form className="flex flex-col">
          <div className="flex flex-col gap-[5px] text-[13px] my-[6%]">
            <div className="relative w-full">
              <span className="absolute left-3 top-1/2 -translate-y-1/2">
                <ProfileIcon />
              </span>

              <Input
                type="text"
                placeholder="Username"
                required
                name="username"
                className="text-[16px] text-gray-500 pl-10 rounded-[4px] border border-[#878e9c] w-full py-7" // padding so text doesn’t overlap the icon
              />
            </div>
          </div>

          <div className="flex flex-col gap-[5px] text-[13px] my-[6%]">
            <div className="relative w-full">
              <span className="absolute left-3 top-1/2 -translate-y-1/2">
                <EmailIcon />
              </span>

              <Input
                type="email"
                placeholder="Email"
                required
                name="email"
                className="text-[16px] text-gray-500 pl-10 rounded-[4px] border border-[#878e9c] w-full py-7" // padding so text doesn’t overlap the icon
              />
            </div>
          </div>

          <div className="relative my-[6%]">
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

          <div className="relative my-[6%]">
            <span className="absolute left-3 top-1/2 -translate-y-1/2">
              {" "}
              <PassIcon />
            </span>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Comfirm Password"
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
          /> */}
          {/* <Input
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
          /> */}

          {/* <Input
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
          /> */}
          {/* <Input
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
          /> */}

          <Button
            type={"submit"}
            variant={"default"}
            className="w-full flex justify-center items-center text-base font-[600] rounded-[4px] px-[24px] py-[14px] bg-[#1d1465] text-white h-[54px]"
          >
            {/* {isLoading ? <Spinner /> : "Sign Up"} */}
            Sign Up
          </Button>
          <div className="my-[5%] text-center">
            <h4 className="text-[13.3px] font-normal">
              Have an account?{" "}
              <span className="font-bold text-[#1D1465]" onClick={handleRoute}>
                Sign in
              </span>
            </h4>
          </div>
        </form>
      </main>
    </>
  );
};

export { Register };
