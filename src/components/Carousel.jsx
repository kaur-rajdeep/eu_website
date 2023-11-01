import React, { useState, useEffect } from 'react';

const images = [
  'https://eternaluniversity.edu.in/images/activity/AGY01657703203EducationalVisit.jpg',
  'https://eternaluniversity.edu.in/images/activity/AGY11657703203EducationalVisit.jpg',
  'https://eternaluniversity.edu.in/images/event/MI1656487146Conference.jpg',
  'https://eternaluniversity.edu.in/images/activity/AMI1660805268CollegeActivity.jpg',
  'https://eternaluniversity.edu.in/images/event/MI1660799332Camp.jpg'
];

const Contact = () => {
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
              left: `${(index - currentIndex + images.length) % images.length * 100}%`,
              transform: `translateX(0)`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Contact;










// import React, { useState, useEffect } from 'react';

// const images = [
//   'https://images.shiksha.com/mediadata/images/1623762631php42TSYI.jpeg',
//   'https://eternaluniversity.edu.in/images/nss/1.jpg',
//   'https://eternaluniversity.edu.in/images/event/MI1656487146Conference.jpg',
//   'https://eternaluniversity.edu.in/images/activity/AMI1660805268CollegeActivity.jpg',
//   'https://eternaluniversity.edu.in/images/event/MI1660799332Camp.jpg'
// ];

// const Contact = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Change image every 3 seconds (3000 milliseconds)

//     return () => {
//       clearInterval(interval); // Cleanup interval on component unmount
//     };
//   }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

//   return (
//     <div className="mt-16">
//       <div className='h-[60vh] w-[100vw] relative overflow-hidden'>
//         <img src={images[currentIndex]} alt={`carousel-${currentIndex}`} className='h-full w-full object-cover' />
//       </div>
//     </div>
//   );
// };

// export default Contact;




// import React, { useState } from 'react';

// const Carousel = () => {
//   const images = [
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjqQrGZkzvdv3MnweddmBUYVAN61Mhf3p15g&usqp=CAU',
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS1gXkQ28u7NJvujlJUZKHJgSrtL06ZrbGkw&usqp=CAU',
//     'data:image/jpeg;base64,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',
//     // Add more image paths as needed
//   ];

//   const [currentImage, setCurrentImage] = useState(0);

//   const nextSlide = () => {
//     setCurrentImage((currentImage + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentImage((currentImage - 1 + images.length) % images.length);
//   };

//   return (
//     <div className="relative">
//       <div className="w-full h-96">
//         <img
//           src={images[currentImage]}
//           alt="Carousel Item"
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
//         <button onClick={prevSlide} className="p-2 bg-gray-800 text-white">
//           Previous
//         </button>
//       </div>
//       <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
//         <button onClick={nextSlide} className="p-2 bg-gray-800 text-white">
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Carousel;
