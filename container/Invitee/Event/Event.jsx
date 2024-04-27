import { useEffect, useState } from "react";
import Image from "next/image";
import { BlueBackIcon } from "@/assets";
import { EventStyle } from "./Event.style";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "@chakra-ui/react";
import axios from "axios";

const Event = () => {
  const router = useRouter();
  const handleRoute = () => {
    return router.push("/camera");
  };

  const [events, setEvents] = useState([]); // Initialize as an array
  const eventId = typeof window !== "undefined" && localStorage.getItem("id");
  const { user } = useSelector((state) => state.auth);
  const accessToken = user ? user.token : "";

  useEffect(() => {
    axios
      .get(`https://api-cliqpod.koyeb.app/event/${eventId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        const data = response.data.event;
        console.log(data);
        setEvents(data);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, [eventId, accessToken]);

  return (
    <EventStyle>
      <div className="header">
        <h1>Welcome to Adedamola @ 18 birthday party.</h1>
      </div>

      <div className="body">
        <p>Adedamola@18 birthday party</p>
        <p>#Adedamola@18</p>
      </div>

      <Button
        background={"#1D1465"}
        padding={"20px"}
        borderRadius={"4px"}
        color={"#fff"}
        width={"90%"}
        margin={"auto 5%"}
        position={"absolute"}
        left={"0"}
        bottom={"0"}
        onClick={handleRoute}
      >
        Start cliqing
      </Button>
    </EventStyle>
  );
};

export { Event };
