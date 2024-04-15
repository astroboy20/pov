import React, { useState } from "react";
import { FAQSContainer } from "./FAQ.style";
import { Data } from "./data";

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleExpansion = (index) => {
    // if (selectedQuestion === index) {
    //   setSelectedQuestion(null); // Deselect if already selected
    // } else {
    //   setSelectedQuestion(index); // Select if not selected
    // }
    setSelectedQuestion(index);
  };
  return (
    <FAQSContainer>
      <span>Frequently Asked Questions</span>
      <hr className="hr" />
      <div className="box">
        <div className="question-section">
          {Data.map((data, index) => (
            <div className="sub-box" key={data.id}>
              <div className="header" style={{border:selectedQuestion ===index ? "1px solid #000" : "none"}} onClick={() => toggleExpansion(index)}>
                <p>{data.title}</p>
              </div>
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
