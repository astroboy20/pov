import { PurpleSpinner } from "@/components/Spinner/Spinner";
import { useState } from "react";
import { AlbumContainer } from "./Album.style";
import { FaArrowCircleLeft } from "react-icons/fa";
import { CustomText } from "@/components/CustomText";
import { useRouter } from "next/router";
import { Select } from "@chakra-ui/select";
import Image from "next/image";

const Album = ({ eventData }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
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
      {eventData ? (
        <div>
          <h2>Event Details</h2>
          {eventData.length > 0 ? (
            <div key={eventData.photo}>
              <CustomText weight={"500"} type={"Htype"} variant={"h4"}>
                {eventData[0].message}
              </CustomText>

              <div className="image">
                {eventData.map((event) => (
                  <div key={event.photo}>
                    <Image
                      width={100}
                      height={100}
                      src={event.photo}
                      alt="event photo"
                      className="image-image"
                    />
                  </div>
                ))}
              </div>
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
