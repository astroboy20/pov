import { useEffect, useState } from "react";
import Image from "next/image";
import { BlueBackIcon } from "@/assets";
import { EventStyle } from "./Event.style";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Button } from "@chakra-ui/react";
import axios from "axios";
import { useSelector } from "react-redux";
import useFetchItems from "@/hooks/useFetchItems";

const Event = () => {
  const router = useRouter();
  const handleRoute = () => {
    return router.push("/camera");
  };

  const [events, setEvents] = useState([]); // Initialize as an array
  const eventId = typeof window !== "undefined" && localStorage.getItem("id");
  const { user } = useSelector((state) => state.auth);
  const accessToken = user ? user.token : "";
  const { data } = useFetchItems({
    url: `https://api-cliqpod.koyeb.app/event/${eventId}`,
    token: accessToken,
  });
  useEffect(() => {
    if (data) {
      setEvents(data.event);
    }
  }, [eventId, accessToken]);

  return (
    <EventStyle style={{ backgroundImage: `url(/images/event-bg.svg)` }}>
      <div className="header">
        <h1>Welcome to {events?.eventName}.</h1>
      </div>

      <Box className="body">
        <p>Adedamola@18 birthday party</p>
        <p>{events?.eventName}</p>
        <Button
          background={"#1D1465"}
          padding={"25px 10px"}
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
      </Box>
    </EventStyle>
  );
};

export { Event };
