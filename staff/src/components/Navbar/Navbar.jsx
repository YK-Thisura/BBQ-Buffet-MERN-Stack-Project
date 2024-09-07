import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="" />
      <a href="http://localhost:5173/">
        <img className="profile" src={assets.profile_image} alt="Profile" />
      </a>
    </div>
  );
};

export default Navbar;
