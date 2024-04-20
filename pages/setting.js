import Setting from '@/container/Dashboard/Pages/Setting'
import { ProtectedRoute } from '@/container/ProtectedRoutes/ProtectedRoute'
import React from 'react'

const setting = () => {
  return (
    <div className="body">
    <ProtectedRoute><Setting/></ProtectedRoute>
    </div>
  )
}

export default setting