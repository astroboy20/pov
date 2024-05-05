import React, { useState, useEffect, useRef } from "react";
import { HeroContainer } from "./Hero.style";
import Link from "next/link";

const Hero = () => {
  const [typedName, setTypedName] = useState("");
  const names = ["Stylishly", "Seamlessly", "Elegantly"];
  const typingSpeed = 200;
  const switchDelay = 3500;
  const nameIndexRef = useRef(0);
  const images = [
    { src: "/images/a.svg", alt: "bouncing-img", delay: 0 },
    { src: "/images/b.svg", alt: "bouncing-img", delay: 1 },
    { src: "/images/c.svg", alt: "bouncing-img", delay: 2 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const currentName = names[nameIndexRef.current];
      let currentIndex = typedName.length;

      if (currentIndex < currentName.length) {
        setTypedName((prevName) => prevName + currentName.charAt(currentIndex));
      } else {
        clearInterval(interval);
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
        Capture Moments and Create Memories <br/> of your Event In Real-time; <span>{typedName}.</span>
        </h1>
        <p>
          Transform fleeting moments into timeless memories as an album with
          cliqpod
        </p>
        <div className="button">
          <span className="a">
            <Link href="/auth">Get Cliqpod</Link>
          </span>
          <span className="b">
            <Link href="/auth">View Cliqs</Link>
          </span>
        </div>
      </div>

      <hr className="hr" />
    </HeroContainer>
  );
};

export { Hero };
