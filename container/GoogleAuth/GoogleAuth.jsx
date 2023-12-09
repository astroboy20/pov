import { PurpleSpinner } from "@/components/Spinner/Spinner";
import React, { useEffect } from "react";

const GoogleAuth = () => {
  const getTokenFromURL = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("token");
  };

  const storeTokenInLocalStorage = (token) => {
    typeof window !== "undefined" && localStorage.setItem("accessToken", token);
  };

  useEffect(() => {
    const token = getTokenFromURL();
    if (token) {
      storeTokenInLocalStorage(token);
    }
    console.log("token",token)
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <PurpleSpinner />
      </div>
    </>
  );
};

export { GoogleAuth };
