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
import { MdDelete } from "react-icons/md";

const Gallery = () => {
  const { user } = useSelector((state) => state.auth);
  const accessToken = user ? user.token : "";
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvent] = useState([]);
  const ActiveLink = ({ isActive }) => (isActive ? `${styled.active}` : "");
  const router = useRouter();
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://api-cliqpod.koyeb.app/events", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        const data = response.data.events;
        setEvent(data);
        setIsLoading(false);
      })
      .catch((error) => {
        // console.log("error:", error);
      });
  }, []);

  const deleteEvent = async (eventId) => {
    await axios.post(`https://api-cliqpod.koyeb.app/deleteEvent`, 
{
        eventId: eventId,
      },
{
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then(response=>{
      console.log("response",response)
    }).catch(error=>{
      console.log("error",error)
    })
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
        <hr className="hr" />

        <div className="body">
          <div className="body-text"> Hosting</div>
          {isLoading ? (
            <div
              style={{
                display: "flex",
                alighnItems: "center",
                justifyContent: "center",
              }}
            >
              <PurpleSpinner />
            </div>
          ) : (
            <>
              {events.map((event) => {
                return (
                  <div key={event._id}>
                    {" "}
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
                          </div>
                        </div>
                        <div className="icons">
                          <JoinIcon/>
                          <form onSubmit={deleteEvent}>
                            <input
                              type="hidden"
                              value={event._id}
                              name="event"
                            />

                            <button style={{border:"none", background:"none"}}>
                              <Delete />
                            </button>
                          </form>
                        </div>
                      </div>
                      <hr className="hr" />
                    </div>
                  </div>
                );
              })}
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
