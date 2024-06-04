import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
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
  const query = router.query;
  console.log(query);

  const [eventData, setEventData] = useState([]);
  const setId =
    typeof window !== "undefined" && localStorage.setItem("id", eventId);

 
  const { data, isLoading } = useFetchItems({
    url: `https://api-cliqpod.koyeb.app/gallery/${eventId}`,
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
    
    </ProtectedRoute>
  );
};

export default EventID;
