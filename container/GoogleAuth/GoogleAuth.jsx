import { PurpleSpinner } from "@/components/Spinner/Spinner";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { setUser } from "@/feature/slices/authSlice"; 
import { useDispatch } from "react-redux";
const GoogleAuth = () => {
    const dispatch = useDispatch()
  const router = useRouter();
  const getTokenFromURL = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("token");
  };

  const storeTokenInLocalStorage = (token) => {
    typeof window !== "undefined" && localStorage.setItem("user", token);
  };

  useEffect(() => {
    const token = getTokenFromURL();
    if (token) {
      storeTokenInLocalStorage(token);
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
