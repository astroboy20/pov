import React, { useState } from "react";
import { FAQSContainer } from "./FAQ.style";
import { Data } from "./data";
import { motion } from "framer-motion";

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleExpansion = (index) => {
    setSelectedQuestion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <FAQSContainer>
      <span>Frequently Asked Questions</span>
      <hr className="hr" />
      <div className="box">
        <div className="question-section">
          {Data.map((data, index) => (
            <div className="sub-box" key={data.id}>
              <motion.div
                className="header"
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
                className="answer-section-mobile"
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
        <div className="answer-section">
          <span>Answers</span>
          {selectedQuestion !== null && (
            <p className={"content-show"}>{Data[selectedQuestion].content}</p>
          )}
        </div>
      </div>
    </FAQSContainer>
  );
};

export { FAQ };
