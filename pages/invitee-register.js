import { Register } from '@/container/Invitee/Register'
import Head from 'next/head'
import React from 'react'

const invitee_register = () => {
  return (
    <div className='body'>
       <Head>
        <title>Invitee Registration</title>
        <meta name="description" content="Clipod" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/cliqpod.png" />
      </Head><Register/></div>
  )
}

export default invitee_register