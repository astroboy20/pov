import { useRouter } from "next/router";
import Link from "next/link";
import styled from "./BottomNav.module.css";
import { FeatureStyle } from "./BottomNav.style";
import { GoHome } from "react-icons/go";
import { TbCalendarCheck } from "react-icons/tb";
import { CiUser } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { AddIcon } from "@/assets";

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
          <GoHome size={"25px"} />
          Home
        </Link>
        <Link
          href="/event"
          className={
            router.pathname === "/event" ||
            router.pathname === "/create-event" ||
            router.pathname === "/event-setup" ||
            router.pathname === "/customize"
              ? `${styled.active}`
              : `${styled.link}`
          }
        >
          <TbCalendarCheck size={"25px"} />
          Events
        </Link>

        {router.pathname === "/dashboard" && (
          <Link href="/event-setup" className="event">
            <AddIcon />
          </Link>
        )}

        {/* <Link
          href={`/album/${id}`}
          className={
            router.pathname === `/album/${id}`
              ? `${styled.active}`
              : `${styled.link}`
          }
        >
          <FaInstagram size={"25px"} />
          Album
        </Link> */}
        <Link
          href={`/view-album`}
          className={
            router.pathname === `/view-album`
              ? `${styled.active}`
              : `${styled.link}`
          }
        >
          <FaInstagram size={"25px"} />
          Album
        </Link>

        <Link
          href="/profile"
          className={
            router.pathname === "/profile"
              ? `${styled.active}`
              : `${styled.link}`
          }
        >
          <CiUser size={"25px"} />
          Profile
        </Link>
      </FeatureStyle>
    </>
  );
};

export { BottomNav };
