import { BottomNav } from "@/components/BottomNav";
import { Customize } from "@/container/Customize";
import { ProtectedRoute } from "@/container/ProtectedRoutes/ProtectedRoute";
import Head from "next/head";
import React from "react";

const customize = () => {
  return (
    <div className="body">
       <Head>
        <title>Customize</title>
        <meta name="description" content="Clipod" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/cliqpod.png" />
      </Head>
      <ProtectedRoute>
        <Customize />
        <BottomNav />{" "}
      </ProtectedRoute>
    </div>
  );
};

export default customize;
