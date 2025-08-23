import { BottomNav } from "@/components/BottomNav";
import { EventSetup } from "@/container/EventSetup";
import { ProtectedRoute } from "@/container/ProtectedRoutes/ProtectedRoute";
import Head from "next/head";
import React from "react";

const eventsetup = () => {
  return (
    <div className="body">
       <Head>
        <title>Event Setup</title>
        <meta name="description" content="Clipod" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/cliqpod.png" />
      </Head>
      <ProtectedRoute>
        <EventSetup />
        <BottomNav />
      </ProtectedRoute>
    </div>
  );
};

export default eventsetup;
