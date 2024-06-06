import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Album } from "@/container/Album";
import { ProtectedRoute } from "@/container/ProtectedRoutes/ProtectedRoute";
import useFetchItems from "@/hooks/useFetchItems";
import { EventSpinner } from "@/components/Spinner/Spinner";
import { BottomNav } from "@/components/BottomNav";

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
    <ProtectedRoute>
      <Album eventData={eventData} />
      <BottomNav />
    </ProtectedRoute>
  );
};

export default EventID;
