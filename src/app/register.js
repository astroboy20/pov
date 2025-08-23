import { Register } from "@/container/Register";
import Head from "next/head";
import React from "react";

const register = () => {
  return (
    <div className="body">
       <Head>
        <title>Register</title>
        <meta name="description" content="Clipod" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/cliqpod.png" />
      </Head>
      <Register />
    </div>
  );
};

export default register;
