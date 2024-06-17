import { BottomNav } from "@/components/BottomNav";
import { Dashboard } from "@/container/Dashboard";
import { ProtectedRoute } from "@/container/ProtectedRoutes/ProtectedRoute";
import Head from "next/head";
import React from "react";

const dashboard = () => {
  return (
    <div className="body">
       <Head>
        <title>Dashboard</title>
        <meta name="description" content="Clipod" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/cliqpod.png" />
      </Head>
      <ProtectedRoute>
        <Dashboard />
        <BottomNav/>

      </ProtectedRoute>
    </div>
  );
};

export default dashboard;
