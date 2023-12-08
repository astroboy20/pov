import Setting from '@/container/Dashboard/Pages/Setting'
import { ProtectedRoute } from '@/container/ProtectedRoutes/ProtectedRoute'
import React from 'react'

const setting = () => {
  return (
    <ProtectedRoute><Setting/></ProtectedRoute>
  )
}

export default setting