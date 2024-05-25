import { PurpleSpinner } from "@/components/Spinner/Spinner";
import { useEffect, useState } from "react";
import { AlbumContainer } from "./Album.style";
import { CustomText } from "@/components/CustomText";
import { useRouter } from "next/router";
import Image from "next/image";
import { GalleryModal } from "@/components/Modal";
import { BackIcon, BackIconWhite, BlueBackIcon } from "@/assets";
import { useSelector } from "react-redux";
import useFetchItems from "@/hooks/useFetchItems";

const Album = ({ eventData }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentView, setCurrentView] = useState("all");
  const [event, setEvent] = useState([])

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setShowModal(true);
  };

  const router = useRouter();

  const handleRoute = () => {
    router.push("/event");
  };

  const handleToggleClick = (view) => {
    setCurrentView(view);
  };

  // Collect all images into a single array
  const allImages = eventData.reduce((acc, event) => {
    return acc.concat(event.image);
  }, []);

  const imagesWithNames = eventData.map((event) => (
    <div key={event._id} className="invitee-section">
      <h1 style={{ fontSize: "24px", fontWeight: "500", margin: "20px  10px" }}>
        {event.inviteeName}
      </h1>
      <div className="image">
        {event.image.map((image, index) => (
          <div key={index} className="image-wrapper">
            <Image
              width={1080}
              height={1920}
              src={image}
              alt="event photo"
              className="image-image"
              onClick={() => handleImageClick(image)}
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  ));

  const id = typeof window !== "undefined" && localStorage.getItem("id-route");
  const { user } = useSelector((state) => state.auth);
  const accessToken = user ? user.token : ""
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
          <BackIconWhite />
        </span>
        <h1>{event?.eventName}</h1>
        <span style={{ color: "white" }}>.</span>
      </div>

      {eventData ? (
        <div className="all-image">
          {eventData.length > 0 ? (
            <>
              {currentView === "all" ? (
                <div className="image">
                  {allImages.map((image, index) => (
                    <div key={index} className="image-wrapper">
                      <Image
                        width={1080}
                        height={1920}
                        src={image}
                        alt="event photo"
                        className="image-image"
                        onClick={() => handleImageClick(image)}
                        objectFit="cover"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="images-with-names">{imagesWithNames}</div>
              )}

              <GalleryModal
                show={showModal}
                onClose={() => {
                  setShowModal(false);
                }}
              >
                <div className="selected-image">
                  <Image
                    width={500}
                    height={500}
                    src={selectedImage}
                    alt="event photo"
                    objectFit="cover"
                  />
                </div>
              </GalleryModal>
            </>
          ) : (
            <>{eventData.message}</>
          )}
        </div>
      ) : (
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
