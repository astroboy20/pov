import React, { useState, useEffect, useRef } from "react";
import { HeroContainer } from "./Hero.style";

const Hero = () => {
  const [typedName, setTypedName] = useState("");
  const names = ["Stylishly", "Seamlessly", "Elegantly"]; // List of names to cycle through
  const typingSpeed = 200; // Speed at which each character is typed (in milliseconds)
  const switchDelay = 3500; // Delay before switching to the next name (in milliseconds)
  const nameIndexRef = useRef(0); // Ref to hold the current index of the name being typed

  useEffect(() => {
    const interval = setInterval(() => {
      const currentName = names[nameIndexRef.current];
      let currentIndex = typedName.length;

      if (currentIndex < currentName.length) {
        setTypedName((prevName) => prevName + currentName.charAt(currentIndex));
      } else {
        clearInterval(interval); // Stop typing until next name
        setTimeout(() => {
          setTypedName("");
          nameIndexRef.current = (nameIndexRef.current + 1) % names.length;
        }, switchDelay);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [names, switchDelay, typingSpeed, typedName]);

  return (
    <HeroContainer>
      <div className="text">
        <h1>
          Capture Moments and Create <br /> Memories of your Event,{" "}
          <span>{typedName}.</span>
        </h1>
        <p>
          Transform fleeting moments into timeless memories as an album with
          cliqpod
        </p>
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
