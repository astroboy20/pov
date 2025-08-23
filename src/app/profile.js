import { BottomNav } from "@/components/BottomNav";
import { Profile } from "@/container/Profile";
import { ProtectedRoute } from "@/container/ProtectedRoutes/ProtectedRoute";
import Head from "next/head";
import React from "react";

const profile = () => {
  return (
    <div className="body">
       <Head>
        <title>Profile</title>
        <meta name="description" content="Clipod" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/cliqpod.png" />
      </Head>
      <ProtectedRoute>
        <Profile/>
        <BottomNav />
      </ProtectedRoute>
    </div>
  );
};

export default profile;
