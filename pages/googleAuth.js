import { PurpleSpinner } from "@/components/Spinner/Spinner";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/feature/slices/authSlice";
import { toast } from "react-toastify";

const GoogleAuth = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const [redirecting, setRedirecting] = useState(false);
  const { isSuccess, user } = useSelector((state) => state.auth);

  useEffect(() => {
    const token = searchParams.get("token");
    const invitee = searchParams.get("invitee");

    console.log("Token:", token);
    console.log("Invitee:", invitee);

    if (token) {
      dispatch(setUser(token));
      setRedirecting(true);
    }
  }, [searchParams, dispatch]);

  useEffect(() => {
    if (isSuccess && redirecting) {
      const invitee = searchParams.get("invitee");

      if (invitee === true) {
        router.push("/invitee-home");
      } else {
        router.push("/dashboard");
      }

      toast.success("Login Successful");
    }
  }, [isSuccess, redirecting, isAuthenticated, user, router, searchParams]);

  return (
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
  );
};

export default GoogleAuth;
