import React from "react";
import { FeatureStyle, SettingStyle } from "../Dashboard.style";
import { CustomText } from "@/components/CustomText";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { logout, reset } from "@/feature/slices/authSlice";
import Link from "next/link";
import styled from "../Dashboard.module.css";
const Setting = () => {
  const ActiveLink = ({ isActive }) => (isActive ? `${styled.active}` : "");
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    router.push("/login");
  };
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
          <div onClick={handleLogout}>Logout</div>
        </div>
        <div className="setting-type">
          {" "}
          <CustomText weight={"500"} type={"Htype"} variant={"h3"}>
            Delete
          </CustomText>{" "}
          Request Acccount Deletion
        </div>
      </SettingStyle>
      <FeatureStyle>
        <Link
          href="/dashboard"
          className={
            router.pathname === "/dashboard"
              ? `${styled.active}`
              : `${styled.link}`
          }
        >
          Event
        </Link>
        <Link
          href="/gallery"
          className={
            router.pathname === "/gallery"
              ? `${styled.active}`
              : `${styled.link}`
          }
        >
          Gallery
        </Link>
        <Link
          href="/setting"
          className={
            router.pathname === "/setting"
              ? `${styled.active}`
              : `${styled.link}`
          }
        >
          Setting
        </Link>
      </FeatureStyle>
    </>
  );
};

export default Setting;
