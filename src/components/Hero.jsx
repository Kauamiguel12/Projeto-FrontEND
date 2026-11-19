
import { useState } from 'react';
import './Hero.css';

const slides = [
  '/home-slide-1.jpeg',
  '/home-slide-2.jpeg',
  '/home-slide-3.jpeg',
  '/home-slide-4.jpeg',
  '/home-slide-5.jpeg',
  '/home-slide-6.jpeg',
  '/home-slide-7.jpeg',
  '/home-slide-8.jpeg',
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function previousSlide() {
    setCurrentSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  }

  function nextSlide() {
    setCurrentSlide((current) =>
      current === slides.length - 1 ? 0 : current + 1
    );
  }

  return (
    <section className="hero">
      <button
        className="hero-arrow"
        onClick={previousSlide}
        aria-label="Banner anterior"
      >
        ‹
      </button>

      <div className="hero-slide">
        <img
          src={slides[currentSlide]}
          alt={`Banner promocional ${currentSlide + 1}`}
        />
      </div>

      <button
        className="hero-arrow"
        onClick={nextSlide}
        aria-label="Próximo banner"
      >
        ›
      </button>

      <div className="hero-dots">
        {slides.map((slide, index) => (
          <button
            key={slide}
            className={currentSlide === index ? 'active' : ''}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Ir para banner ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;

