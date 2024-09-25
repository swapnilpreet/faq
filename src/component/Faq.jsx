import React, { useState } from "react";
import Qna from "./Qna";
import Empty from "./Empty";

const Faq = ({ data }) => {
  const [showAnswer, setshowAnswer] = useState(-1);

  const handleQnA = (index) => {
    setshowAnswer((prevIndex) => {
      if (prevIndex === index) {
        return -1;
      }
      return index;
    });
  };

  return (
    <div className="faqs">
      <div className="faqs-div">
      {data?.length === 0 ? <Empty/> : data?.map((ele, index) => {
        return (
          <Qna
            handleQnA={() => handleQnA(index)}
            ele={ele}
            key={index}
            showAnswer={index===showAnswer}
          />
        );
      })}
      </div>
    </div>
  );
};

export default Faq;
