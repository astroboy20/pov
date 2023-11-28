import React, { useState } from "react";
import {
  InputStyle,
  InputPasswordStyle,
  Container,
  InputDiv,
  RadioStyle,
  ConfirmPasswordStyle,
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
  error,
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
      <div>{error && <span style={{color:"red"}} htmlFor={rest.id}>{error}</span>}</div>
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
          error={error}
        />
        <span onClick={handleChange}>{show ? <Show /> : <Hide />}</span>
      </Container>
     {error && <span style={{color:"red"}} htmlFor={rest.id}>{error}</span>}
    </InputDiv>
  ) : variant === "confirmPassword" ? (
    <InputDiv>
    {label && <label htmlFor={rest.id}>{label}</label>}
    <Container>
      <ConfirmPasswordStyle
        type={show ? "text" : "password"}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
        style={{background:"none"}}
        error={error}
      />
      <span onClick={handleChange}>{show ? <Show /> : <Hide />}</span>
    </Container>
   {error && <span style={{color:"red"}} htmlFor={rest.id}>{error}</span>}
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
