import { BlueBackIcon } from '@/assets'
import { Button } from '@/components/Button'
import React from 'react'

const StepTwo = ({step, handlePrev, handleRoute,eventName}) => {
  return (
    <>
        <div className="header">
        <div className="header-head">
          <span onClick={step === 2 ? handlePrev : handleRoute}>
            <BlueBackIcon />
          </span>

          <h1>{eventName}</h1>

          <span style={{ color: "white" }}>.</span>
        </div>
       
        
      </div>
      <div className="body">
       
        <Button
        //   onClick={handleNext}
          type={"submit"}
          variant={"defaultButton"}
        >
          Customize Cliq
        </Button>
      </div>
    </>
  )
}

export  {StepTwo}