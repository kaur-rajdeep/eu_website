import React, { useState, useEffect } from 'react';

const carouselImages = [
  'https://images.shiksha.com/mediadata/images/1623762631php42TSYI.jpeg',
  'https://eternaluniversity.edu.in/images/nss/1.jpg',
  'https://eternaluniversity.edu.in/images/event/MI1656487146Conference.jpg',
  'https://eternaluniversity.edu.in/images/activity/AMI1660805268CollegeActivity.jpg',
  'https://eternaluniversity.edu.in/images/event/MI1660799332Camp.jpg'
];

const cardsData = [
  {
    title: 'Card 1',
    description: 'This is the first card description.',
    image: 'https://example.com/card1.jpg'
  },
  {
    title: 'Card 2',
    description: 'This is the second card description.',
    image: 'https://example.com/card2.jpg'
  },
  {
    title: 'Card 3',
    description: 'This is the third card description.',
    image: 'https://example.com/card3.jpg'
  },
  {
    title: 'Card 4',
    description: 'This is the fourth card description.',
    image: 'https://example.com/card4.jpg'
  },
  {
    title: 'Card 5',
    description: 'This is the fifth card description.',
    image: 'https://example.com/card5.jpg'
  },
];

const Contact = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 3000); // Change carousel image every 3 seconds (3000 milliseconds)

    return () => {
      clearInterval(interval); // Cleanup interval on component unmount
    };
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  return (
    <div className="mt-16">
      <div className='h-[60vh] w-[100vw] relative overflow-hidden'>
        <img src={carouselImages[currentIndex]} alt={`carousel-${currentIndex}`} className='h-full w-full object-cover' />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
        {cardsData.map((card, index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded-lg text-center">
            <img src={card.image} alt={`card-image-${index}`} className="w-32 h-32 object-cover mx-auto mb-4 rounded-full" />
            <h2 className="font-bold text-xl mb-2">{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;

