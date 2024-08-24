import React, { useState } from "react";
import "./Feedback.css";
import { assets } from "../../assets/assets";

const Feedback = () => {
  const feedbacks = [
    {
      imgSrc: assets.cus9,
      alt: "cus1",
      name: "Oliver Johnson",
      description: "Great burger and very spicey, but the fries were soggy.",
      rating: "★★★★☆",
    },
    {
      imgSrc: assets.cus2,
      alt: "cus2",
      name: "Laural Lance",
      description: "Excellent steak juicy and tender.What an a experience!",
      rating: "★★★★★",
    },
    {
      imgSrc: assets.cus5,
      alt: "cus3",
      name: "Shevon Danial",
      description: "Sushi was bland and rice overcooked.But service is good",
      rating: "★★★☆☆",
    },
    {
      imgSrc: assets.cus7,
      alt: "cus4",
      name: "Maria Aleson",
      description: "Dessert was great, but the main course was average.",
      rating: "★★★★☆",
    },
    {
      imgSrc: assets.cus3,
      alt: "cus5",
      name: "Noah Robinson",
      description: "Amazing pasta, perfect blend of spices!",
      rating: "★★★★★",
    },
    {
      imgSrc: assets.cus6,
      alt: "cus6",
      name: "Sophia Anderson",
      description: "Pizza was underwhelming; crust too thin.",
      rating: "★★★☆☆",
    },
    {
      imgSrc: assets.cus4,
      alt: "cus7",
      name: "Emma Davis",
      description: "Outstanding vegetarian curry; full of flavor.",
      rating: "★★★☆☆",
    },
    {
      imgSrc: assets.cus8,
      alt: "cus8",
      name: "Jackson Scott",
      description: "Fresh grilled chicken salad; generous portion.",
      rating: "★★★★★",
    },
    {
      imgSrc: assets.cus1,
      alt: "cus9",
      name: "Logan Nelson",
      description: "Cozy atmosphere, but food was bland and cold.",
      rating: "★★★☆☆",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleFeedbacks = 5; // Number of feedbacks visible at a time

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? feedbacks.length - visibleFeedbacks : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === feedbacks.length - visibleFeedbacks ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="feedback-slider" id="feedback-slider">
      <button className="arrow left-arrow" onClick={handlePrevClick}>
        {"<"}
      </button>

      <div className="feedback-container">
        {/* Display a slice of feedbacks array based on the currentIndex */}
        {feedbacks
          .slice(currentIndex, currentIndex + visibleFeedbacks)
          .map((feedback, index) => (
            <div className="feedback-card" key={index}>
              <div className="customer-info">
                <img
                  src={feedback.imgSrc}
                  alt={feedback.alt}
                  className="avatar"
                />
                <h3>{feedback.name}</h3>
              </div>
              <p className="description">{feedback.description}</p>
              <div className="ratings">{feedback.rating}</div>
            </div>
          ))}
      </div>

      <button className="arrow right-arrow" onClick={handleNextClick}>
        {">"}
      </button>
    </div>
  );
};

export default Feedback;
