import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Box, Button, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useRouter } from "next/router"; // Correct import for useRouter
import useFetchItems from "@/hooks/useFetchItems";
import { toast } from "react-toastify";
import { EventSpinner } from "@/components/Spinner/Spinner";

const StepFour = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const accessToken = user ? user.token : "";
  const data = JSON.parse(
    typeof window !== "undefined" && localStorage.getItem("data")
  );
  const image =
    typeof window !== "undefined" && localStorage.getItem("event_image");

  const info = JSON.parse(
    typeof window !== "undefined" && localStorage.getItem("image")
  );
  const { data: priceData, isLoading } = useFetchItems({
    url: `https://api-cliqpod.koyeb.app/price/${data?.expectedGuests}`,
    token: accessToken,
  });

  const handleSubmit = async () => {
    try {
      setLoading(true);
  
      const eventResponse = await axios.post(
        "https://api-cliqpod.koyeb.app/create-event",
        {
          ...data,
          image: image,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
  
      console.log("Response:", eventResponse.data.data);
      
      if (eventResponse) {
        // Check if running in the browser environment
        if (typeof window !== "undefined") {
          // Safely access data and store it in localStorage
          const creatorId = eventResponse?.data?.data?._id;
          if (creatorId) {
            localStorage.setItem("creatorId", creatorId);
          }
        }
  
        const userData = eventResponse.data;
        if (userData?.authorization_url) {
          router.push(userData.authorization_url);
          toast.success("Please proceed to payment!");
        } else {
          toast.success("Event created successfully!");
          router.push("/success");
        }
      }
    } catch (error) {
      console.error("Error occurred:", error);
    } finally {
      setLoading(false);
    }
  };
  

  const price = priceData?.price?.price;
  const displayPrice = price === "free" ? "free" : `#${price}`;

  // if (isLoading) return <EventSpinner />;

  return (
    <div className="final">
      {image && <Image src={image} width={90} height={160} alt="Event Image" />}
      <div className="final-text">
        <h1>{data?.eventName}</h1>
        <p>{info?.info}</p>
        <span>{displayPrice}</span>
        <Box
          onClick={handleSubmit}
          width="fit-content"
          color={"white"}
          background={"#1D1465"}
          padding={"8px 15px"}
          fontSize={"12px"}
          borderRadius={"4px"}
        >
          {loading ? <Spinner /> : "Pay now"}
        </Box>
      </div>
    </div>
  );
};

export { StepFour };
