import { PurpleSpinner } from "@/components/Spinner/Spinner";
import { useState } from "react";
import { AlbumContainer } from "./Album.style";
import { FaArrowCircleLeft } from "react-icons/fa";
import { CustomText } from "@/components/CustomText";
import { useRouter } from "next/router";

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
        <FaArrowCircleLeft onClick={handleRoute} style={{ color: "white" }} fontSize={30} />{" "}
        <CustomText weight={"500"} type={"Htype"} variant={"h1-c"}>
          ALBUM
        </CustomText>
      </div>
      <div className="input">
        <div className="left">
          Filter effect
          <select
            className="custom-select"
            value={selectedOption}
            onChange={handleDropdownChange}
          >
            <option value="">Select...</option>
            <option value="option1">Filter effect</option>
            {/* <option value="option2">Option 2</option>
            <option value="option3">Option 3</option> */}
          </select>
        </div>
        <div className="right">
          Cliqs by:
          <select
            className="custom-select"
            value={selectedOption}
            onChange={handleDropdownChange}
          >
            <option value="">Select...</option>
            <option value="option1">All</option>
            {/* <option value="option2">Option 2</option>
            <option value="option3">Option 3</option> */}
          </select>
        </div>
      </div>
      {eventData ? (
        <div>
          <h2>Event Details</h2>
          {eventData.length > 0 ? (
            <div key={eventData[0].id}>
              <CustomText weight={"500"} type={"Htype"} variant={"h4"}>
                {eventData[0].message}
              </CustomText>

              {/* {eventData[0].uploadTime} */}
            </div>
          ) : (
            "No message available"
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
