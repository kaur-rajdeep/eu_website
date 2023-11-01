import React, { useState, useEffect } from 'react';

const images = [
  'https://eternaluniversity.edu.in/images/activity/AGY01657703203EducationalVisit.jpg',
  'https://eternaluniversity.edu.in/images/activity/AGY11657703203EducationalVisit.jpg',
  'https://eternaluniversity.edu.in/images/event/MI1656487146Conference.jpg',
  'https://eternaluniversity.edu.in/images/activity/AMI1660805268CollegeActivity.jpg',
  'https://eternaluniversity.edu.in/images/event/MI1660799332Camp.jpg'
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds (3000 milliseconds)

    return () => {
      clearInterval(interval); // Cleanup interval on component unmount
    };
  }, []);

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
