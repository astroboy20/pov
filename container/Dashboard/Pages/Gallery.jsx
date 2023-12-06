import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

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
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  }, [accessToken, isLoading]);
  return (
    <div>
      heyyy
      {events.map((event) => {
        <div key={event._id}>event{event._id}</div>;
      })}
    </div>
  );
};

export { Gallery };
