import React from "react";
import { DefaultButton, TransparentButton } from "./Button.style";

const Button = ({ type, variant, onClick, children, ...rest }) => {
  return variant === "defaultButton" ? (
    <DefaultButton type={type} onClick={onClick} rest={rest}>
      {children}
    </DefaultButton>
  ) : variant === "transparent" ? (
    <TransparentButton type={type} onClick={onClick} rest={rest}>
      {children}
    </TransparentButton>
  ) : "";
};

export { Button };
