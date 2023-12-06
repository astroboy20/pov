import React from "react";
import { GuestItem, OptionItem } from "./Options.style";

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

export const GuestOption = ({
 
  price,
  guest,
  value,
  selected,
  setValue,
}) => {
  const handleClick = () => {
    setValue(value);
  };
  return (
    <>
      <GuestItem selected={selected} onClick={handleClick}>
        <div>
          {guest}
        </div>
        {price}
      </GuestItem>
    </>
  );
};

// const GuestOption = Option

export default Option;
