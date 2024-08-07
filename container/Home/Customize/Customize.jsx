import React from "react";
import { CustomizeStyle } from "./Customize.style";
import Image from "next/image";
import Link from "next/link";

const Customize = () => {
  return (
    <CustomizeStyle>
      <div className="left">
        <h1>
          Customizable templates <br />
          made for you!
        </h1>
        <p>Elevate your capturing experience with personalized templates.</p>
        <span>
          <Link href="/auth">Customize</Link>
        </span>
      </div>
      <div className="right">
        <Image
          src="/images/phone2.svg"
          width={620}
          height={640}
          objectFit="cover"
          className="phone2"
          layout="responsive"
          alt="customize_image"
        />
      </div>
    </CustomizeStyle>
  );
};

export { Customize };
