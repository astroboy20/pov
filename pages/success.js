import { Success } from "@/container/Customize/Steps/Success";
import Head from "next/head";
import React from "react";

const success = () => {
  return (
    <div className="body">
      <Head>
        <title>Success</title>
        <meta name="description" content="Clipod" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/cliqpod.png" />
      </Head>
      <Success />
    </div>
  );
};

export default success;
