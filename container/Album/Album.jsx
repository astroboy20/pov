import { useEffect, useState, useCallback, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useSelector } from "react-redux";
import { PurpleSpinner } from "@/components/Spinner/Spinner";
import { AlbumContainer } from "./Album.style";
import { BackIcon } from "@/assets";
import useFetchItems from "@/hooks/useFetchItems";

const Album = ({ eventData }) => {
  const [currentImageIndices, setCurrentImageIndices] = useState({});
  const [event, setEvent] = useState(null);
  const router = useRouter();
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleRoute = () => {
    router.push("/event");
  };

  const handleNextImage = useCallback((inviteeId) => {
    setCurrentImageIndices((prev) => {
      const currentIndex = prev[inviteeId] || 0;
      const eventImages = eventData.find((event) => event._id === inviteeId)?.image || [];
      const nextIndex = (currentIndex + 1) % eventImages.length;
      return { ...prev, [inviteeId]: nextIndex };
    });
  }, [eventData]);

  const handlePrevImage = useCallback((inviteeId) => {
    setCurrentImageIndices((prev) => {
      const currentIndex = prev[inviteeId] || 0;
      const eventImages = eventData.find((event) => event._id === inviteeId)?.image || [];
      const prevIndex = (currentIndex - 1 + eventImages.length) % eventImages.length;
      return { ...prev, [inviteeId]: prevIndex };
    });
  }, [eventData]);

  useEffect(() => {
    if (Array.isArray(eventData)) {
      const initialIndices = eventData.reduce((acc, event) => {
        acc[event._id] = 0;
        return acc;
      }, {});
      setCurrentImageIndices(initialIndices);
    }
  }, [eventData]);

  const eventId = typeof window !== "undefined" ? localStorage.getItem("event-id") : null;
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

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (inviteeId) => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNextImage(inviteeId);
    }
    if (touchStartX.current - touchEndX.current < -50) {
      handlePrevImage(inviteeId);
    }
  };

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
        {eventData.map((event) => {
          const currentIndex = currentImageIndices[event._id] || 0;
          const eventImages = event.image || [];
          if (eventImages.length === 0) return null;

          return (
            <div key={event._id} className="invitee-section">
              <h1 style={{ fontSize: "24px", fontWeight: "500", margin: "20px 10px" }}>
                {event.inviteeName}
              </h1>
              <div
                className="image-carousel"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={() => handleTouchEnd(event._id)}
              >
                <div className="image-wrapper">
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
                  {eventImages.map((_, index) => (
                    <span
                      key={index}
                      className={`indicator ${index === currentIndex ? "active" : ""}`}
                      onClick={() =>
                        setCurrentImageIndices((prev) => ({
                          ...prev,
                          [event._id]: index,
                        }))
                      }
                    ></span>
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
