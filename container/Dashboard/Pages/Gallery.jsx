import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { GalleryStyle } from "../Dashboard.style";
import { CustomText } from "@/components/CustomText";
import { EditIcon, JoinIcon } from "@/assets";
import Image from "next/image";
import { PurpleSpinner } from "@/components/Spinner/Spinner";

const Gallery = () => {
  const { user } = useSelector((state) => state.auth);
  const accessToken = user ? user.token : "";
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvent] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://api-cliqpod.koyeb.app/events", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        // console.log(response.data.events);
        const data = response.data.events;
        setEvent(data);
        console.log("events", events);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  }, []);
  return (
    <div>
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
                          <JoinIcon />
                          <EditIcon />
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
    </div>
  );
};

export { Gallery };
