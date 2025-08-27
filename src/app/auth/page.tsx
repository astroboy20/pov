
import { Auth } from "@/container/auth-container/auth";
import Head from "next/head";
import React from "react";

const AuthPage = () => {
  return (
    <main className="body">
      <Auth />
    </main>
  );
};

export default AuthPage;
