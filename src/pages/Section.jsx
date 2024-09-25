import React, { useState } from "react";
import "../App.css";

const Section = ({
  setQuestionType,
  filterAndSearchData,
  inpuvalue,
  questionType,
}) => {
  const [isActive, setIsActive] = useState(false);

  const changeQuestionType = (type) => {
    sessionStorage.setItem("questionType", type);
    setQuestionType(type);
    setIsActive(!isActive);
    filterAndSearchData(inpuvalue, type);
  };

  return (
    <div className="section">
      <div className="center">
        <i
          className={`icon ${questionType === "general" ? "active" : ""}`}
          onClick={() => changeQuestionType("general")}
        >
          General
        </i>
        <i
          className={`icon ${questionType === "build" ? "active" : ""}`}
          onClick={() => changeQuestionType("build")}
        >
          Build
        </i>

        <i
          className={`icon ${questionType === "promote" ? "active" : ""}`}
          onClick={() => changeQuestionType("promote")}
        >
          Promote
        </i>

        <i
          className={`icon ${questionType === "manage" ? "active" : ""}`}
          onClick={() => changeQuestionType("manage")}
        >
          Manage
        </i>

        <i
          className={`icon ${questionType === "integration" ? "active" : ""}`}
          onClick={() => changeQuestionType("integration")}
        >
          Integration
        </i>

        <i
          className={`icon ${questionType === "legal" ? "active" : ""}`}
          onClick={() => changeQuestionType("legal")}
        >
          Legal
        </i>
      </div>
    </div>
  );
};

export default Section;
