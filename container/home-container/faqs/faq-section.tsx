"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { Data } from "./data";

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  const toggleExpansion = (index: number) => {
    setSelectedQuestion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <motion.main
      className="mx-[5%] p-[3%] lg:p-[3%] flex flex-col gap-10 border-[3px] border-[#1d1465] rounded-[4px] lg:rounded-[28px] mb-[20%] lg:mb-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay:0.3 }}
      viewport={{ once: true }}
    >
      <h1 className="text-2xl lg:text-[72px] font-bold leading-tight text-left">
        Frequently Asked Questions
      </h1>
      <hr className="border border-[#1d1465] my-[1px] mx-auto lg:my-[10px] w-full" />

      <div className="flex justify-between gap-6 flex-colnmp md:flex-row">
        {/* Question Section */}
        <div className="flex flex-col gap-5 bg-[#f2f3f4] p-4 rounded-xl w-full md:w-1/2 cursor-pointer">
          {Data.map((data, index) => (
            <motion.div
              key={data.id}
              className="bg-white rounded-xl p-4 text-lg lg:text-[24px] font-medium shadow hover:shadow-md transition"
              onClick={() => toggleExpansion(index)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-black">{data.title}</p>

              <motion.div
                className="overflow-hidden md:hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: selectedQuestion === index ? 1 : 0,
                  height: selectedQuestion === index ? "auto" : 0,
                }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-[18px] font-normal bg-[#1D14654D] rounded-md p-3 mt-2 duration-500">
                  {data.content}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Answer Section */}
        <div className="hidden md:block bg-[#1D14654D] rounded-xl p-6 w-1/2">
          <span className="text-[48px] font-bold">Answers</span>
          {selectedQuestion !== null && (
            <motion.p
              key={selectedQuestion}
              className="mt-4 text-[24px] font-normal text-black leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {Data[selectedQuestion].content}
            </motion.p>
          )}
        </div>
      </div>
    </motion.main>
  );
};

export { FAQ };
