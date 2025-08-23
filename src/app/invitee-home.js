import { Event } from "@/container/Invitee/Event";
import Head from "next/head";
import React from "react";

const invitee_home = () => {
  return (
    <div className="body">
       <Head>
        <title>Home</title>
        <meta name="description" content="Clipod" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/cliqpod.png" />
      </Head>
      <Event />
    </div>
  );
};

export default invitee_home;
