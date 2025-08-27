import Wrapper from "@/components/media-query-wrapper";
import { Login } from "@/container/login-container/login";
import React from "react";
const LoginPage = () => {
  return (
    <main className="min-h-screen">
      {/* <Head>
        <title>Login</title>
        <meta name="description" content="Clipod" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/cliqpod.png" />
      </Head> */}
      <Wrapper>
        <Login />
      </Wrapper>
    </main>
  );
};

export default LoginPage;
