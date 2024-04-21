import { useRouter } from "next/router";
import Link from "next/link";
import styled from "./BottomNav.module.css";
import { FeatureStyle } from "./BottomNav.style";
import { GoHome } from "react-icons/go";
import { TbCalendarCheck } from "react-icons/tb";
import { RxCamera } from "react-icons/rx";
import { CiUser } from "react-icons/ci";

const BottomNav = () => {
  const router = useRouter();

  return (
    <>
      <FeatureStyle>
        <Link
          href="/dashboard"
          className={
            router.pathname === "/dashboard"
              ? `${styled.active}`
              : `${styled.link}`
          }
        >
          <GoHome size={"30px"}/>
          Home
        </Link>
        <Link
          href="/event"
          className={
            router.pathname === "/event" ? `${styled.active}` : `${styled.link}`
          }
        >
          <TbCalendarCheck size={"30px"}/>
          Events
        </Link>
        <Link
          href="/gallery"
          className={
            router.pathname === "/gallery"
              ? `${styled.active}`
              : `${styled.link}`
          }
        >
          <RxCamera size={"30px"} />
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
          <CiUser size={"30px"} />
          Profile
        </Link>
      </FeatureStyle>
    </>
  );
};

export { BottomNav };
