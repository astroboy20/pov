import { useRouter } from "next/router";
import { DashboardStyle, FeatureStyle } from "./Dashboard.style";
import { SearchIcon } from "@/assets";
import Image from "next/image";
import useFetchItems from "@/hooks/useFetchItems";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { EventSpinner } from "@/components/Spinner/Spinner";
import Link from "next/link";

const Dashboard = () => {
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);
  const accessToken = user ? user.token : "";
  const [upcomingEvent, setUpcomingEvent] = useState([]);

  const { data, isLoading } = useFetchItems({
    url: "https://api-cliqpod.koyeb.app/upcoming-events/",
    token: accessToken,
  });

  useEffect(() => {
    if (data) {
      setUpcomingEvent(data.events);
    }
  }, [data]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();

    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");

    const formattedDate = `${month} ${day}th by ${hours}:${minutes} GMT`;

    return formattedDate;
  };

  if (isLoading) return <EventSpinner />;

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
          <div className="upcoming-event">
            <h1>Upcoming Events</h1>
            <div className="scroll">
              {upcomingEvent?.length === 0 ? (
                <p
                  style={{
                    margin: "auto",
                    textAlign: "center",
                  }}
                >
                  No event available
                </p>
              ) : (
                upcomingEvent?.map((event) => (
                  <div key={event?.id} className="event">
                    <Image
                      src={event?.event_thumbnail}
                      height={108}
                      width={100}
                      alt="event-thumbnail"
                      objectFit="cover"
                      className="thumbnail"
                    />
                    <div className="text">
                      <h3>{event?.eventName}</h3>
                      <p>{formatDate(event?.event_date)}</p>
                      <p>{event?.location}</p>
                      <p>{event?.event_mode}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
        <div className="popular-event">
          <div className="event-header">
            {" "}
            <h1>Popular Events</h1> <p>View all</p>
          </div>
          <div className="popular-scroll">
            {upcomingEvent?.map((event) => (
              <>
                <div className="event-body">
                  <div className="text">
                    {" "}
                    <p>{event?.eventName}</p>
                    <Link href={`/album/${event?._id}`}>
                      <span>View</span>
                    </Link>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </DashboardStyle>
  );
};

export { Dashboard };
