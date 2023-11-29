/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/Button";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "@/feature/slices/authSlice";
import { useRouter } from "next/router";
import Link from "next/link";
import { CustomText } from "@/components/CustomText";
import {
  BodyStyle,
  FeatureStyle,
  HeaderStyle,
  OptionItem,
} from "./Dashboard.style";
import { optionItems } from "./data";
import Option from "./Option";
import { useOptionContext } from "@/context/option-context";
import Event from "./Pages/Event";

const Dashboard = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const {option, switchOption} = useOptionContext();
  const handleClick = (value) => {
    switchOption(value);
  };
  const handleEventOption = () => {
    switchOption("event");
  };

  const handleSettingsOption = () => {
    switchOption("settings");
  };
  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    router.push("/login");
  };
  return (
    <>
      {/* <Button onClick={handleLogout} type="submit" variant="defaultButton">
        Logout
      </Button> */}
      {/* <Link target="_blank" href={"/verify"}>
        Verify Email
      </Link> */}
      {option === "Events" && (
        <Event/>
      )}
      {option === "Setting" && (
        "hello i am settings"
      )}

      <FeatureStyle>
        {optionItems.map((optionItem) => (
          <Option
            key={optionItem.value}
            value={optionItem.value}
            label={optionItem.label}
            selected={option === OptionItem.value}
            setValue={handleClick}
          />
        ))}
        {/* <div onClick={handleEventOption}>Events</div>
        <div onClick={handleSettingsOption}>Profile</div> */}
        
      </FeatureStyle>
    </>
  );
};

export { Dashboard };
