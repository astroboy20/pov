import { Login } from "@/container/Login";
import Head from "next/head";
import React from "react";

const login = () => {

  return (
    
    <div className="body">
       <Head>
        <title>Login</title>
        <meta name="description" content="Clipod" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/cliqpod.png" />
      </Head>
      <Login />
    </div>
  );
};

export default login;
