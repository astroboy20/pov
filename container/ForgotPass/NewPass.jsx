import { Button } from "@/components/Button";
import { CustomText } from "@/components/CustomText";
import { Input } from "@/components/Input";
import { newPassword, verifyEmail } from "@/feature/slices/authSlice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "./ForgotPass.style";
import {toast} from "react-toastify"

const NewPass = () => {
  const [password, setPassword] = useState({
    pass: "",
  });
  const router = useRouter();
  const dispatch = useDispatch();
  const { isError, isSuccess,isVerified,message } = useSelector((state) => state.auth);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setPassword((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(newPassword(password.pass))
  };
  useEffect(() => {
    if(isError){
      toast.error(message)
    }
    if(isVerified){
      toast.success(message)
      router.push("/login")
    }
    }, [isError, isSuccess, isVerified, router,message])
  return (
    <>
      <Container>
        <div>
          <CustomText weight={"500"} type={"Htype"} variant={"h2"}>
            Reset Your Password
          </CustomText>

          <CustomText weight={"500"} type={"Htype"} variant={"h4"}>
            Regain Access to Your Account in Just a Few Steps
          </CustomText>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              label="Enter New Password"
              variant="password"
              required
              value={password.pass}
              onChange={handleOnChange}
              name="pass"
            />
            
            <Button type="submit" variant="defaultButton">
              Reset Password
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
};

export { NewPass };
