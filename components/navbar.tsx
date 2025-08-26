"use client";
import { useEffect, useState } from "react";
import { Logo } from "@/assets";
import Link from "next/link";
import { motion } from "motion/react";

const buttonVariants = {
  hover: {
    scale: 1.05,
    backgroundColor: "#ffffff",
    color: "#1D1465",
    // borderLeft: "2px solid #1D1465",
    // borderRight: "2px solid #1D1465",
    transition: { duration: 0.3 },
  },
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const scrollToSection = (sectionId: string) => {
  //   document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
      className={`px-[5%] py-[2%]  sticky top-0 z-50 transition-shadow ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md lg:border-b"
          : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center">
        <Logo />
        <div className="flex items-center gap-5 text-[20px] font-medium">
          <Link href="/auth" className="hidden lg:flex text-[#1D1465]">
            Login
          </Link>
          <motion.div variants={buttonVariants} whileHover="hover">
            <Link
              href="/auth"
              className="rounded-[40px] bg-[#1D1465] px-[15px] lg:px-[30px] py-[10px] text-white text-sm lg:text-[16px]"
            >
              Get started
            </Link>
          </motion.div>
        </div>
      </nav>
    </motion.header>
  );
};

export { Navbar };
