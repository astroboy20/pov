import { Button } from "@/components/Button";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "@/feature/slices/authSlice";
import { useRouter } from "next/router";

const Dashboard = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    router.push("/login");
  };
  return (
    <>
      Dashboard
      <Button onClick={handleLogout} type="submit" variant="defaultButton">
        Logout
      </Button>
    </>
  );
};

export { Dashboard };
