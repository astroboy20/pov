import { Dashboard } from '@/container/Dashboard';
import { ProtectedRoute } from '@/container/ProtectedRoutes/ProtectedRoute';
import React from 'react'


const dashboard = () => {
    
  return (
    <ProtectedRoute>
        <Dashboard/>
        
    </ProtectedRoute>
  )
}

export default dashboard