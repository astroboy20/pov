import { HomePage } from '@/container/Home'
import Head from 'next/head'


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
        <HomePage/>
      </main>
    </>
  )
}
