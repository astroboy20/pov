import { PurpleSpinner } from "@/components/Spinner/Spinner";
import React from "react";

const Album = ({ eventData }) => {
  return (
    <div>
      {eventData ? (
        <div>
          <h2>Event Details</h2>
          <p>message: {eventData.message}</p>
          <p>Real Time: {eventData.reaveal_photoTime}</p>
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
    </div>
  );
};

export { Album };
