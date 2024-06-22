// components/Slider.js

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/modules";
import { SliderStyle } from "./Slider.style";
import Link from "next/link";

const images = [
  "/images/a.png",
  "/images/b.png",
  "/images/c.png",
  "/images/d.png",
  "/images/e.png",
  "/images/f.png",
];

const Slider = () => {
  return (
    <SliderStyle>
      <header>
        <h1>Create memories just by cliqing.</h1>
        <p>
          You are one cliq away from creating the best memories for your event.{" "}
       
          Experience the power of nostalgia reimagined with cliqpod's digital
          albums.
        </p>
      </header>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        // navigation
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 1000 }}
        loop={true}
        className="mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="image">
              <img src={src} alt={`Image ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="span">
        <Link href={"/auth"}>View all event cliqs</Link>
      </div>
    </SliderStyle>
  );
};

export { Slider };
