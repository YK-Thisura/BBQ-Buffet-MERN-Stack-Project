import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-box" />
          <button className="search-button">Search</button>
        </div>
        <div className="menu-button-container">
          <button className="view-menu-button">View Gallery</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
