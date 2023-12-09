import { PurpleSpinner } from "@/components/Spinner/Spinner";
import { useRouter } from "next/router";
import React, { useEffect } from "react";


const GoogleAuth = () => {
  const router = useRouter();
  const getTokenFromURL = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("token");
  };

  const storeTokenInLocalStorage = (token) => {
    typeof window !== "undefined" && localStorage.setItem("accessToken", accessToken);
  };

  useEffect(() => {
    const accessToken = getTokenFromURL();
    if (accessToken) {
      storeTokenInLocalStorage(accessToken);
      router.push("/dashboard");
    //   dispatch(setUser({token}));
    }
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
