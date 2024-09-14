import React, { useState } from "react";
import "./Query.css";
import { assets } from "../../assets/assets";

const Query = () => {
  const [formData, setFormData] = useState({
    name: "",
    gmail: "",
    query: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Query submitted successfully!");
        setFormData({ name: "", gmail: "", query: "" });
      } else {
        alert("Failed to submit query.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting query.");
    }
  };

  return (
    <div className="form-container" id="Query">
      <h2 className="form-header">Submit Your Query</h2>

      <div className="form-content">
        <div className="form-left">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />

            <label htmlFor="gmail">Gmail</label>
            <input
              type="email"
              id="gmail"
              name="gmail"
              placeholder="Enter your Gmail"
              value={formData.gmail}
              onChange={handleChange}
            />

            <label htmlFor="query">Query</label>
            <textarea
              id="query"
              name="query"
              placeholder="Enter your query"
              value={formData.query}
              onChange={handleChange}
            ></textarea>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>

        <div className="form-right">
          <img
            src={assets.qeryf}
            alt="Gallery Image 1"
            className="query-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Query;
