import React from "react";
import { CustomizeStyle } from "./Customize.style";
import Image from "next/image"

const Customize = () => {
  return (
    <CustomizeStyle>
      <div className="left">
        <h1>Cliqs templates made for you!</h1>
        <p>
          We have series of beautiful templates made for you. Customize and make
          it yours!
        </p>
        <span>Customize</span>
      </div>
      <div className="right">
       <Image src="/images/phone.svg" width={900} height={760} alt="customize_image"/>
      </div>
    </CustomizeStyle>
  );
};

export  {Customize}
