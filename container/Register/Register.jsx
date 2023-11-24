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

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    middlename: "",
    email: "",
    username: "",
    password: "",
  });

  const router = useRouter();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      router.push("/verify");
    }
    dispatch(reset);
  }, [router, user, isSuccess, isError, message, dispatch]);

  const handleRoute = () => {
    router.push("/login");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password < 8) {
      toast.error(
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character."
      );
    } else {
      dispatch(register(formData));
      toast.success("Registration Successful !");
    }

  };

  // if (isLoading) {
  //   return <Spinner />;
  // }
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
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              label="First name"
              variant="text"
              required
              value={formData.firstname}
              onChange={handleChange}
              name="firstname"
            />
            <Input
              type="text"
              label="Last name"
              variant="text"
              required
              value={formData.lastname}
              onChange={handleChange}
              name="lastname"
            />
            <Input
              type="text"
              label="Middle name"
              variant="text"
              required
              value={formData.middlename}
              onChange={handleChange}
              name="middlename"
            />
            <Input
              type="email"
              label="Email address"
              variant="text"
              required
              value={formData.email}
              onChange={handleChange}
              name="email"
            />
            <Input
              type="text"
              label="Username"
              variant="text"
              required
              value={formData.username}
              onChange={handleChange}
              name="username"
            />

            <Input
              type="password"
              variant="password"
              label="Create password"
              id="password-input"
              required
              value={formData.password}
              onChange={handleChange}
              name="password"
            />

            <Button type="submit" variant="defaultButton">
              {isLoading ? <Spinner /> : "Register"}
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
