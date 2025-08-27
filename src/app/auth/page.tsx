import Wrapper from "@/components/media-query-wrapper";
import { Auth } from "@/container/auth-container/auth";
import Head from "next/head";
import React from "react";

const AuthPage = () => {
  return (
    <main className="min-h-screen">
      <Wrapper>
        <Auth />
      </Wrapper>
    </main>
  );
};

export default AuthPage;
