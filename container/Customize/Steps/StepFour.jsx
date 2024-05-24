import React, { useState } from "react";
import Image from "next/image";
import { Box, Button, Text } from "@chakra-ui/react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import useFetchItems from "@/hooks/useFetchItems";
import { toast } from "react-toastify";

const StepFour = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const accessToken = user ? user.token : "";
  const data = typeof window !== "undefined" && localStorage.getItem("data");
  const parsedData = data ? JSON.parse(data) : null;
  console.log(parsedData);
  const imageInfo =
    typeof window !== "undefined" && localStorage.getItem("image");
  const parsedInfo = imageInfo ? JSON.parse(imageInfo) : null;
  console.log(parsedInfo);
  const image =
    typeof window !== "undefined" && localStorage.getItem("event_image");

  const mergedData = { ...parsedData, image };
  console.log(mergedData);

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const eventResponse = await axios.post(
        "https://api-cliqpod.koyeb.app/create-event",
        {
          ...parsedData,
          image: image,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (eventResponse) {
        const userData = eventResponse.data;
        if (userData?.authorization_url) {
          router.push(userData.authorization_url);
          toast.success("Please proceed to payment!");
          setLoading(false);
        } else {
          toast.success("Event created successfully!");
          router.push("/success");
          setLoading(false);
        }
      }
    } catch (error) {
      setLoading(false);
      console.error("Error occurred:", error);
    }
  };

  const { data: priceData } = useFetchItems({
    url: `https://api-cliqpod.koyeb.app/price/${parsedData?.expectedGuests}`,
    token: accessToken,
  });

  // console.log(priceData?.price.price);

  return (
    <div className="final">
      {image && <Image src={image} width={90} height={160} alt="image" />}
      <div className="final-text">
        <h1>{parsedInfo?.filterName}</h1>
        <p>{parsedInfo?.info}</p>
        <span >
          #{priceData?.price?.price}
        </span>
        {/* <span>#{parsedData?.expectedGuests}</span> */}
        <Box
          onClick={handleSubmit}
          width="fit-content"
          color={"white"}
          background={"#1D1465"}
          padding={"8px 15px"}
          fontSize={"12px"}
          borderRadius={"4px"}
        >
          Pay now
        </Box>
      </div>
    </div>
  );
};

export { StepFour };
