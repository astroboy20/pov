import React, { useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/router";
import { AlbumContainer } from "./Album.style";
import { CustomText } from "@/components/CustomText";
import { Modal } from "@/components/Modal";
import { PurpleSpinner } from "@/components/Spinner/Spinner"; // Ensure Spinner import is correctly referenced

const Album = ({ eventData }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const router = useRouter();

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setShowModal(true);
  };

  const handleRoute = () => {
    router.push("/gallery");
  };

  return (
    <AlbumContainer>
      {/* Header */}
      <div className="header">
        <FaArrowCircleLeft
          onClick={handleRoute}
          style={{ color: "white" }}
          fontSize={30}
        />
        <CustomText weight={"500"} type={"Htype"} variant={"h1-c"}>
          ALBUM
        </CustomText>
      </div>

      {/* Filter Options */}
      <div className="input">
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
      </div>

      <div className="all-image">
        {eventData ? (
          eventData.photos && eventData.photos.length > 0 ? (
            eventData.photos.map((photo) => (
                <Image
                key={photo}
                  width={100}
                  height={100}
                  src={photo}
                  alt={`event photo `}
                  className="image-image"
                  onClick={() => handleImageClick(photo)}
                  objectFit="cover"
                />
            ))
          ) : (
            <div>{eventData.message}</div>
          )
        ) : (
          <div>
            <PurpleSpinner />
          </div>
        )}
      </div>

      {/* Modal for Selected Image */}
      <Modal
        show={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <div className="selected-image">
          <Image
            width={300}
            height={300}
            src={selectedImage}
            alt="event photo"
            objectFit="cover"
          />
        </div>
      </Modal>
    </AlbumContainer>
  );
};

export { Album };
