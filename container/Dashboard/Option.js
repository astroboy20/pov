import React from "react";
import { OptionItem } from "./Dashboard.style";

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

export default Option;
