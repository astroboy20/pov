// import Head from "next/head";
import Wrapper from "@/components/media-query-wrapper";
import { Register } from "@/container/register-container/register";
import React from "react";

const register = () => {
  return (
    <main className="min-h-screen">
      {/* <Head>
        <title>Register</title>
        <meta name="description" content="Clipod" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/cliqpod.png" />
      </Head> */}
      <Wrapper>
        <Register />
      </Wrapper>
    </main>
  );
};

export default register;
