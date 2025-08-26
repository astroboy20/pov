"use client";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { HomeContainer } from "@/container/home-container/home-container";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Navbar />
        <HomeContainer />
        <Footer />
      </main>
    </>
  );
}
