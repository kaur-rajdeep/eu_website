import React, { useState, useEffect } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [images]);

  return (
    <div className="mt-16">
      <div className="lg:h-[80vh] h-[60vh] w-[100vw] relative overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`carousel-${index}`}
            className="h-full w-full object-cover absolute transition-transform duration-500"
            style={{
              left: `${
                ((index - currentIndex + images.length) % images.length) * 100
              }%`,
              transform: `translateX(0)`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
