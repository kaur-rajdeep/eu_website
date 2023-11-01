/*import React, { useState } from 'react';
import contact from 'contact'
const images = [
  'https://images.shiksha.com/mediadata/images/1623762631php42TSYI.jpeg',
  'https://www.google.com/url?sa=i&url=https%3A%2F%2Feternaluniversity.edu.in%2FEvents&psig=AOvVaw3JpMSI9pf2SfCLrx6f8oYj&ust=1698894425117000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLj9wpDpoYIDFQAAAAAdAAAAABAO.jpg',
  'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.collegebatch.com%2F10343-eternal-university-contact-number-address-map-sirmaur&psig=AOvVaw3JpMSI9pf2SfCLrx6f8oYj&ust=1698894425117000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLj9wpDpoYIDFQAAAAAdAAAAABAf.jpg',
  'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcollegedunia.com%2Funiversity%2F25554-eternal-university-eu-sirmaur%2Fgallery&psig=AOvVaw3JpMSI9pf2SfCLrx6f8oYj&ust=1698894425117000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLj9wpDpoYIDFQAAAAAdAAAAABAl.jpg',
];

const Contact = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="mt-16">
      <div className='h-[60vh] w-[100vw] relative overflow-hidden'>
        <img src={images[currentIndex]} alt={`carousel-${currentIndex}`} className='h-full w-full object-cover' />
        <button onClick={prevImage} className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded'>
          Previous
        </button>
        <button onClick={nextImage} className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded'>
          Next
        </button>
      </div>
    </div>
  );
};

export default Contact;*/

import React, { useState, useEffect } from 'react';

const images = [
  'https://images.shiksha.com/mediadata/images/1623762631php42TSYI.jpeg',
  'https://eternaluniversity.edu.in/images/nss/1.jpg',
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
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  return (
    <div className="mt-16">
      <div className='h-[60vh] w-[100vw] relative overflow-hidden'>
        <img src={images[currentIndex]} alt={`carousel-${currentIndex}`} className='h-full w-full object-cover' />
      </div>

      <div className="grid place-items-center">
        <div className="color shadow-md backdrop-blur-lg mt-[-2px] z-10 border-2 m-0 w-[100%] ">
          <div className="md:flex items-center justify-center py-4 md:px-10 px-7"> 
            <div className="color p-6 rounded-md text-white text-center">
              <h1 className="font-bold text-4xl sm:text-xl md:text-2xl">AKAL COLLEGE OF ENGINEERING AND TECHNOLOGY</h1> 
              <h2 className="font-bold mt-6 font-2xl">Kalgidhar Trust is a premier organization of universal brotherhood, was the main force behind the mission of “Removal of Economic Backwardness through Technology”.</h2> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

