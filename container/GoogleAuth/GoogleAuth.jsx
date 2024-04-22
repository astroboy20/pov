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
    if (token) {
      dispatch(setUser(token));
      setRedirecting(true);
    }
  }, [router]);

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
      toast.success("Login Successful");
    }
  }, [isSuccess, redirecting, router]);

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
