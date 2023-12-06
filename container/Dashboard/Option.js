import React from "react";
import { OptionItem } from "./Dashboard.style";

const Option = ({ value, label, selected, setValue,icon }) => {
  const handleClick = () => {
    setValue(value);
  };
  return (
    <>
      <OptionItem selected={selected} onClick={handleClick}>
        {icon}
        {label}
      </OptionItem>
    </>
  );
};


export default Option;
