"use client";

import React, { useState, useEffect } from 'react';
import styles from './Slider.module.css';
import { openImageFullscreen } from "@/app/utils/openImageFullscreen";

const Slider = ({ slides = [], autoPlay = true, autoPlayInterval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Проверка на наличие slides
  if (!Array.isArray(slides) || slides.length === 0) {
    return <div className={styles.error}>No slides available</div>;
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (autoPlay && slides.length > 0) {
      const interval = setInterval(nextSlide, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval, slides.length]); // Добавили slides.length как зависимость

  console.log('Slides data:', slides); // Логируем данные для отладки

  return (
    <div className={styles.slider}>
      <div
        className={styles.slides}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id || slide.url} className={styles.slide}>
            {slide.url && (
              <img
                style={{ cursor: 'zoom-in', maxHeight: "800px"}}
                onClick={(e) => openImageFullscreen(e.currentTarget.src)}
                src={`${slide.url}`}
                alt={slide.alternativeText || 'Slide image'}
                className={styles.image}
              />
            )}
          </div>
        ))}
      </div>
      {slides.length > 1 && (
        <>
          <button className={`${styles.navButton} ${styles.prev}`} onClick={prevSlide}>
            &#10094;
          </button>
          <button className={`${styles.navButton} ${styles.next}`} onClick={nextSlide}>
            &#10095;
          </button>
          <div className={styles.dots}>
            {slides.map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Slider;