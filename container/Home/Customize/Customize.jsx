import React from "react";
import { CustomizeStyle } from "./Customize.style";
import Image from "next/image";

const Customize = () => {
  return (
    <CustomizeStyle>
      <div className="left">
        <h1>
          Customizable templates <br />
          made for you!
        </h1>
        <p>
          Elevate your capturing experience <br /> with personalized templates.
        </p>
        <span>Customize</span>
      </div>
      <div className="right">
        <Image
          src="/images/flier.svg"
          width={568}
          height={648}
          alt="customize_image"
        />
      </div>
    </CustomizeStyle>
  );
};

export { Customize };
