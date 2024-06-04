import { useRouter } from "next/router";
import { DashboardStyle, EventBody, FeatureStyle } from "./Dashboard.style";
import { FilterIcon, SearchIcon } from "@/assets";
import Image from "next/image";
import useFetchItems from "@/hooks/useFetchItems";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { EventSpinner } from "@/components/Spinner/Spinner";
import Link from "next/link";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/input";

const Dashboard = () => {
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);
  const accessToken = user ? user.token : "";
  const [upcomingEvent, setUpcomingEvent] = useState([]);
  const [filter, setFilter] = useState(false);

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

  const handleFilter = () => {
    setFilter(!filter);
  };

  if (isLoading) return <EventSpinner />;

  return (
    <DashboardStyle>
      <div className="header">
        <div className="input">
          {/* <input type="text" placeholder="Search events here ..." /> */}
          <InputGroup display={"flex"} alignItems={"center"}>
            <InputLeftElement>
              <SearchIcon />
            </InputLeftElement>
            <Input
              border={"none"}
              focusBorderColor="transparent"
              placeholder="Search events here ..."
            />
            <InputRightElement onClick={handleFilter}>
              <FilterIcon />
            </InputRightElement>
            {filter && (
              <div className="filter">
                <p>Location</p>
                <hr className="hr" />
                <p>Vibe</p>
              </div>
            )}
          </InputGroup>
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
                  <div key={event?._id} className="event">
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
                      <Link href={`/album/${event?._id}`}>
                        <span>View Event</span>
                      </Link>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
        <div className="popular-event">
          <div className="event-header">
            <h1>Popular Albums</h1> <p>View all</p>
          </div>
          <div className="popular-scroll">
            {upcomingEvent?.map((event) => (
              <EventBody key={event?._id} background={event?.event_thumbnail}>
                <div className="text">
                  <p>{event?.eventName}</p>
                  <Link href={`/album/${event?._id}`}>
                    <span>View Album</span>
                  </Link>
                </div>
              </EventBody>
            ))}
          </div>
        </div>
      </div>
    </DashboardStyle>
  );
};

export { Dashboard };
