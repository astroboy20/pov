import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useSwipeable } from "react-swipeable";
import { PurpleSpinner } from "@/components/Spinner/Spinner";
import { AlbumContainer } from "./Album.style";
import { BackIcon } from "@/assets";
import useFetchItems from "@/hooks/useFetchItems";
import { GalleryModal } from "@/components/Modal";

const Album = ({ eventData }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [currentView, setCurrentView] = useState("all");
  const [event, setEvent] = useState([]);

  const router = useRouter();
  const handleRoute = () => {
    router.push("/event");
  };

  const handleToggleClick = (view) => {
    setCurrentView(view);
  };

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setShowModal(true);
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNextImage,
    onSwipedRight: handlePrevImage,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const allImages = Array.isArray(eventData)
    ? eventData.reduce((acc, event) => acc.concat(event?.image || []), [])
    : [];

  const imagesWithNames = Array.isArray(eventData)
    ? eventData.map((event) => (
        <div key={event?._id} className="invitee-section">
          <h1 style={{ fontSize: "24px", fontWeight: "500", margin: "20px 10px" }}>
            {event?.inviteeName}
          </h1>
          <div className="image">
            {event?.image?.map((image, index) => (
              <div key={index} className="image-wrapper">
                <Image
                  width={1920}
                  height={1080}
                  src={image}
                  alt="event photo"
                  className="image-image"
                  onClick={() => handleImageClick(allImages.indexOf(image))}
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>
      ))
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
        <>
          {Array.isArray(eventData) && eventData.length > 0 ? (
            <div className="all-image">
              {currentView === "all" ? (
                <div className="image">
                  {allImages?.map((image, index) => (
                    <div key={index} className="image-wrapper">
                      <Image
                        width={1920}
                        height={1080}
                        src={image}
                        alt="event photo"
                        className="image-image"
                        onClick={() => handleImageClick(index)}
                        objectFit="cover"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="images-with-names">{imagesWithNames}</div>
              )}

              <GalleryModal show={showModal} onClose={() => setShowModal(false)}>
                <div className="selected-image" {...handlers}>
                  <Image
                    width={1920}
                    height={1080}
                    src={allImages[selectedImageIndex]}
                    alt="event photo"
                    objectFit="contain"
                  />
                </div>
              </GalleryModal>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                textAlign: "center",
              }}
            >
              <p>{eventData?.message}</p>
            </div>
          )}
        </>
      )}

      <div className="toggle">
        <h1
          onClick={() => handleToggleClick("all")}
          className={currentView === "all" ? "active" : ""}
        >
          All Cliqs
        </h1>
        <h1
          onClick={() => handleToggleClick("my")}
          className={currentView === "my" ? "active" : ""}
        >
          My Cliqs
        </h1>
      </div>
    </AlbumContainer>
  );
};

export { Album };
