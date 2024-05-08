import React, { useEffect, useState } from "react";
import { BackIcon } from "@/assets";
import useFetchItems from "@/hooks/useFetchItems";
import { useSelector } from "react-redux";
import { GalleryStyle } from "./Gallery.style";
import { CustomText } from "@/components/CustomText";
import { Hosting } from "./Pages/Hosting";
import { BlackSpinner } from "@/components/Spinner/Spinner";
import { useRouter } from "next/router";
import {toast} from "react-toastify"
import axios from "axios"

const Event = () => {
  const router  = useRouter()
  const { user } = useSelector((state) => state.auth);
  const accessToken = user ? user.token : "";
  const [events, setEvents] = useState([]);


  const { data: eventDetails, isLoading } = useFetchItems({
    url: "https://api-cliqpod.koyeb.app/events",
    token: accessToken,
  });

  useEffect(() => {
    if (eventDetails) {
      setEvents(eventDetails.events);
    }
  }, [eventDetails]);


  const handleRoute  = ()=>{
    router.push("/dashboard")
  }

  
  const deleteEvent = async (eventId) => {
    try {
      await axios.post(
        "https://api-cliqpod.koyeb.app/deleteEvent",
        { eventId },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      // Update events after deletion
      const response = await axios.get("https://api-cliqpod.koyeb.app/events", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setEvents(response.data.events);
      toast.success("Event deleted successfully!");
    } catch (error) {
      toast.error(error.message || "Error deleting event. Please try again.");
    }
  };

  return (
    <>
      <GalleryStyle>
        <div className="header">
          <span onClick={handleRoute}> 
            <BackIcon />
          </span>

          <CustomText type={"Htype"} variant={"h1"}>
            Events
          </CustomText>
          <span style={{ color: "white" }}>.</span>
        </div>
        <div className="body">
          {isLoading ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <BlackSpinner />
            </div>
          ) : (
            <>
              {events && events?.length === 0 ? (
                <div className="body">No event available</div>
              ) : (
                <Hosting deleteEvent={deleteEvent} events={events} />
              )}
            </>
          )}
        </div>
      </GalleryStyle>
    </>
  );
};

export { Event };
