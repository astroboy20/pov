import { Camera } from "@/container/Camera";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Head from "next/head";

const CameraRoute = () => {
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
    <div className="body">
       <Head>
        <title>Camera</title>
        <meta name="description" content="Clipod" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/cliqpod.png" />
      </Head>
      <Camera events={events} />
    </div>
  );
};

export default CameraRoute;
