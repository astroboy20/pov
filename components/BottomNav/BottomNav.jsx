import { useRouter } from "next/router";
import Link from "next/link";
import styled from "./BottomNav.module.css";
import { FeatureStyle } from "./BottomNav.style";

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
          Home
        </Link>
        <Link
          href="/event"
          className={
            router.pathname === "/event"
              ? `${styled.active}`
              : `${styled.link}`
          }
        >
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

export { BottomNav };
