import React from "react";
import "./Gallery.css";
import { assets } from "../../assets/assets";

const Gallery = () => {
  return (
    <div className="gallery-page">
      <div className="cover-image">
        <img src={assets.cover} alt="Cover" />
      </div>
      <h2>A Culinary Journey Through Every Dish</h2>
      <div className="gallery-grid">
        <div className="gallery-item">
          <img src={assets.gallery3} alt="Gallery Image 1" />
          <div className="caption">Copyright 2024 © BBQ Buffet.com</div>
        </div>
        <div className="gallery-item">
          <img src={assets.gallery6} alt="Gallery Image 2" />
          <div className="caption">Copyright 2024 © BBQ Buffet.com</div>
        </div>
        <div className="gallery-item">
          <img src={assets.gallery2} alt="Gallery Image 3" />
          <div className="caption">Copyright 2024 © BBQ Buffet.com</div>
        </div>
        <div className="gallery-item">
          <img src={assets.gallery4} alt="Gallery Image 2" />
          <div className="caption">Copyright 2024 © BBQ Buffet.com</div>
        </div>
        <div className="gallery-item">
          <img src={assets.gallery5} alt="Gallery Image 2" />
          <div className="caption">Copyright 2024 © BBQ Buffet.com</div>
        </div>
        <div className="gallery-item">
          <img src={assets.gallery1} alt="Gallery Image 2" />
          <div className="caption">Copyright 2024 © BBQ Buffet.com</div>
        </div>
        <div className="gallery-item">
          <img src={assets.gallery7} alt="Gallery Image 2" />
          <div className="caption">Copyright 2024 © BBQ Buffet.com</div>
        </div>
        <div className="gallery-item">
          <img src={assets.gallery8} alt="Gallery Image 2" />
          <div className="caption">Copyright 2024 © BBQ Buffet.com</div>
        </div>
        <div className="gallery-item">
          <img src={assets.gallery9} alt="Gallery Image 2" />
          <div className="caption">Copyright 2024 © BBQ Buffet.com</div>
        </div>
        <div className="gallery-item">
          <img src={assets.gallery10} alt="Gallery Image 2" />
          <div className="caption">Copyright 2024 © BBQ Buffet.com</div>
        </div>
        <div className="gallery-item">
          <img src={assets.gallery11} alt="Gallery Image 2" />
          <div className="caption">Copyright 2024 © BBQ Buffet.com</div>
        </div>
        <div className="gallery-item">
          <img src={assets.gallery12} alt="Gallery Image 2" />
          <div className="caption">Copyright 2024 © BBQ Buffet.com</div>
        </div>
        <div className="gallery-item">
          <img src={assets.gallery13} alt="Gallery Image 2" />
          <div className="caption">Copyright 2024 © BBQ Buffet.com</div>
        </div>
        <div className="gallery-item">
          <img src={assets.gallery14} alt="Gallery Image 2" />
          <div className="caption">Copyright 2024 © BBQ Buffet.com</div>
        </div>
        <div className="gallery-item">
          <img src={assets.gallery15} alt="Gallery Image 2" />
          <div className="caption">Copyright 2024 © BBQ Buffet.com</div>
        </div>
        <div className="gallery-item">
          <img src={assets.gallery16} alt="Gallery Image 2" />
          <div className="caption">Copyright 2024 © BBQ Buffet.com</div>
        </div>
        <div className="gallery-item">
          <img src={assets.gallery17} alt="Gallery Image 2" />
          <div className="caption">Copyright 2024 © BBQ Buffet.com</div>
        </div>
        <div className="gallery-item">
          <img src={assets.gallery18} alt="Gallery Image 2" />
          <div className="caption">Copyright 2024 © BBQ Buffet.com</div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
