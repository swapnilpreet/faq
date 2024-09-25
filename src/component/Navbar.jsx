import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { SlSocialTwitter } from "react-icons/sl";
import { FaBehance } from "react-icons/fa6";
import { FaRegChessQueen } from "react-icons/fa6";


const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="icons">
          <IoLogoInstagram size={25} />
          <SlSocialTwitter size={25} />
          <FaBehance size={25} />
        </div>
        <div className="logos-cen">
          <h1><FaRegChessQueen color="red"/> Sweel <FaRegChessQueen color="red"/></h1>
        </div>
        <div className="btn">
          <button>Buy</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
