import { BottomNav } from "@/components/BottomNav";
import { CreateEvent } from "@/container/CreateEvent";
import { ProtectedRoute } from "@/container/ProtectedRoutes/ProtectedRoute";
import Head from "next/head";
import React from "react";

const createEvent = () => {
  return (
    <div className="body">
       <Head>
        <title>Create Event</title>
        <meta name="description" content="Clipod" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/cliqpod.png" />
      </Head>
      <ProtectedRoute>
        <CreateEvent />
        <BottomNav/>
      </ProtectedRoute>
    </div>
  );
};

export default createEvent;
