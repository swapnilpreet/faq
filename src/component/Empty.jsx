import React from "react";
import { TbFaceIdError } from "react-icons/tb";


const Empty = () => {

  return (
    <>
    <div className="empty-main">
      <div className="empty">
        <TbFaceIdError size={185}  />
      </div>
      <p>No Question Available</p>
    </div>
    </>
  );
};

export default Empty;
