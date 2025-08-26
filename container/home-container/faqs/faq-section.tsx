// import React, { useState } from "react";
// import { FAQSContainer } from "./FAQ.style";
// import { Data } from "./data";
// import { motion } from "framer-motion";

// const FAQ = () => {
//   const [selectedQuestion, setSelectedQuestion] = useState(null);

//   const toggleExpansion = (index) => {
//     setSelectedQuestion((prevIndex) => (prevIndex === index ? null : index));
//   };

//   return (
//     <FAQSContainer>
//       <span>Frequently Asked Questions</span>
//       <hr className="hr" />
//       <div className="box">
//         <div className="question-section">
//           {Data.map((data, index) => (
//             <div className="sub-box" key={data.id}>
//               <motion.div
//                 className="header"
//                 style={{
//                   border:
//                     selectedQuestion === index ? "1px solid #000" : "none",
//                 }}
//                 onClick={() => toggleExpansion(index)}
//                 whileHover={{ scale: 1.1 }} // Example hover animation
//                 transition={{ duration: 0.2 }}
//               >
//                 <p>{data.title}</p>
//               </motion.div>
//               <motion.div
//                 className="answer-section-mobile"
//                 style={{
//                   maxHeight: selectedQuestion === index ? "1000px" : "0",
//                   opacity: selectedQuestion === index ? 1 : 0,
//                 }}
//                 initial={{ opacity: 0, maxHeight: 0 }}
//                 animate={{ opacity: selectedQuestion === index ? 1 : 0, maxHeight: selectedQuestion === index ? "1000px" : 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <p className={"content-show"}>{data.content}</p>
//               </motion.div>
//             </div>
//           ))}
//         </div>
//         <div className="answer-section">
//           <span>Answers</span>
//           {selectedQuestion !== null && (
//             <p className={"content-show"}>{Data[selectedQuestion].content}</p>
//           )}
//         </div>
//       </div>
//     </FAQSContainer>
//   );
// };

// export { FAQ };

import React, { useState } from "react";
import { FAQSContainer } from "./FAQ.style";
import { Data } from "./data";
import { motion } from "motion/react";

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleExpansion = (index) => {
    setSelectedQuestion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <main className="mx-[5%] p-[3%] lg:p-[3%] flex flex-col gap-10 border-[3px] border-[#1d1465] rounded-[4px] lg:rounded-[28px] mb-[20%]">
      <h1 className="text-4xl md:text-5xl lg:text-[72px] font-bold leading-tight text-left">Frequently Asked Questions</h1>
      <hr className="border border-[#1d1465] my-[1px] mx-auto lg:my-[10px] w-full" />
      <div className="flex justify-between">
        <div className="w-full lg:w-[49%] rounded-[16px] p-[2%] bg-[#f2f3f4] flex flex-col gap-5 cursor-pointer">
          {Data.map((data, index) => (
            <div className="sub-box" key={data.id}>
              <motion.div
                className="text-black bg-[#f2f3f4] lg:bg-white p-[5%] lg:py-[3%] lg:px-[2%] rounded-[4px] lg:rounded-[16px] text-[18px] lg:text-[24px] font-medium"
                style={{
                  border:
                    selectedQuestion === index ? "1px solid #000" : "none",
                }}
                onClick={() => toggleExpansion(index)}
                whileHover={{ scale: 1.1 }} // Example hover animation
                transition={{ duration: 0.2 }}
              >
                <p>{data.title}</p>
              </motion.div>
              <motion.div
                className="flex lg:hidden text-[18px] font-medium "
                style={{
                  maxHeight: selectedQuestion === index ? "1000px" : "0",
                  opacity: selectedQuestion === index ? 1 : 0,
                }}
                initial={{ opacity: 0, maxHeight: 0 }}
                animate={{ opacity: selectedQuestion === index ? 1 : 0, maxHeight: selectedQuestion === index ? "1000px" : 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className={"content-show"}>{data.content}</p>
              </motion.div>
            </div>
          ))}
        </div>
        <div className="hidden lg:flex w-[49%] rounded-[16px] p-[2%] bg-[#1d14654d]">
          <h1 className="hidden lg:flex text-[24px] lg:text-[48px] font-bold" >Answers</h1>
          {selectedQuestion !== null && (
            <p className={"text-[24px] font-[400]"}>{Data[selectedQuestion].content}</p>
          )}
        </div>
      </div> 
    </main>
  );
};

export { FAQ };
