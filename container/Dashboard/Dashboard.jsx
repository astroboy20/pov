
import { useRouter } from "next/router";
import Event from "./Pages/Event";
import { FeatureStyle } from "./Dashboard.style";
import Link from "next/link";
import styled from "./Dashboard.module.css";
import { BottomNav } from "@/components/BottomNav";

const Dashboard = () => {
  const router = useRouter();

  return (
    <>
      <>
        <Event />
        <BottomNav/>
      </>
    </>
  );
};

export { Dashboard };
