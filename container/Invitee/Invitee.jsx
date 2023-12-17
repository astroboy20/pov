import { BackIcon, EmailIcon } from "@/assets";
import { Button } from "@/components/Button";
import { CustomText } from "@/components/CustomText";
import { Input } from "@/components/Input";
import { Spinner } from "@/components/Spinner";
import React from "react";
import { useState } from "react";
import { Container, FormHeader } from "./Invitee.style";
import { useRouter } from "next/router";

const Invitee = () => {
  const router = useRouter();
  const { id: eventId } = router.query;
  const setId = typeof window !== "undefined" && localStorage.getItem("id")
  console.log(setId)
  const [data, setData] = useState({
    email: ""
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
    e.preventDefault();
    console.log(data);
  };
  return (
    <>
      <Container>
        <FormHeader>
          <span>
            {/* <BackIcon /> */}
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
