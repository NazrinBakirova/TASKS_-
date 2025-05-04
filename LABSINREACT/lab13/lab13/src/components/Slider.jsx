
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Slider.css"; 

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <img src={images[currentIndex]} alt="Slide" className="slider-image" />
        <button className="slider-btn left" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <button className="slider-btn right" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;
