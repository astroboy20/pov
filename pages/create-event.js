import { CreateEvent } from '@/container/CreateEvent'
import { ProtectedRoute } from '@/container/ProtectedRoutes/ProtectedRoute'
import React from 'react'

const createEvent = () => {
  return (
    <ProtectedRoute><CreateEvent/></ProtectedRoute>
  )
}

export default createEvent