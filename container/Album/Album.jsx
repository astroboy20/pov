import { PurpleSpinner } from "@/components/Spinner/Spinner";
import React from "react";
import { AlbumContainer } from "./Album.style";

const Album = ({ eventData }) => {
  return (
    <>
      <AlbumContainer>
        ALBUM
        {eventData ? (
          <div>
            <h2>Event Details</h2>
            <p>
              message:{" "}
              {eventData.map((event) => {
                <div key={event.id}>{event.message[0]}</div>;
              })}
            </p>
            {/* <p>Real Time: {eventData.reaveal_photoTime}</p> */}
          </div>
        ) : (
          <div
            style={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PurpleSpinner />
          </div>
        )}
      </AlbumContainer>
    </>
  );
};

export { Album };
