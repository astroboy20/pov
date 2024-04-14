import React, { useState } from "react";
import { Data } from "./data";

const FAQ = () => {
  const [expansionStates, setExpansionStates] = useState(Data.map(() => false));

  const toggleExpansion = (index) => {
    setExpansionStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <FAQSContainer >
      <span>Frequently Asked Questions</span>
      <div className="box">
        {Data.map((data, index) => (
          <div className="sub-box" key={data.id}>
            <div className="header" onClick={() => toggleExpansion(index)}>
              <p>{data.title}</p>
              <span>
                {expansionStates[index] }
              </span>
            </div>
            {expansionStates[index] && (
              <p className={"content-show"}>{data.content}</p>
            )}
          </div>

        ))}
      </div>
    </FAQSContainer>
  );
};

export { FAQ };
