import React, { useEffect, useState } from "react";
import { BackIcon, JoinIcon } from "@/assets";
import { EventStyle } from "./Event.style";
import useFetchItems from "@/hooks/useFetchItems";
import { useSelector } from "react-redux";
import { useOptionContext } from "@/context/option-context";
import { GalleryStyle } from "./Gallery.style";
import { CustomText } from "@/components/CustomText";
import Option from "./Option/Option";
import { Hosting } from "./Pages/Hosting";
import { BlackSpinner, PurpleSpinner } from "@/components/Spinner/Spinner";

const Event = () => {
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

  // if (isLoading) return console.log("is pendoing")

  // Uncomment and implement deleteEvent function if needed
  // const deleteEvent = async (eventId) => {
  //   try {
  //     await axios.post(
  //       "https://api-cliqpod.koyeb.app/deleteEvent",
  //       { eventId },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       }
  //     );
  //     // Update events after deletion
  //     const response = await axios.get("https://api-cliqpod.koyeb.app/events", {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     });
  //     setEvents(response.data.events);
  //     toast.success("Event deleted successfully!");
  //   } catch (error) {
  //     toast.error(error.message || "Error deleting event. Please try again.");
  //   }
  // };

  return (
    <>
      <GalleryStyle>
        <div className="header">
          <span>
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
                <div className="body">{events.message}</div>
              ) : (
                <Hosting events={events} />
              )}
            </>
          )}
        </div>
      </GalleryStyle>
    </>
  );
};

export { Event };
