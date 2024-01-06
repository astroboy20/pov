import React from "react";
import { OptionItem } from "./Option.style";

const Option = ({ value, label, selected, setValue,icon }) => {
  const handleClick = () => {
    setValue(value);
  };
  return (
    <>
      <OptionItem selected={selected} onClick={handleClick}>
        {label}
      </OptionItem>
    </>
  );
};


export default Option;
