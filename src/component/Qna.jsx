import React from "react";
import { RiAddCircleLine } from "react-icons/ri";
import { BiMinusCircle } from "react-icons/bi";


const Qna = ({ ele, showAnswer, handleQnA }) => {
  return (
    <div className="qna">
      {ele.question}
      <span onClick={handleQnA}>{showAnswer ?  <BiMinusCircle size={20} className="red"/> : <RiAddCircleLine size={20} className="green"/>}</span>
      {showAnswer && <hr />}
      {showAnswer && ele.answer}
    </div>
  );
};

export default Qna;
