import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useSelector } from "react-redux";
import { cloudinaryLoader, PurpleSpinner } from "@/components/Spinner/Spinner";
import { AlbumContainer } from "./Album.style";
import { BackIcon } from "@/assets";
import useFetchItems from "@/hooks/useFetchItems";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Album = ({ eventData }) => {
  const [event, setEvent] = useState(null);
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
    <AlbumContainer>
      <div className="header">
        <span onClick={handleRoute}>
          <BackIcon />
        </span>
        <h1>{event?.eventName}</h1>
        <span style={{ color: "white" }}>.</span>
      </div>

      {!eventData?.length ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "6%",
          }}
        >
          <h1>{eventData?.message}</h1>
        </div>
      ) : (
        <div className="images-with-names">
          {eventData?.map((event) => (
            <div key={event._id} className="invitee-section">
              <h1
                style={{
                  fontSize: "24px",
                  fontWeight: "500",
                  margin: "20px 10px",
                }}
              >
                {event?.inviteeName}
              </h1>
              <Swiper
                autoHeight={true}
                spaceBetween={10}
                slidesPerView={1}
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="swiper-container"
              >
                {event?.image.map((img, idx) => (
                  <SwiperSlide key={idx}>
                 
                    <Image
                      width={1080}
                      height={1920}
                      src={img}
                      alt="event photo"
                      className="image-image"
                      objectFit="cover"
                      layout="responsive"
                      quality={100}
                      loader={cloudinaryLoader}
                    />
                  
                    
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ))}
        </div>
      )}
    </AlbumContainer>
  );
};

export { Album };
