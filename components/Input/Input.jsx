import React, { useState } from "react";
import {
  InputStyle,
  InputPasswordStyle,
  Container,
  InputDiv,
  RadioStyle,
} from "./Input.style";
import PropTypes from "prop-types";
import { Hide, Show } from "@/assets";

const Input = ({
  type,
  variant,
  placeholder,
  value,
  label,
  onChange,
  ...rest
}) => {
  const inputType = "text" || "email";

  const [show, setShow] = useState(false);
  const handleChange = () => {
    setShow(!show);
  };
  return variant === "text" ? (
    <InputDiv>
      {label && <label htmlFor={rest.id}>{label}</label>}
      <InputStyle
        type={inputType}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
      />
    </InputDiv>
  ) : variant === "password" ? (
    <InputDiv>
      {label && <label htmlFor={rest.id}>{label}</label>}
      <Container>
        <InputPasswordStyle
          type={show ? "text" : "password"}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          {...rest}
          style={{background:"none"}}
        />
        <span onClick={handleChange}>{show ? <Show /> : <Hide />}</span>
      </Container>
    </InputDiv>
  ) : null;
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

export { Input };
