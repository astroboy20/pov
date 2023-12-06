import React from "react";
import { OptionItem } from "./Options.style";


const Option = ({ value, label, selected, setValue }) => {
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

const GuestOption = Option

export default Option;
