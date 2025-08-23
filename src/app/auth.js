import { Auth } from "@/container/Auth";
import Head from "next/head";
import React from "react";

const auth = () => {
  return (
    <div className="body">
       <Head>
        <title>Authentication</title>
        <meta name="description" content="Clipod" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/cliqpod.png" />
      </Head>
      <Auth />
    </div>
  );
};

export default auth;
