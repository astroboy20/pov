import { PurpleSpinner } from "@/components/Spinner/Spinner";
import { useState } from "react";
import { AlbumContainer } from "./Album.style";
import { FaArrowCircleLeft } from "react-icons/fa";
import { CustomText } from "@/components/CustomText";
import { useRouter } from "next/router";
import { Select } from "@chakra-ui/select";
import Image from "next/image";
import { GalleryModal, Modal } from "@/components/Modal";

const Album = ({ eventData }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setShowModal(true);
  };

  const router = useRouter();

  const handleRoute = () => {
    router.push("/gallery");
  };

  return (
    <AlbumContainer>
      <div className="header">
        <FaArrowCircleLeft
          onClick={handleRoute}
          style={{ color: "white" }}
          fontSize={30}
        />{" "}
        <CustomText weight={"500"} type={"Htype"} variant={"h1-c"}>
          ALBUM
        </CustomText>
      </div>
      {/* <div className="input">
        <div className="left">
          Filter effect
          <select className="custom-select">
            <option value="">Filter menu</option>
          </select>
        </div>
        <div className="right">
          Cliqs by:
          <select className="custom-select">
            <option value="">All</option>
          </select>
        </div>
      </div> */}
      {eventData ? (
        <div className="all-image">
          {eventData.length > 0 ? (
            <div key={eventData.photo}>
              <CustomText weight={"500"} type={"Htype"} variant={"h4"}>
                {eventData[0].message}
                {/* {eventData[0].id} */}
                {/* {eventData[0].photos} */}
        
              </CustomText>

              <div className="image">
                {eventData.map((event) => (
                  <>
                    <div key={event.id}>
                      <Image
                        width={100}
                        height={100}
                        src={`${event.photos}`}
                        alt="event photo"
                        className="image-image"
                        onClick={() => handleImageClick(event.photos)}
                        objectFit="cover"
                        
                      />
                    </div>
                  </>
                ))}
              </div>

              <GalleryModal
                show={showModal}
                onClose={() => {
                  setShowModal(false);
                }}
              >
                <div className="selected-image">
                  <Image
                    width={350}
                    height={400}
                    src={selectedImage}
                    alt="event photo"
                    objectFit="cover"
                  />
                </div>
              </GalleryModal>
            </div>
          ) : (
            <>{eventData.message} </>
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
    </AlbumContainer>
  );
};

export { Album };
