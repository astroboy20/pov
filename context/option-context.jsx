"use client"
import { createContext, useContext, useState } from "react";

const OptionContext = createContext({
  option: "Hosted",
  switchOption: () => {},
});

export const OptionProvider = ({ children }) => {
  const [option, setOption] = useState("Hosted");

  const switchOption = (optionValue) => {
    setOption(optionValue);
  };

  return (
    <OptionContext.Provider value={{ option, switchOption }}>
      {children}
    </OptionContext.Provider>
  );
};

export const useOptionContext = () => useContext(OptionContext);
