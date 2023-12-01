import React from "react";
import { SettingStyle } from "../Dashboard.style";
import { CustomText } from "@/components/CustomText";

const Setting = () => {
  return (
    <>
      <SettingStyle>
        <CustomText weight={"500"} type={"Htype"} variant={"p"}>
          Setting
        </CustomText>

        <div className="setting-type">
          {" "}
          <CustomText weight={"500"} type={"Htype"} variant={"h3"}>
            Help
          </CustomText>{" "}
          Text Support Email Support
        </div>
        <div className="setting-type">
          {" "}
          <CustomText weight={"500"} type={"Htype"} variant={"h3"}>
            Follow us
          </CustomText>{" "}
          Instagram Twitter{" "}
        </div>
        <div className="setting-type">
          {" "}
          <CustomText weight={"500"} type={"Htype"} variant={"h3"}>
            Data
          </CustomText>{" "}
          Clear Cache{" "}
        </div>
        <div className="setting-type">
          <CustomText weight={"500"} type={"Htype"} variant={"h3"}>
            Legal
          </CustomText>{" "}
          Privacy Policy Terms of service
        </div>
        <div className="setting-type">
          {" "}
          <CustomText weight={"500"} type={"Htype"} variant={"h3"}>
            Account
          </CustomText>{" "}
          Log Out
        </div>
        <div className="setting-type">
          {" "}
          <CustomText weight={"500"} type={"Htype"} variant={"h3"}>
            Delete
          </CustomText>{" "}
          Request Acccount Deletion
        </div>
      </SettingStyle>
    </>
  );
};

export default Setting;
