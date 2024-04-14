import { Navbar } from "@/components/Navbar/Navbar";
import { HomeContainer, HomePage } from "@/container/Home";
import { Customize } from "@/container/Home/Customize/Customize";
import { FAQ } from "@/container/Home/FAQs/Faq";
import { Hero } from "@/container/Home/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Cliqpod</title>
        <meta name="description" content="Clipod" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <Navbar />
        <HomeContainer />
        <Hero />
        <Customize/>
        <FAQ/>
      </main>
    </>
  );
}
