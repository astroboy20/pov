import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const Memories = () => {
  return (
    <motion.main
      className="px-4 md:px-[5%] flex flex-col lg:flex-row items-center w-full gap-8 lg:gap-20 "
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <Image
          src="/images/phone2.jpeg"
          width={620}
          height={640}
          className="phone2 object-cover w-full h-auto max-w-md mx-auto lg:max-w-none rounded"
          alt="phone mockup showing app interface"
        />
      </motion.div>

      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex flex-col text-center lg:text-left gap-8 md:gap-[24px] w-full"
      >
        <h1 className="text-4xl md:text-5xl lg:text-[72px] font-bold leading-tight">
          Your Event
          <br className="hidden md:block" /> Memories;{" "}
          <br className="hidden md:block" /> Anywhere,{" "}
          <br className="hidden md:block" /> Anytime!
        </h1>

        <p className="text-[20px] md:text-xl lg:text-[28px] font-medium text-[#1d1465]">
          Experience the power of nostalgia <br />
          reimagined with cliqpod&apos;s digital albums.
        </p>

        <div className="flex w-fit mx-auto lg:mx-0 gap-4 justify-center lg:justify-start">
          <Link
            href="/auth"
            className="rounded-[40px] text-lg md:text-xl lg:text-[28px] bg-[#1d1465] px-6 md:px-[30px] py-3 md:py-[10px] text-white w-fit mx-auto lg:mx-0 cursor-pointer hover:bg-transparent hover:border hover:border-[#1d1465] hover:text-[#1d1465] transition ease-in-out duration-500"
          >
            Get Cliqpod
          </Link>
          <Link
            href="/auth"
            className="rounded-[40px] text-lg md:text-xl lg:text-[28px] bg-transparent px-6 md:px-[30px] py-3 md:py-[10px] text-[#1d1465] border-l border-r border-[#1d1465] w-fit mx-auto lg:mx-0 cursor-pointer hover:bg-[#1d1465] hover:text-white transition ease-in-out duration-500"
          >
            View Cliqs
          </Link>
        </div>
      </motion.div>
    </motion.main>
  );
};

export { Memories };
