import React from "react";
import "./Chef.css";
import { assets } from "../../assets/assets";

const Chef = () => {
  return (
    <div className="card">
      <div className="text-section">
        <h2 className="heading">The Artistry Behind Our Kitchen</h2>
        <p className="descriptor">
          {" "}
          Our chef is a culinary craftsman whose expertise transforms the finest
          ingredients into unforgettable gastronomic experiences. With a deep
          respect for tradition and a flair for innovation, every dish is a
          reflection of their dedication to excellence.
        </p>
        <br></br>
        <p className="descriptor">
          {" "}
          Each recipe is thoughtfully developed, balancing bold and subtle
          flavors to create dishes that not only satisfy the palate but also
          tell a story of the ingredients and the journey they’ve taken to your
          plate.
        </p>{" "}
        <br></br>
        <p className="descriptor">
          {" "}
          In our kitchen, creativity knows no bounds. Our chef's meticulous
          attention to detail ensures that every meal is a masterpiece, from the
          carefully curated flavors to the exquisite presentation that elevates
          dining into an art form.
        </p>
        <br></br>
        <p className="descriptor">
          {" "}
          From the vibrant colors to the intricate layers of taste, each dish is
          a testament to our commitment to excellence and an invitation to savor
          the artistry of our culinary creations
        </p>{" "}
      </div>
      <div className="image-section" id="chef">
        <img src={assets.chef1} alt="Image" className="image" />
      </div>
    </div>
  );
};

export default Chef;
