import React from 'react'
import { HType } from './Text.style'

const CustomText = ({type,variant, children, weight}) => {
  return type === "Htype" ?
    <HType variant={variant} weight={weight}>
        {children}
    </HType> : <div>i am not working</div>
  
}


export {CustomText}