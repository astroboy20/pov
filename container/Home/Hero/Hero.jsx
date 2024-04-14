import React from "react";
import { HeroContainer } from "./Hero.style";

const Hero = () => {
  return (
    <HeroContainer>
      <div className="text">
        <h1>
          {" "}
          Share Digital Memories <br /> of your Event
        </h1>
        <p>Access to digital album from cliqs taken at your event..</p>
        <div className="button">
          <span className="a">Get Cliqpod</span>
          <span className="b">View Cliqs</span>
        </div>
      </div>
      <hr className="hr" />
    </HeroContainer>
  );
};

export { Hero };
