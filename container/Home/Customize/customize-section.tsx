import React from "react";
import { CustomizeStyle } from "./Customize.style";
import Image from "next/image";
import Link from "next/link";

const Customize = () => {
  return (
    <main className="p-[5%] inline-flex items-center border w-full">
      <div className="flex flex-col text-left gap-[24px] w-full">
        <h1 className="text-[72px] font-bold leading-tight">
          Customizable <br /> templates <br />
          made for you!
        </h1>
        <p className="text-[28px] font-medium text-[#1d1465]">
          Elevate your capturing experience <br /> with personalized templates.
        </p>

        <Link
          href="/auth"
          className="rounded-[40px] text-[28px] bg-[#1d1465] px-[30px] py-[10px] text-white w-fit cursor-pointer hover:bg-transparent hover:border-l hover:border-r hover:border-[#1d1465] hover:text-[#1d1465] transition ease-in-out duration-500"
        >
          Customize
        </Link>
      </div>
      <div className="ml-auto w-full border">
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
    </main>
  );
};

export { Customize };
