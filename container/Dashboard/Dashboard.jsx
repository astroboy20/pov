import { Button } from "@/components/Button";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "@/feature/slices/authSlice";
import { useRouter } from "next/router";
import Link from "next/link"

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
      <Link target="_blank" href={"/verify"}>
        Verify Email
      </Link>
    </>
  );
};

export { Dashboard };
