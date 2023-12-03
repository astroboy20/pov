import React, { useState } from "react";
import { GalleryStyle } from "../Dashboard.style";
import { CiCalendarDate } from "react-icons/ci";
import { FaRegHourglass } from "react-icons/fa";
import { IoIosColorFilter } from "react-icons/io";
import { CiCamera } from "react-icons/ci";
import { CiUnlock } from "react-icons/ci";
import { CustomText } from "@/components/CustomText";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
const Gallery = () => {
  const [date, setDate] = useState(null);
  const handleDateChange = (newDate) => {
    const formattedDate = newDate;
    setDate(formattedDate);
  };

  return (
    <>
      <GalleryStyle>
        <div className="header">
          <div className="header-head"></div>
        </div>
        <div className="body">
          <div className="item">
            <CiCalendarDate />{" "}
            <CustomText weight={"500"} type={"Htype"} variant={"h5"}>
              Ending
            </CustomText>{" "}
            <DateTimePicker
              label="Basic date time picker"
              value={date}
              onChange={(newDate) => handleDateChange(newDate)}
            />
            <div>
              {date && (
                <CustomText weight={"500"} type={"Htype"} variant={"h5"}>
                   {JSON.stringify(date?.$d)}
                   
                </CustomText>
              )}
            </div>
          </div>

          <div className="item">
            <FaRegHourglass />{" "}
            <CustomText weight={"500"} type={"Htype"} variant={"h5"}>
              Reveal Photo
            </CustomText>{" "}
          </div>
          <div className="item">
            <IoIosColorFilter />{" "}
            <CustomText weight={"500"} type={"Htype"} variant={"h5"}>
              Disposable film
            </CustomText>{" "}
          </div>
          <div className="item">
            <CiCamera />{" "}
            <CustomText weight={"500"} type={"Htype"} variant={"h5"}>
              Photo per person
            </CustomText>{" "}
          </div>
          <div className="item">
            <CiUnlock />{" "}
            <CustomText weight={"500"} type={"Htype"} variant={"h5"}>
              Guest can view gallery
            </CustomText>{" "}
          </div>
        </div>
      </GalleryStyle>
    </>
  );
};

export default Gallery;
