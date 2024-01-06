import { createContext, useContext, useState } from "react";

const OptionContext = createContext({
  option: "Hosting",
  switchOption: () => {},
});

export const OptionProvider = ({ children }) => {
  const [option, setOption] = useState("Hosting");

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
