import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Delete, FeatureStyle, GalleryStyle } from "../Dashboard.style";
import { CustomText } from "@/components/CustomText";
import { EditIcon, JoinIcon } from "@/assets";
import Image from "next/image";
import { PurpleSpinner } from "@/components/Spinner/Spinner";
import Link from "next/link";
import styled from "../Dashboard.module.css";
import { useRouter } from "next/router";
import { toast } from "react-toastify";


const Gallery = () => {
  const { user } = useSelector((state) => state.auth);
  const accessToken = user ? user.token : "";
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvent] = useState([]);
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
        toast.error( error);
      }
    };

    fetchEvents(); 
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


      const response = await axios.get(
        "https://api-cliqpod.koyeb.app/events",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

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
          <div className="body-text"> Hosting</div>
          {isLoading ? (
            <div
              className="centered-style"
            >
              <PurpleSpinner />
            </div>
          ) : events && events.length === 0 ? (
            <div className="centered-style">
              <CustomText weight={"500"} type={"Htype"} variant={"p"}>
                No events available.
              </CustomText>
            </div>
          ) : (
            <>
              {events.map((event) => (
                <div key={event._id}>
                  <div>
                    <div className="info">
                      <div className="sub-info">
                        <Image
                          width={80}
                          height={80}
                          src={event.event_image}
                          alt="event_banner"
                        />
                        <div className="text">
                          <div className="a">{event.eventName}</div>
                          <div className="b"> Ending {event.end_date}</div>
                          <Link href={`/gallery/${event._id}`}>link</Link>
                        </div>
                      </div>
                      <div className="icons">
                        <JoinIcon />
                        <form onSubmit={deleteEvent}>
                          <input
                            type="hidden"
                            value={event._id}
                            name="eventId"
                          />
                          <button
                            type="submit"
                            style={{ border: "none", background: "none" }}
                          >
                            <Delete />
                          </button>
                        </form>
                      </div>
                    </div>
                   
                  </div>
                </div>
              ))}
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
