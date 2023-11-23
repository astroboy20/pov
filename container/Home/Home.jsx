import { useState, useEffect } from "react";
import { Homestyle } from "./Home.style";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Button } from "@/components/Button";
import { useRouter } from "next/router";
import Image from "next/image";
import { Spinner } from "@/components/Spinner";
import {useSelector,useDispatch} from "react-redux"
import { logout,reset } from "@/feature/slices/authSlice";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch()
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleRoute = () => {
    router.push("/login");
  };
  
  return (
    <>
      {loading ? (
        <div style={{ color: "white" }}>POV</div>
      ) : (
        <Homestyle>
          <>
            <Image height={50} width={50} alt="" src={"/images/logo.svg"}/>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image
                  src={"/images/namecheap.jpg"}
                  width={100}
                  height={"100"}
                  alt="."
                />
              </SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
            </Swiper>
          </>
             
          <Button onClick={handleRoute} type="submit" variant="defaultButton">
          Get Started
          </Button>
         
        </Homestyle>
      )}
    </>
  );
};

export { HomePage };
