import { Logo } from "@/assets";
import React from "react";
import { NavContainer } from "./Navbar.style";

const Navbar = () => {
  return (
    <NavContainer>
      <header className="header">
        <Logo />
        <div className="right">
          <p>Login</p>
          <span>Get started</span>
        </div>
      </header>
    </NavContainer>
  );
};

export { Navbar };
