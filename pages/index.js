import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import { HomeContainer, HomePage } from "@/container/Home";
import Head from "next/head";
 

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Cliqpod</title>
        <meta name="description" content="Clipod" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/cliqpod.png" />
      </Head>
      <main className="landing-page">
        <Navbar />
        <HomeContainer />
       <Footer/>
      </main>
    </>
  );
}
