import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { Album } from "@/container/Album";
import { ProtectedRoute } from "@/container/ProtectedRoutes/ProtectedRoute";


const EventID =  ({ searchParams }) => {
console.log("event:", searchParams)
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);
  const accessToken = user ? user.token : "";
  const { id: eventId } = router.query;
  const query = router.query;
  console.log(query);

  const [eventData, setEventData] = useState([]);
  const setId =
    typeof window !== "undefined" && localStorage.setItem("id", eventId);
  
  useEffect(() => {
    if (!user) {
      router.push("/invitee");
      return;
    }
    if (eventId) {
      axios
        .get(`https://api-cliqpod.koyeb.app/gallery/${eventId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          const data = response.data;
          console.log(data);

          setEventData(data);
          console.log("data", eventData);
        })
        .catch((error) => {
          toast.error(error);
          router.push("/gallery");
        });
    } 
  }, [eventId, accessToken, router, setId, eventData, user]);
  return (
    <ProtectedRoute>
      <Album eventData={eventData} />
    </ProtectedRoute>
  );
};

export default EventID;
