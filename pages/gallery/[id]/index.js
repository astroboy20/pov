import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { PurpleSpinner } from "@/components/Spinner/Spinner";
import { Album } from "@/container/Album";
import { ProtectedRoute } from "@/container/ProtectedRoutes/ProtectedRoute";

// export async function generateStaticParams() {
//   const { user } = useSelector((state) => state.auth);
//   const accessToken = user ? user.token : "";
//   const res = await fetch("https://api-cliqpod.koyeb.app/events", {
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     },
//   });
//   const data = await res.json();

//   return data.events.map((event) => {
//     ({ id: event._id });
//   });
// }

// export async function ggetProduct(id) {
//   const { user } = useSelector((state) => state.auth);
//   const accessToken = user ? user.token : "";
//   const res = await fetch(`https://api-cliqpod.koyeb.app/gallery/${eventId}`, {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     })

//     const data = await res.json()
//    return data
// }
const EventID =  ({ params }) => {
  // const event = await getProduct(params.id)
// console.log("event:", event)
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);
  const accessToken = user ? user.token : "";
  const { id: eventId } = router.query;
  const query = router.query;
  console.log(query);

  const [eventData, setEventData] = useState([]);
  const setId =
    typeof window !== "undefined" && localStorage.setItem("id", eventId);
  const token =
    typeof window !== "undefined" && localStorage.setItem("token", accessToken);
console.log(token)
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
    } else {
      router.push(`/invitee`);
    }
  }, [eventId, accessToken, router, setId]);
  return (
    <ProtectedRoute>
      <Album eventData={eventData} />
    </ProtectedRoute>
  );
};

export default EventID;
