import { Button } from "@/components/Button";
import Image from "next/image";
import React from "react";
import { SuccessStyle } from "./Success.style";
import { useSelector } from "react-redux";
import useFetchItems from "@/hooks/useFetchItems";
import Link from "next/link";

const SuccessPage = () => {
  const eventId = typeof window !== "undefined" && localStorage.getItem("id");
  const { user } = useSelector((state) => state.auth);
  const accessToken = user ? user.token : "";
  const { data, isLoading } = useFetchItems({
    url: `https://api-cliqpod.koyeb.app/event/${eventId}`,
    token: accessToken,
  });

  console.log(data);
  return (
    <SuccessStyle>
      <h1>Thank you using cliqpod!</h1>
      <div className="image-text">
        {" "}
        <Image
          width={250}
          height={270}
          src={"/images/thankyou.png"}
          alt="thank you"
          style={{
            margin: "auto",
          }}
        />
        <p>Your cliqs are now in {data?.event?.eventName} album</p>
      </div>

      <div className="button">
        <Link href={`/album/${eventId}`}>
          <Button type={"button"} variant={"defaultButton"}>
            View Album
          </Button>
        </Link>
        <Link href={"home"}>
          <Button type={"button"} variant={"transparent"}>
            Go to home
          </Button>
        </Link>
      </div>
    </SuccessStyle>
  );
};

export default SuccessPage;
