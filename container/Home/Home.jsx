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
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "@/feature/slices/authSlice";
import { CustomText } from "@/components/CustomText";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch();
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
      <Homestyle>
        <>
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
              <div className="span">
                <div>
                  <CustomText weight={"500"} type={"Htype"} variant={"h2"}>
                  Welcome to Cliqpod moments and memories captured with digital backdrop.
                  </CustomText>
                  {/* <CustomText weight={"500"} type={"Htype"} variant={"h4"}>
                 
                  </CustomText> */}
                </div>

                <Image
                  src={"/images/logo.png"}
                  width={100}
                  height={100}
                  alt="."
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="span">
                <div>
                  <CustomText weight={"500"} type={"Htype"} variant={"h2"}>
                    Event guests scan a QR code to access the digital backdrop for your event.
                  </CustomText>
                  {/* <CustomText weight={"500"} type={"Htype"} variant={"h4"}>
                    
                  </CustomText> */}
                </div>

                <Image
                  src={"/images/QR.png"}
                  width={100}
                  height={100}
                  alt="."
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="span">
                <div>
                  <CustomText weight={"500"} type={"Htype"} variant={"h2"}>
                   A digital album of your event from all cliqs taken with your digital backdrop will be avialable after the event.
                  </CustomText>
                  {/* <CustomText weight={"500"} type={"Htype"} variant={"h4"}>
                    Guest access the camera with one click and can take pictures
                    right away
                  </CustomText> */}
                </div>

                <Image src={"/images/2.png"} width={100} height={100} alt="." />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="span">
                <div>
                  <CustomText weight={"500"} type={"Htype"} variant={"h2"}>
                    Your event gallery will reveal after a set delay
                  </CustomText>
                  <CustomText weight={"500"} type={"Htype"} variant={"h4"}>
                    The photos will reveal after adelay you choose. All guest
                    can view photos
                  </CustomText>
                </div>

                <Image
                  src={"/images/1.png"}
                  width={100}
                  height={6600}
                  alt="."
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </>

        <Button onClick={handleRoute} type="submit" variant="defaultButton">
          Get Started
        </Button>
      </Homestyle>
    </>
  );
};

export { HomePage };
