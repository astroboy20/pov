import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
import { Invitee } from "@/container/Invitee/Invitee";
import { Auth } from "@/container/Invitee/Auth";
import { useSelector } from "react-redux";
import useFetchItems from "@/hooks/useFetchItems";
import { EventSpinner } from "@/components/Spinner/Spinner";

const EventID = () => {
  const { user } = useSelector((state) => state.auth);
  const [event, setEvent] = useState([]);
  const accessToken = user ? user.token : "";
  const router = useRouter();
  const { id: eventId } = router.query;

  const setId =
    typeof window !== "undefined" && localStorage.setItem("id", eventId);

  const { data, isLoading } = useFetchItems({
    url: `https://api-cliqpod.koyeb.app/event/${eventId}`,
   
  });
  console.log(data);
  useEffect(() => {
    if (data) {
      setEvent(data.event);
    }
  }, [data]);

  return (
    <>
      {isLoading ? (
        <EventSpinner />
      ) : (
        <div className="body">
          {" "}
          <Auth event={event} />
        </div>
      )}
    </>
  );
};

export default EventID;
