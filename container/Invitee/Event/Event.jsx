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

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();

    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");

    const formattedDate = `${month} ${day}th by ${hours}:${minutes} GMT`;

    return formattedDate;
  };

  return (
    <EventStyle background={events?.event_thumbnail}>
      <div className="blur"></div>

      <Box className="body">
        <div className="text">
          <p>{events?.eventName} party</p>
          <p>{formatDate(events?.event_date)}</p>
        </div>
        <hr className="hr" />
        <div>
          <Button
            background={"#fff"}
            color={"#1D1465"}
            padding={"25px 10px"}
            borderRadius={"4px"}
            width={"90%"}
            margin={"auto 5%"}
            onClick={handleRoute}
          >
            Start cliqing
          </Button>
          <span>You have cliqs for this event</span>
        </div>
      </Box>
    </EventStyle>
  );
};

export { Event };
