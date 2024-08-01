import { Camera } from "@/container/Camera";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Head from "next/head";
import Image from "next/image";
import { BackIcon } from "@/assets";
import { CustomText } from "@/components/CustomText";
import { useRouter } from "next/router";
import useFetchItems from "@/hooks/useFetchItems";
import { EventSpinner } from "@/components/Spinner/Spinner";

const UpcomingRoute = () => {
  // const [events, setEvents] = useState([]);
  const eventId = typeof window !== "undefined" && localStorage.getItem("id");
  const { user } = useSelector((state) => state.auth);
  const accessToken = user ? user.token : "";
  const router = useRouter();

  const handleRoute = () => {
    router.push("/dashboard");
  };
  const { data: events, isLoading } = useFetchItems({
    url: `https://api-cliqpod.koyeb.app/event/${eventId}`,
    token: accessToken,
  });

  if (isLoading) return <EventSpinner />;
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
    <div className="body">
      <Head>
        <title>Upcoming event</title>
        <meta name="description" content="Clipod" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/cliqpod.png" />
      </Head>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "5%",
          overflowY: "scroll",
        }}
      >
        <div
          className="header"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <span onClick={handleRoute}>
            <BackIcon />
          </span>
          <CustomText type={"Htype"} variant={"h1"}>
          Upcoming Event
          </CustomText>
          <span style={{ color: "white" }}>.</span>
        </div>
        <Image
          src={events?.event?.event_thumbnail}
          width={500}
          height={500}
          alt="image"
        />
        <div>
          <div
            className="text"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            <p>Event Name:{events?.event?.eventName}</p>
            <p>Event Date: {formatDate(events?.event?.event_date)}</p>
            <p>Event Location: {events?.event?.location}</p>
            <p>Event Mode: {events?.event?.event_mode}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingRoute;
