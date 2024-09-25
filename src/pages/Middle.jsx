import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Faq from "../component/Faq";
import "../App.css";

const Middle = ({setinpuvalue,storedData,filterAndSearchData,setQuestionType,questionType}) => {
  const [value, setvalue] = useState('');


  const handleInputChange = (event) => {
    const value = event.target.value;
    setvalue(value);
    setinpuvalue(value);
    console.log("balance",value);
    if(value === ""){
      filterAndSearchData(value,questionType);
    }
  };

  useEffect(() => {
    const questionType=sessionStorage.getItem('questionType');
    setQuestionType(questionType);
    filterAndSearchData(value,questionType);
  }, [])
  

  
  return (
    <div className="middle">
      <div className="headings">
        <h2>FAQ's</h2>
        <p>
          In our FAQ section, you can find all the information you're looking
          for.
        </p>
        <p> we're happy to help.</p>

        <div className="input-btn">
          <input type="text" 
          value={value}  onChange={handleInputChange}  placeholder="Search for topics" />
          <span>
            <FaArrowRight onClick={()=>filterAndSearchData(value,questionType)}/>
          </span>
        </div>
      </div>

      <div className="middle-tabs">
        <div>General Questions</div>
        <div className="tabs-flex">
        </div>
      </div>

      <div className="render-faq">
       
      <Faq data={storedData} />
      </div>
    </div>
  );
};

export default Middle;
