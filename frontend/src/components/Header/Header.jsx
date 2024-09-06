import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Fuse from "fuse.js";
import "./Header.css";

// Sample data to search through
const data = [
  { id: 1, name: "BBQ Cheese Burger" },
  { id: 2, name: "BBQ Chicken Pizza" },
  { id: 3, name: "BBQ French Fries" },
  { id: 4, name: "BBQ Chicken Biryani" },
  { id: 5, name: "BBQ Noodles" },
  { id: 6, name: "BBQ Special" },
  { id: 7, name: "BBQ Macaroni" },
  { id: 8, name: "BBQ Kottu" },
  { id: 9, name: "BBQ Hot Dog" },
  { id: 10, name: "BBQ Sandwich" },
  { id: 11, name: "BBQ Lasagna" },
  { id: 12, name: "BBQ Taco" },
  { id: 13, name: "BBQ Nachos" },
  { id: 14, name: "BBQ Nuggets" },
  { id: 15, name: "BBQ Quesadilla" },
  { id: 16, name: "BBQ Bread" },
  { id: 17, name: "BBQ Salad" },
  { id: 18, name: "BBQ Pasta" },
  { id: 19, name: "BBQ Grill Chicken" },
];

const Header = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleViewGallery = () => {
    navigate("/gallery");
  };

  // Fuse.js search options
  const fuse = new Fuse(data, {
    keys: ["name"], // Fields to search
    threshold: 0.4, // Lower threshold for more accurate results
  });

  // Handle search logic
  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    setDropdownOpen(value.length > 0); // Open dropdown if there's input
    const searchResults = fuse.search(value);
    setResults(searchResults.map((result) => result.item));
  };

  return (
    <div className="header">
      <div className="header-contents">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            className="search-box"
            value={query}
            onChange={handleSearch}
            onFocus={() => setDropdownOpen(true)}
            onBlur={() => setTimeout(() => setDropdownOpen(false), 200)} // Delay to allow click events
          />
          <button className="search-button">Search</button>
          {dropdownOpen && results.length > 0 && (
            <div className="dropdown-container">
              <ul className="dropdown-list">
                {results.map((item) => (
                  <li key={item.id} className="dropdown-item">
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
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
