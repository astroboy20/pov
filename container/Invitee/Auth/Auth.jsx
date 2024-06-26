import React from "react";
import { AuthContainer } from "./Auth.style";
import Image from "next/image";
import { CustomText } from "@/components/CustomText";
import { Button } from "@/components/Button";
import { Spinner } from "@/components/Spinner";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { Logo } from "@/assets";
import Link from "next/link";

const Auth = ({ event }) => {
  const router = useRouter();

  return (
    <>
      <AuthContainer background={event?.event_thumbnail}>
        <div className="header">
          <div>
            Welcome to <Logo />{" "}
          </div>
          <p>Real time event photo sharing platform</p>
        </div>
        <div className="image-div">
          {" "}
          <Image
            width={356}
            height={3000}
            alt="welcome-image"
            objectFit="cover"
            className="image"
            src={event?.event_thumbnail}
          />
        </div>

        <div className="info">
          <p>To be a part of {event?.eventName} party, sign in to cliqpod</p>
        </div>
        <div className="buttons">
          {" "}
          <div className="login-with-google">
            <Link href="/invitee-home">
              {" "}
              <Button type={"button"} variant={"defaultButton"}>
                <div className="button-style">
                  <CustomText weight={"500"} type={"Htype"} variant={"h4"}>
                    Continue
                  </CustomText>
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </AuthContainer>
    </>
  );
};

export { Auth };
