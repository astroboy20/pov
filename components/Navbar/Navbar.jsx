import { Logo } from "@/assets";
import React from "react";
import { NavContainer } from "./Navbar.style";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <NavContainer>
      <header className="header">
        <Image
          src={"/images/logo.svg"}
          width={170}
          height={81}
          alt="logo"
          objectFit="contain"
          className="logo-image"
        />
        {/* <Logo /> */}
        <div className="right">
          <p>
            {" "}
            <Link href={"/login"}>Login</Link>
          </p>
          <span>
            {" "}
            <Link href={"/auth"}>Get started</Link>
          </span>
        </div>
      </header>
    </NavContainer>
  );
};

export { Navbar };
