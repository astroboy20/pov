import { useRouter } from "next/router";
import Event from "./Pages/Event";
import { DashboardStyle, FeatureStyle } from "./Dashboard.style";
import Link from "next/link";
import styled from "./Dashboard.module.css";
import { BottomNav } from "@/components/BottomNav";
import { SearchIcon } from "@/assets";
import Image from "next/image";

const Dashboard = () => {
  const router = useRouter();

  return (
    <DashboardStyle>
      <div className="header">
        <div className="input">
          {" "}
          <SearchIcon />
          <input type="text" placeholder="Search events here ..." />
        </div>
      </div>
      <div className="body">
        <div className="upcoming-event">
          <h1>Upcoming Events</h1>
          <div className="scroll">
            <div className="event-a">
              <Image
                src={"/images/wedding.svg"}
                height={108}
                width={100}
                alt="wedding"
              />
              <div className="text">
                <h3>The Quasar’24</h3>
                <p>December 24, 2028.</p>
                <p>Transcorp Hills, Ibadan.</p>
                <p>Physical & Virtual</p>
              </div>
            </div>

            <div className="event-b">
              <Image
                src={"/images/wedding.svg"}
                height={108}
                width={100}
                alt="wedding"
              />
              <div className="text">
                <h3>The Quasar’24</h3>
                <p>December 24, 2028.</p>
                <p>Transcorp Hills, Ibadan.</p>
                <p>Physical & Virtual</p>
              </div>
            </div>
          </div>
        </div>
        <div className="popular-event">
          <div className="event-header">
            {" "}
            <h1>Popular Events</h1> <p>View all</p>
          </div>
          <div className="event-body">
            <div className="text"> <p>Sekani’s Bridal Party</p>
            <span>View</span></div>
           
          </div>
          <div className="event-body">
            <div className="text"> <p>Sekani’s Bridal Party</p>
            <span>View</span></div>
           
          </div>
          <div className="event-body">
            <div className="text"> <p>Sekani’s Bridal Party</p>
            <span>View</span></div>
           
          </div>
          <div className="event-body">
            <div className="text"> <p>Sekani’s Bridal Party</p>
            <span>View</span></div>
           
          </div>
          <div className="event-body">
            <div className="text"> <p>Sekani’s Bridal Party</p>
            <span>View</span></div>
           
          </div>
          <div className="event-body">
            <div className="text"> <p>Sekani’s Bridal Party</p>
            <span>View</span></div>
           
          </div>
          <div className="event-body">
            <div className="text"> <p>Sekani’s Bridal Party</p>
            <span>View</span></div>
           
          </div>
        </div>
      </div>
    </DashboardStyle>
  );
};

export { Dashboard };
