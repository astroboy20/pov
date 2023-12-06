import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "@/feature/slices/authSlice";
import { useRouter } from "next/router";
import Event from "./Pages/Event";
import Setting from "./Pages/Setting";
import Option from "./Option";
import { FeatureStyle } from "./Dashboard.style";
import { optionItems } from "./data";
import { useOptionContext } from "@/context/option-context";
import { Gallery } from "./Pages/Gallery";

const Dashboard = () => {
  const { option, switchOption } = useOptionContext();

  const handleClick = (value) => {
    switchOption(value);
  };



  return (
    <>
      
      <>
        {option === "Events" && <Event />}
        {option === "Setting" && <Setting />}
        {option === "Gallery" && <Gallery />}
      
        <FeatureStyle>
          {optionItems.map((optionItem) => (
            <Option
              key={optionItem.value}
              value={optionItem.value}
              label={optionItem.label}
              selected={option === optionItem.value}
              setValue={handleClick}
            />
          ))}
        </FeatureStyle>
      </>
      
    </>
  );
};

export { Dashboard };
