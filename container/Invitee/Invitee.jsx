import { BackIcon, EmailIcon } from "@/assets";
import { Button } from "@/components/Button";
import { CustomText } from "@/components/CustomText";
import { Input } from "@/components/Input";
import { Spinner } from "@/components/Spinner";
import React from "react";
import { useState } from "react";
import { Container, FormHeader } from "./Invitee.style";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";

const Invitee = () => {
  const router = useRouter();
  const setId = typeof window !== "undefined" && localStorage.getItem("id");

  const [data, setData] = useState({
    email: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    if (data.email) {
      axios
        .post(`https://api-cliqpod.koyeb.app/event/${setId}`, {
          email: data.email,
        })
        .then((response) => {
          setIsLoading(false);
          toast.success(response.data.success);
          router.push("/camera");
        })
        .catch((error) => {
          setIsLoading(false);
          toast.warning(error);
        });
    }
  };

  const handleRoute = () =>{
    router.push("/gallery")
  }
  return (
    <>
      <Container>
        <FormHeader>
          <span onClick={handleRoute}>
            <BackIcon />
          </span>

          <CustomText weight={"500"} type={"Htype"} variant={"h1"}>
            Input your email
          </CustomText>
        </FormHeader>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Email"
            name="email"
            icon={<EmailIcon />}
            variant={"text"}
            required
          />

          <Button type={"submit"} variant={"defaultButton"}>
            {isLoading ? <Spinner /> : "Submit"}
          </Button>
        </form>
      </Container>
    </>
  );
};

export { Invitee };
