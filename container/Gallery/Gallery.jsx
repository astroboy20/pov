import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { FeatureStyle, GalleryStyle } from "./Gallery.style";
import { CustomText } from "@/components/CustomText";
import { JoinIcon } from "@/assets";
import Link from "next/link";
import styled from "./Gallery.module.css";
import { useRouter } from "next/router";
import { optionItems } from "./Option/data";
import Option from "./Option/Option";
import { useOptionContext } from "@/context/option-context";
import { toast } from "react-toastify";
import { Attended } from "./Pages/Attended";
import { Hosting } from "./Pages/Hosting";

const Gallery = () => {
  const { user } = useSelector((state) => state.auth);
  const accessToken = user ? user.token : "";
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvent] = useState([]);
  const { option, switchOption } = useOptionContext();
  const [attendedEvent, setAttendedEvent] = useState([]);

  const handleOption = (option) => {
    switchOption(option);
  };

  const router = useRouter();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://api-cliqpod.koyeb.app/events",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const data = response.data.events;
        setEvent(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        toast.error(error);
      }
    };

    fetchEvents();
  }, [accessToken]);

  useEffect(() => {
    const fetchAttendedEvents = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://api-cliqpod.koyeb.app/attended-events",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const data = response.data.attendedEvents;
        setAttendedEvent(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        toast.error(error);
      }
    };

    fetchAttendedEvents();
  }, [accessToken]);

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
      <GalleryStyle>
        <div className="header">
          <CustomText type={"Htype"} variant={"h1"}>
            Gallery
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
          
          {option === "Hosting" && (
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
              <Attended attendedEvent={attendedEvent} isLoading={isLoading} />
            </>
          )}
        </div>
      </GalleryStyle>
      <FeatureStyle>
        <Link
          href="/dashboard"
          className={
            router.pathname === "/dashboard"
              ? `${styled.active}`
              : `${styled.link}`
          }
        >
          Event
        </Link>
        <Link
          href="/gallery"
          className={
            router.pathname === "/gallery"
              ? `${styled.active}`
              : `${styled.link}`
          }
        >
          Gallery
        </Link>
        <Link
          href="/setting"
          className={
            router.pathname === "/setting"
              ? `${styled.active}`
              : `${styled.link}`
          }
        >
          Setting
        </Link>
      </FeatureStyle>
    </>
  );
};

export { Gallery };
