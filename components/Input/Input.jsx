import React, { useState } from "react";
import {
  InputStyle,
  InputPasswordStyle,
  Container,
  InputDiv,
  RadioStyle,
  ConfirmPasswordStyle,
  TextContainer,
} from "./Input.style";
import PropTypes from "prop-types";
import { Hide, PassIcon, Show } from "@/assets";

const Input = ({
  type,
  variant,
  placeholder,
  value,
  label,
  onChange,
  error,
  icon,
  ...rest
}) => {
  const inputType = "text" || "email";

  const [show, setShow] = useState(false);
  const handleChange = () => {
    setShow(!show);
  };
  return variant === "text" ? (
    <InputDiv>
      <Container>
        {icon}
        <InputStyle
          type={inputType}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          {...rest}
          icon={icon}
        />
      </Container>

      <div>
        {error && (
          <span style={{ color: "red" }} htmlFor={rest.id}>
            {error}
          </span>
        )}
      </div>
    </InputDiv>
  ) : variant === "password" ? (
    <InputDiv>
      <Container>
        <span onClick={handleChange}>
          <PassIcon />
        </span>
        <InputStyle
          type={show ? "text" : "password"}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          {...rest}
          style={{ background: "none" }}
          error={error}
        />
        <span onClick={handleChange}>{show ? <Show /> : <Hide />}</span>
      </Container>
      {error && (
        <span style={{ color: "red" }} htmlFor={rest.id}>
          {error}
        </span>
      )}
    </InputDiv>
  ) : null;
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

export { Input };
