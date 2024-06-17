import { BottomNav } from "@/components/BottomNav";
import { Event } from "@/container/Event";
import Head from "next/head";
import React from "react";

const event = () => {
  return (
    <div className="body">
      <Head>
        <title>Event</title>
        <meta name="description" content="Clipod" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/cliqpod.png" />
      </Head>
      <Event />
      <BottomNav />
    </div>
  );
};

export default event;
