// src/Slider.js
import React, { useState,useRef } from 'react';
import './Slider.css'; 

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderScroll = useRef(null)

  const images = [
    'https://m.media-amazon.com/images/I/813dNK7+jmL._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/716l31Ldo5L._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/71lUy3nkclL._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/71rcXJRMxZL._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/81FClXF4G1L._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/71Sdn4uBS6L._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/61VB1V97lAL._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/81bnrrd4x8L._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/61V-ZcQ961L._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/812-KF6pMEL._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/614Uxvp2vnL._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/71NdBUOU6WL._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/81L6d9RCiuL._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/81bE73g-+fL._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/712tp2wmwDL._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/719dMi3rcUL._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/81vUXRarNKL._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/71aen0IthOL._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/719M2nCBjNL._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/61Xm0MrGWPL._AC_SY200_.jpg'
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 3 ? prevIndex : prevIndex + 1,
     
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };
  
  return (  
    <div className="slider-container">
      <span className='slider-title'>
            Up to 80% off | New arrivals from Indian artisans
      </span>
      <span className='see-more'>
        See all offers
      </span>
        <button className="nav-button prev" onClick={goToPrev}>
          &#10094;
        </button>
        <div className="slider">
          <div
            className="slider-wrapper"
            style={{transform: `translateX(${-currentIndex*65}rem)`}}
            ref={sliderScroll}
          >
            {images.map((image, index) => (
              <div className="slide" key={index}>
                <img src={image} alt={`Slide ${index}`} />
                
              </div>
            ))}
          </div>
        </div>
        <button className="nav-button next" onClick={goToNext}>
          &#10095;
        </button>
    </div>
      
  );
};

export default Slider;
