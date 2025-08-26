/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "motion/react";
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
    <motion.main
      className="flex flex-col gap-8 lg:gap-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col gap-[5px] text-center "
      >
        <h1 className="text-4xl md:text-5xl lg:text-[72px] font-bold leading-tight ">
          Create memories <br className="block md:hidden" /> just by cliqing.
        </h1>
        <p className="text-[20px] md:text-xl lg:text-[28px] font-medium w-[90%] md:w-full lg:w-[60%] m-auto">
          You are one cliq away from creating the best memories for your event.{" "}
          Experience the power of nostalgia reimagined with cliqpod&apos;s
          digital albums.
        </p>
      </motion.header>

      {/* Swiper */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="lg:mx-[5%]"
      >
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          className="mySwiper w-full "
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="p-4 flex justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img
                  src={src}
                  alt={`Image ${index + 1}`}
                  className=" object-cover w-full"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Link
          href="/auth"
          className="rounded-[40px] text-lg md:text-xl lg:text-[28px] bg-[#1d1465] px-8 py-4 text-white cursor-pointer hover:bg-transparent hover:border hover:border-[#1d1465] hover:text-[#1d1465] transition ease-in-out duration-500"
        >
          View all event cliqs
        </Link>
      </motion.div>
    </motion.main>
  );
};

export { Slider };
