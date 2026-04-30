// components/FullWidthSlider.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/slider/slide1.png",
  "/slider/slide2.png",
  "/slider/slide3.png",
  "/slider/slide4.png",
  "/slider/slide5.png",
  "/slider/slide6.png",
  "/slider/slide7.JPG"
];

const AUTO_PLAY = 4500; // 4.5 сек

export default function FullWidthSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % images.length);
    }, AUTO_PLAY);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="wide-slider">
      <div className="wide-slider__track">
        {images.map((src, i) => (
          <div
            key={i}
            className={`wide-slider__slide ${
              i === current ? "active" : ""
            }`}
          >
            <Image
              src={src}
              alt={`Слайд ${i + 1}`}
              fill
              priority={i === 0}
              className="wide-slider__img"
            />
          </div>
        ))}
      </div>

      {/* Стрелки */}
      <button
        onClick={() => setCurrent((i) => (i - 1 + images.length) % images.length)}
        className="wide-slider__btn wide-slider__btn--prev"
        aria-label="Назад"
      >
        ←
      </button>
      <button
        onClick={() => setCurrent((i) => (i + 1) % images.length)}
        className="wide-slider__btn wide-slider__btn--next"
        aria-label="Вперёд"
      >
        →
      </button>

      {/* Точки */}
      <div className="wide-slider__dots">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`wide-slider__dot ${i === current ? "active" : ""}`}
            aria-label={`Слайд ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}