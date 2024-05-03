import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BlueBackIcon, JoinIcon } from "@/assets";
import { EventStyle } from "./Event.style";
import Link from "next/link";
import useFetchItems from "@/hooks/useFetchItems";
import { useSelector } from "react-redux";
import { useOptionContext } from "@/context/option-context";
import { GalleryStyle } from "./Gallery.style";
import { CustomText } from "@/components/CustomText";
import { optionItems } from "./Option/data";
import Option from "./Option/Option";
import { Hosting } from "./Pages/Hosting";
import { Attended } from "./Pages/Attended";
import axios from "axios";
import { toast } from "react-toastify";

const Event = () => {
  const { user } = useSelector((state) => state.auth);
  const accessToken = user ? user.token : "";
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvent] = useState([]);
  const { option, switchOption } = useOptionContext();
  const [attendedEvent, setAttendedEvent] = useState([]);
  const handleOption = (option) => {
    switchOption(option);
  };

  const { data: eventDetails } = useFetchItems({
    url: "https://api-cliqpod.koyeb.app/events",
    token: accessToken,
  });

  const { data: attendedEventDetails } = useFetchItems({
    url: "https://api-cliqpod.koyeb.app/attended-events",
    token: accessToken,
  });

  useEffect(() => {
    if (eventDetails && attendedEventDetails) {
      setEvent(eventDetails?.events);
      setAttendedEvent(attendedEventDetails?.events);
    }
  }, [eventDetails, attendedEventDetails]);
  const deleteEvent = async (event) => {
    event.preventDefault();
    const eventId = event.target.elements.eventId.value;

    try {
      setIsLoading(true);

      await axios.post(
        "https://api-cliqpod.koyeb.app/deleteEvent",
        {
          eventId: eventId,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const response = await axios.get("https://api-cliqpod.koyeb.app/events", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const data = response.data.events;
      setIsLoading(false);
      toast.success("Event deleted successfully!");
      setEvent(data);
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message || "Error deleting event. Please try again.");
    }
  };
  return (
    <>
      {events && events?.length === 0 ? (
        <EventStyle>
          <div className="header">
            <span>
              <BlueBackIcon />
            </span>

            <h1>Events</h1>

            <span style={{ color: "white" }}>.</span>
          </div>

          <div className="body">
            <Image
              src={"/images/oops.svg"}
              height={280}
              width={380}
              objectFit="contain"
              className="image"
            />
            <p>
              Oopss, you haven’t set any event up yet!!! <br />{" "}
              <Link href={"/event-setup"}>Click Here</Link> to set up an event.
            </p>
          </div>
        </EventStyle>
      ) : (
        <>
          <GalleryStyle>
            <div className="header">
              <CustomText type={"Htype"} variant={"h1"}>
                Events
              </CustomText>
              <div className="join">
                <JoinIcon />
                <CustomText type={"Htype"} variant={"h4"}>
                  Join
                </CustomText>
              </div>
            </div>

            <div className="body">
              <div className="body-text">
                {optionItems.map((OptionItem) => {
                  return (
                    <Option
                      key={OptionItem.value}
                      value={OptionItem.value}
                      label={OptionItem.label}
                      setValue={handleOption}
                      selected={option === OptionItem.value}
                    />
                  );
                })}
              </div>

              {option === "Hosted" && (
                <>
                  <Hosting
                    events={events}
                    isLoading={isLoading}
                    deleteEvent={deleteEvent}
                  />
                </>
              )}

              {option === "Attended" && (
                <>
                  <Attended
                    attendedEvent={attendedEvent}
                    isLoading={isLoading}
                  />
                </>
              )}
            </div>
          </GalleryStyle>
        </>
      )}
    </>
  );
};

export { Event };
