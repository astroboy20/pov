import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useSwipeable } from "react-swipeable";
import { PurpleSpinner } from "@/components/Spinner/Spinner";
import { AlbumContainer } from "./Album.style";
import { BackIcon } from "@/assets";
import useFetchItems from "@/hooks/useFetchItems";

const Album = ({ eventData }) => {
  const [currentImageIndices, setCurrentImageIndices] = useState({});
  const [event, setEvent] = useState([]);
  const router = useRouter();

  const handleRoute = () => {
    router.push("/event");
  };

  const handleNextImage = (inviteeId) => {
    setCurrentImageIndices((prev) => ({
      ...prev,
      [inviteeId]: (prev[inviteeId] + 1) % (eventData.find(event => event._id === inviteeId)?.image.length || 1),
    }));
  };

  const handlePrevImage = (inviteeId) => {
    setCurrentImageIndices((prev) => ({
      ...prev,
      [inviteeId]: (prev[inviteeId] - 1 + (eventData.find(event => event._id === inviteeId)?.image.length || 1)) % (eventData.find(event => event._id === inviteeId)?.image.length || 1),
    }));
  };

  const createSwipeHandlers = (inviteeId) => useSwipeable({
    onSwipedLeft: () => handleNextImage(inviteeId),
    onSwipedRight: () => handlePrevImage(inviteeId),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const imagesWithNames = Array.isArray(eventData)
    ? eventData.map((event) => {
        const currentIndex = currentImageIndices[event?._id] || 0;
        const imageCount = event?.image?.length || 1;
        return (
          <div key={event?._id} className="invitee-section">
            <h1 style={{ fontSize: "24px", fontWeight: "500", margin: "20px 10px" }}>
              {event?.inviteeName}
            </h1>
            <div className="image-carousel">
              <div {...createSwipeHandlers(event?._id)} className="image-wrapper">
                <Image
                  width={1080}
                  height={1920}
                  src={event?.image[currentIndex]}
                  alt="event photo"
                  className="image-image"
                  objectFit="cover"
                />
              </div>
              <div className="carousel-indicators">
                {event?.image?.map((_, index) => (
                  <span
                    key={index}
                    className={`indicator ${index === currentIndex ? "active" : ""}`}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        );
      })
    : [];

  const id = typeof window !== "undefined" && localStorage.getItem("id-route");
  const { user } = useSelector((state) => state.auth);
  const accessToken = user ? user.token : "";
  const { data, isLoading } = useFetchItems({
    url: `https://api-cliqpod.koyeb.app/event/${id}`,
    token: accessToken,
  });

  useEffect(() => {
    if (data) {
      setEvent(data.event);
    }
  }, [data]);

  return (
    <AlbumContainer background={event?.event_thumbnail}>
      <div className="header">
        <span onClick={handleRoute}>
          <BackIcon />
        </span>
        <h1>{event?.eventName}</h1>
        <span style={{ color: "white" }}>.</span>
      </div>

      {isLoading ? (
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
      ) : (
        <div className="images-with-names">
          {imagesWithNames}
        </div>
      )}
    </AlbumContainer>
  );
};

export { Album };
