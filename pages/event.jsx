import { BottomNav } from '@/components/BottomNav'
import Event from '@/container/Dashboard/Pages/Event'
import React from 'react'

const event = () => {
  return (
    <div className='body'>
       <Event/> 
       <BottomNav/>
    </div>
  )
}

export default event