import React from "react";
import { HeroContainer } from "./Hero.style";

const Hero = () => {
  return (
    <HeroContainer>
      {/* <div className='left'>

        </div>
        <div className='right'>
      
We have series of beautiful templates made for you. Customize and make it yours! 
Customize





        </div> */}
      <div className="text">
        <h1> Share Digital Memories <br/> of your Event</h1>
        <p>Access to digital album from cliqs taken at your event..</p>
        <div className="button">
          <span className="a">Get Cliqpod</span>
          <span className="b">View Cliqs</span>
        </div>
      </div>
      <hr className="hr"/>
    </HeroContainer>
  );
};

export { Hero };
