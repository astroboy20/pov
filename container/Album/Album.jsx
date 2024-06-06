import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useSelector } from "react-redux";
import { PurpleSpinner } from "@/components/Spinner/Spinner";
import { AlbumContainer } from "./Album.style";
import { BackIcon } from "@/assets";
import useFetchItems from "@/hooks/useFetchItems";
import { useSwipeable } from "react-swipeable";

const Album = ({ eventData }) => {
  const [event, setEvent] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const handleRoute = () => {
    router.push("/event");
  };

  const eventId =
    typeof window !== "undefined" ? localStorage.getItem("event-id") : null;
  const { user } = useSelector((state) => state.auth);
  const accessToken = user ? user.token : "";
  const { data, isLoading } = useFetchItems({
    url: eventId ? `https://api-cliqpod.koyeb.app/event/${eventId}` : null,
    token: accessToken,
  });

  useEffect(() => {
    if (data && data.event) {
      setEvent(data.event);
    }
  }, [data]);

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentIndex((prevIndex) =>
        prevIndex < eventData.length - 1 ? prevIndex + 1 : prevIndex
      ),
    onSwipedRight: () =>
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      ),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  if (isLoading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PurpleSpinner />
      </div>
    );
  }

  if (!eventData.length) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>No images available</h1>
      </div>
    );
  }

  return (
    <AlbumContainer background={event?.event_thumbnail}>
      <div className="header">
        <span onClick={handleRoute}>
          <BackIcon />
        </span>
        <h1>{event?.eventName}</h1>
        <span style={{ color: "white" }}>.</span>
      </div>

      <div className="images-with-names">
        {eventData.map((event, index) => {
          const eventImages = event?.image;

          return (
            <div key={event._id} className="invitee-section">
              <h1
                style={{
                  fontSize: "24px",
                  fontWeight: "500",
                  margin: "20px 10px",
                }}
              >
                {event.inviteeName}
              </h1>
              <div className="image-carousel">
                <div {...handlers} className="image-wrapper">
                  <Image
                    width={1080}
                    height={1920}
                    src={eventImages[currentIndex]}
                    alt="event photo"
                    className="image-image"
                    objectFit="cover"
                  />
                </div>
                <div className="carousel-indicators">
                  {eventImages.map((_, idx) => (
                    <div
                      key={idx}
                      className={`indicator ${
                        idx === currentIndex ? "active" : ""
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </AlbumContainer>
  );
};

export { Album };
