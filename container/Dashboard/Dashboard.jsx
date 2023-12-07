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
import Link from "next/link";
import styled from "./Dashboard.module.css";

const Dashboard = () => {
  const router = useRouter();

  return (
    <>
      <>
        <Event />
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
    </>
  );
};

export { Dashboard };
