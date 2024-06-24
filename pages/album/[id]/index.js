import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Album } from "@/container/Album";
import { ProtectedRoute } from "@/container/ProtectedRoutes/ProtectedRoute";
import useFetchItems from "@/hooks/useFetchItems";
import { EventSpinner } from "@/components/Spinner/Spinner";
import Head from "next/head";

const EventID = () => {
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);
  const accessToken = user ? user.token : "";
  const { id: eventId } = router.query;

  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    if (eventId) {
      localStorage.setItem("event-id", eventId);
    }
  }, [eventId]);

  const { data, isLoading } = useFetchItems({
    url: eventId ? `https://api-cliqpod.koyeb.app/gallery/${eventId}` : null,
    token: accessToken,
  });

  useEffect(() => {
    if (data) {
      setEventData(data);
    }
  }, [data]);

  if (isLoading) return <EventSpinner />;

  return (
    <div className="body">
      <Head>
        <title>Album</title>
        <meta name="description" content="Clipod" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/cliqpod.png" />
      </Head>
      <ProtectedRoute>
        <Album eventData={eventData} />
      </ProtectedRoute>
    </div>
  );
};

export default EventID;
