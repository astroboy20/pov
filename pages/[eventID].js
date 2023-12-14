import { useRouter } from 'next/router'
import React from 'react'

const EventID = () => {
    const router = useRouter()
  return (
    <div>event.id:{router.query.slug}</div>
  )
}

export default EventID