import { useState } from "react";
import { Select, Input } from "@chakra-ui/react";
import { Button } from "@/components/Button";
import { PhotoData, RevealData } from "../Options/data";
import { useRouter } from "next/router";
import { BlueBackIcon, ImageIcon } from "@/assets";
import Image from "next/image";
import { CustomText } from "@/components/CustomText";
import axios from "axios";
import { Spinner } from "@/components/Spinner";
import { BlackSpinner } from "@/components/Spinner/Spinner";
import { toast } from "react-toastify";

const StepOne = ({
  step,
  data,
  setData,
  eventName,
  handleNext,
  handlePrev,
  prices
}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  console.log(selectedImage)

  const [loading, setLoading] = useState(false);
  const MAX_FILE_SIZE_MB = 5;
  const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

  const selectNewImage = () => {
    document.getElementById("selectFile").click();
  };

  const handleImageChange = async (event) => {
    setLoading(true);

    const file = event.target.files[0];
    if (file && file.size > MAX_FILE_SIZE_BYTES) {
      setSelectedImage(null);
      setData((prevData) => ({
        ...prevData,
        image: null,
      }));
      toast.warning("Please upload an image file smaller than 5MB.");
      setLoading(false);
      return;
    }

    if (file) {
      const imageURL = new FormData();
      imageURL.append("file", file);
      imageURL.append("upload_preset", "za8tsrje");

      try {
        const imageResponse = await axios.post(
          "https://api.cloudinary.com/v1_1/dm42ixhsz/image/upload",
          imageURL
        );
        const image = imageResponse.data.secure_url;
        setSelectedImage(image);
        setData((prevData) => ({
          ...prevData,
          event_thumbnail: image,

        }));
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error("Error uploading image. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleImageClick = () => {
    document.getElementById("selectFile").click();
  };

  const router = useRouter();
  const handleRoute = () => {
    router.push("/dashboard");
  };

  const isStepOneValid = () => {
    const { image, startDate, endDate, revealTime, photosPerPerson } = data;
    if (!image || !startDate || !revealTime || !photosPerPerson) {
      // toast.warning("Please fill out all the required fields");
      return false;
    }
    return true;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="header">
        <div className="header-head">
          <span onClick={step === 2 ? handlePrev : handleRoute}>
            <BlueBackIcon />
          </span>

          <h1>{eventName}</h1>

          <span style={{ color: "white" }}>.</span>
        </div>
        <div htmlFor="customFileInput" className="image-input">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            hidden
            id="selectFile"
          />
          {data.event_thumbnail ? (
            <div className="image">
              <Image
                src={selectedImage}
                alt="Selected"
                width={1920}
                height={1080}
                objectFit="cover"
                style={{
                  width: "50%",
                  height: "40vh",
                  margin: "2% 30%",
                }}
              />
              <button className="change-image" onClick={selectNewImage}>
                {loading ? <Spinner /> : "Change Image"}
              </button>
            </div>
          ) : (
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "16px",
                alignItems: "center",
                gap: "20px",
              }}
              className="icon-style"
              onClick={handleImageClick}
            >
              {loading ? (
                <BlackSpinner />
              ) : (
                <>
                  {" "}
                  <ImageIcon />{" "}
                  <CustomText weight={"400"} type={"Htype"} variant={"h2-b"}>
                    Add thumbnail/flyer of your event
                  </CustomText>
                </>
              )}
            </span>
          )}
        </div>
      </div>
      <div className="body">
        {" "}
        <Input
          value={data.eventName}
          onChange={handleChange}
          name="eventName"
          placeholder="Event Hashtag"
          size={"lg"}
        />
        <Select
          size="lg"
          value={data.mode}
          onChange={handleChange}
          name="mode"
          placeholder="Mode of Event"
        >
          <option value="Physical">Physical</option>
          <option value="Virtual">Virtual</option>
          <option value="Hybrid">Hybrid</option>
        </Select>
        <div className="input-container">
          <label htmlFor="event_date">Start Date</label>
          <Input
            type="datetime-local"
            size={"lg"}
            value={data.event_date}
            name="event_date"
            onChange={handleChange}
            id="event_date"
          />
        </div>
        <div className="input-container">
          <label htmlFor="endDate">End Date</label>
          <Input
            type="datetime-local"
            size={"lg"}
            value={data.endDate}
            name="endDate"
            onChange={handleChange}
            id="endDate"
          />
        </div>
        <Input
          value={data.location}
          onChange={handleChange}
          name="location"
          placeholder="Event Location"
          size={"lg"}
        />
        <Select
          value={data.expectedGuests}
          placeholder="Expected Guests"
          size={"lg"}
          name="expectedGuests"
          onChange={handleChange}
        >
          {prices.map((price) => (
            <option key={price._id} value={price._id}>
              {price.expectedGuest}
            </option>
          ))}
        </Select>
        <Select
          value={data.photosPerPerson}
          placeholder="How many cliqs per person ?"
          size={"lg"}
          name="photosPerPerson"
          onChange={handleChange}
        >
          {PhotoData.map((photo) => (
            <option key={photo.id} value={photo.value}>
              {photo.label}
            </option>
          ))}
        </Select>
        <Select
          value={data.revealTime}
          onChange={handleChange}
          name="revealTime"
          size={"lg"}
          placeholder="cliq per person ?"
        >
          {RevealData.map((reveal) => (
            <option key={reveal.id} value={reveal.value}>
              {reveal.label}
            </option>
          ))}
        </Select>
        <Button
          onClick={handleNext}
          type={"submit"}
          variant={"defaultButton"}
        //   disabled={!isStepOneValid()}
        >
          Continue
        </Button>
      </div>
    </>
  );
};

export { StepOne };
