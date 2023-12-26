// import { Invitee } from '@/container/Invitee/Invitee'
import { Invitee } from "@/container/Invitee/Invitee";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const InviteeRoute = () => {
  const router = useRouter();
  const eventId = router.query.id;
  typeof window !== "undefined" && localStorage.setItem("id", eventId);

  return (
    <div>
      <Invitee />
    </div>
  );
};

export default InviteeRoute;
