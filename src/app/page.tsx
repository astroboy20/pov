"use client"
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { HomeContainer } from "@/container/home-container/home-container";
 

export default function Home() {
  return (
    <>
      {/* <Head>
        <title>Welcome to Cliqpod</title>
        <meta name="description" content="Clipod" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/cliqpod.png" />
      </Head> */}
      <main className="landing-page">
        <Navbar />
        <HomeContainer />
       <Footer/>
      </main>
    </>
  );
}
