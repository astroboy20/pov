import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
import { Invitee } from "@/container/Invitee/Invitee";

const EventID = ({ searchParams }) => {
  console.log("event:", searchParams);
  const router = useRouter();
  const { id: eventId } = router.query;
  const query = router.query;
  console.log(query);


    const setId = typeof window !== "undefined" && localStorage.setItem("id", eventId);

  // useEffect(() => {
  //   if (!setId) {
  //     router.push("/login");
  //     return;
  //   }
   
  // }, [setId,router]);
  return (
    <>
      <Invitee />
    </>
  );
};

export default EventID;
