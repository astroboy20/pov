import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ProtectedRoute } from "@/container/ProtectedRoutes/ProtectedRoute";
import { Album } from "@/container/Album";
import { useSelector } from "react-redux";
import axios from "axios";
import {toast} from "react-toastify"
const Id = ({ searchParams }) => {
  console.log(searchParams);
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);
  const accessToken = user ? user.token : "";
  const eventId = router.query.id;
  const query = router.query;
  console.log(query);

  const [eventData, setEventData] = useState([]);
  const setId =
    typeof window !== "undefined" && localStorage.setItem("id", eventId);
   
  useEffect(() => {
    if (!user) {
      router.push(`/invitee`);
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

export default Id;
