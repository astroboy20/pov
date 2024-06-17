import { Login } from '@/container/Invitee/Login'
import Head from 'next/head'
import React from 'react'

const invitee_login = () => {
  return (
    <div className='body'>
       <Head>
        <title>Invitee Login</title>
        <meta name="description" content="Clipod" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/cliqpod.png" />
      </Head>
      <Login/></div>
  )
}

export default invitee_login