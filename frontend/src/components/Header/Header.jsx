import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const handleViewGallery = () => {
    navigate("/gallery");
  };

  return (
    <div className="header">
      <div className="header-contents">
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-box" />
          <button className="search-button">Search</button>
        </div>
        <div className="menu-button-container">
          <button className="view-menu-button" onClick={handleViewGallery}>
            View Gallery
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
