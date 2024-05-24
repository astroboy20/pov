import React from "react";
import { MemoriesContainer } from "./Memories.style";
import Image from "next/image";
import Link from "next/link";

const Memories = () => {
  return (
    <MemoriesContainer>
      <div className="left">
        <Image
          src="/images/phone1.svg"
          width={620}
          height={640}
          objectFit="contain"
          className="phone1"
          alt="customize_image"
        />
      </div>
      <div className="right">
        <h1>Your Event Memories, Anywhere, Anytime!</h1>
        <p>
          Experience the power of nostalgia reimagined with cliqpod's digital
          albums.
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
      
    </MemoriesContainer>
  );
};

export { Memories };
