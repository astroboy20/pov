import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { PurpleSpinner } from "@/components/Spinner/Spinner";
import { Album } from "@/container/Album";
import { ProtectedRoute } from "@/container/ProtectedRoutes/ProtectedRoute";

const EventID = () => {
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);
  const accessToken = user ? user.token : "";
  const { id: eventId } = router.query;

  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    if (eventId) {
      axios
        .get(`https://api-cliqpod.koyeb.app/gallery/${eventId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          const data = response.data;
          setEventData(data);
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
          toast.error(error);
          router.push("/gallery");
        });
    }else if (!eventId){
      toast.error("invalid ID ");
      router.push("/gallery");
    }
  }, [eventId, accessToken, router]);
  return (
    <ProtectedRoute>
      <Album eventData={eventData}/>
      
    </ProtectedRoute>
  );
};

export default EventID;
