import React from "react";
import { DefaultButton, TransparentButton, WhiteButton } from "./Button.style";

const Button = ({ type, variant, onClick, disabled, children, ...rest }) => {
  return variant === "defaultButton" ? (
    <DefaultButton type={type} disabled={disabled} onClick={onClick} rest={rest}>
      {children}
    </DefaultButton>
  ) : variant === "transparent" ? (
    <TransparentButton type={type} onClick={onClick} rest={rest}>
      {children}
    </TransparentButton>
  ) : variant === "white" ? (
    <WhiteButton type={type} onClick={onClick} rest={rest}>
      {children}
    </WhiteButton>
  ) : ""
};

export { Button };
