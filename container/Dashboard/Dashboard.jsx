import { useRouter } from "next/router";
import Event from "./Pages/Event";
import { DashboardStyle, FeatureStyle } from "./Dashboard.style";
import Link from "next/link";
import styled from "./Dashboard.module.css";
import { BottomNav } from "@/components/BottomNav";
import { SearchIcon } from "@/assets";

const Dashboard = () => {
  const router = useRouter();

  return (
    <DashboardStyle>
      <div className="header">
        <div className="input">
          {" "}
          <SearchIcon />
          <input type="text" placeholder="Search events here ..."/>
        </div>
      </div>
    </DashboardStyle>
  );
};

export { Dashboard };
