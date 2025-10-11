import { useState, useEffect } from "react";
import "./Gallery.css";

import gallery1 from "../../images/gallery1.jpg";
import gallery2 from "../../images/gallery2.jpg";
import gallery3 from "../../images/gallery3.jpg";
import gallery4 from "../../images/gallery4.jpg";

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredSlide, setHoveredSlide] = useState(null);

  const images = [
    {
      src: gallery1,
      alt: "Campus Life",
    },
    {
      src: gallery2,
      alt: "Teachers day",
    },
    {
      src: gallery3,
      alt: "Research Lab",
    },
    {
      src: gallery4,
      alt: "Graduation",
    },
  ];

  const totalSlides = images.length;

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const changeSlide = (direction) => {
    setCurrentSlide((prev) => (prev + direction + totalSlides) % totalSlides);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        changeSlide(-1);
      } else if (e.key === "ArrowRight") {
        changeSlide(1);
      } else if (e.key === " ") {
        e.preventDefault();
        setIsAutoPlaying((prev) => !prev);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="dynamic-gallery" id="gallery">
      <div className="gallery-container-wrapper">
        <div className="gallery-title">
          <h2 className="heading">Photo Gallery</h2>
          <div className="title-underline"></div>
        </div>

        <div
          className="gallery-viewport"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Previous Button */}
          <button
            className="gallery-nav prev-nav"
            onClick={() => changeSlide(-1)}
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Next Button */}
          <button
            className="gallery-nav next-nav"
            onClick={() => changeSlide(1)}
            aria-label="Next image"
          >
            ›
          </button>

          {/* Image Slider */}
          <div
            className="gallery-slider"
            style={{
              width: `${totalSlides * 100}%`,
              transform: `translateX(-${(currentSlide * 100) / totalSlides}%)`,
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="gallery-slide"
                style={{ width: `${100 / totalSlides}%` }}
                onMouseEnter={() => setHoveredSlide(index)}
                onMouseLeave={() => setHoveredSlide(null)}
              >
                <img src={image.src} alt={image.alt} className="slide-image" />
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="gallery-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`indicator ${
                index === currentSlide ? "indicator-active" : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
