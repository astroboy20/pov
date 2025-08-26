import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const Customize = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="px-4 md:px-[5%] flex flex-col lg:flex-row items-center w-full  gap-8 lg:gap-0"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col text-center lg:text-left gap-8 md:gap-[24px] w-full order-2 lg:order-1"
      >
        <h1 className="text-4xl md:text-5xl lg:text-[72px] font-bold leading-tight">
          Customizable <br className="hidden md:block" /> templates <br />
          made for you!
        </h1>
        <p className="text-[20px] md:text-xl lg:text-[28px] font-medium text-[#1d1465]">
          Elevate your capturing experience <br className="hidden md:block" />{" "}
          with personalized templates.
        </p>

        <Link
          href="/auth"
          className="rounded-[40px] text-lg md:text-xl lg:text-[28px] bg-[#1d1465] px-6 md:px-[30px] py-3 md:py-[10px] text-white w-fit mx-auto lg:mx-0 cursor-pointer hover:bg-transparent hover:border hover:border-[#1d1465] hover:text-[#1d1465] transition ease-in-out duration-500"
        >
          Customize
        </Link>
      </motion.div>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full lg:ml-auto order-1 lg:order-2"
      >
        <Image
          src="/images/phone1.jpeg"
          width={620}
          height={640}
          className="phone2 object-cover w-full h-auto max-w-md mx-auto lg:max-w-none rounded"
          alt="phone mockup showing customizable templates"
        />
      </motion.div>
    </motion.main>
  );
};

export { Customize };
