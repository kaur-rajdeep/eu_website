/*import React, { useState, useEffect } from 'react';

const carouselImages = [
  'https://images.shiksha.com/mediadata/images/1623762631php42TSYI.jpeg',
  'https://eternaluniversity.edu.in/images/nss/1.jpg',
  'https://eternaluniversity.edu.in/images/event/MI1656487146Conference.jpg',
  'https://eternaluniversity.edu.in/images/activity/AMI1660805268CollegeActivity.jpg',
];

const cardImages = [
  'https://media.istockphoto.com/id/913062404/photo/face-of-businessman-against-white-background.jpg?s=612x612&w=0&k=20&c=Fg0rvqoqvOiH2ayHxsjq2LngGMNLhMryh9mL6njbNfI=',
  'https://media.istockphoto.com/id/580109640/photo/smiling-man.jpg?s=612x612&w=0&k=20&c=ez6cfFhY1gXPDMblpv81X1E46wJYXD1O9VBawnR-p7Y=',
  'https://media.istockphoto.com/id/1146465010/photo/portrait-of-real-caucasian-man-with-happy-expression-looking-at-camera.jpg?s=612x612&w=0&k=20&c=E_5HcNeSrEae9g-Ydryy-oGaNBCdlNlSEGjnhNDnxLg=',
  'https://media.istockphoto.com/id/516379821/photo/business-man.jpg?s=612x612&w=0&k=20&c=l69gZZ3trWgx_BIbErRUihUoIIHMxaZp3LwqOxb3SNA=',
];

const cardsData = [
  {
    title: 'Card 1',
    description: 'This is the first card description.',
  },
  {
    title: 'Card 2',
    description: 'This is the second card description.',
  },
  {
    title: 'Card 3',
    description: 'This is the third card description.',
  },
  {
    title: 'Card 4',
    description: 'This is the fourth card description.',
  },
  {
    title: 'Card 5',
    description: 'This is the fourth card description.',
  },
  {
    title: 'Card 6',
    description: 'This is the fourth card description.',
  },
  {
    title: 'Card 7',
    description: 'This is the fourth card description.',
  },
  {
    title: 'Card 8',
    description: 'This is the fourth card description.',
  },
  {
    title: 'Card 9',
    description: 'This is the fourth card description.',
  },
  {
    title: 'Card 10',
    description: 'This is the fourth card description.',
  },
  {
    title: 'Card 11',
    description: 'This is the fourth card description.',
  },
  {
    title: 'Card 12',
    description: 'This is the fourth card description.',
  },
  {
    title: 'Card 13',
    description: 'This is the fourth card description.',
  },
  {
    title: 'Card 14',
    description: 'This is the fourth card description.',
  },
  {
    title: 'Card 15',
    description: 'This is the fourth card description.',
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

      <div className=" color grid grid-cols-1 md:grid-cols-4 gap-4 p-8">
        {cardsData.map((card, index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded-md text-center">
            <img src={cardImages[index]} alt={`card-image-${index}`} className="w-32 h-32 object-cover mx-auto mb-4 rounded-full" />
            <h2 className="font-bold text-xl mb-2">{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;*/
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
    description: "Vc Office",
    contact: "+91-9805098724",
    email: "contact@eternaluniversity.edu.in",
    name: "Vice-Chancellor ",
    image:
      "https://media.istockphoto.com/id/186608462/photo/thirty-something-hispanic-man.jpg?s=612x612&w=0&k=20&c=MoKRsmvCtyu6wVa1tdn5aSZHzpUFdPD8qjSlyL0lHS8=",
  },
  {
    description: "Pro-Vice-Chancellor",
    contact: "+91-9815984489",
    email: "pvc@eternaluniversity.edu.in ",
    name: "Pro-Vice-Chancellor ",
    image:
      "https://media.istockphoto.com/id/639058162/photo/mid-adult-man.jpg?s=612x612&w=0&k=20&c=G04KXC7On51hJjbwklqTN32lLW6BTvDG6hNQ3wqXc88=",
  },
  {
    description: "Registrar Office",
    contact: "+91-9805098718",
    email: "registrar@eternaluniversity.edu.in ",
    name: " Registar",
    image:
      "https://media.istockphoto.com/id/481376567/photo/hispanic-man.jpg?s=612x612&w=0&k=20&c=O3ZX0_9VXY3EFuJxdZepUiWU0yQWowEtxv5QUAXAa60=",
  },
];
const Contact = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="mt-16 flex flex-col items-center">
      {/* Carousel component */}
      <div className="h-[60vh] w-[100vw] relative overflow-hidden">
        <img
          src={carouselImages[currentIndex]}
          alt={`carousel-${currentIndex}`}
          className="h-full w-full object-cover"
        />
      </div>

      <h1 className="text-3xl font-extrabold mt-8 mb-4 p-4">
        Important Contacts Of Eternal University
      </h1>

      <div className="color grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="shadow-[#294d61] shadow-inner p-4 rounded-lg text-center transition duration-300 ease-in-out transform hover:scale-105 h-[400px] mt-16"
          >
            <div className="mb-4">
              <img
                src={card.image}
                alt={`profile-${index}`}
                className="w-44 h-44 mx-auto mb-2 object-cover rounded-full"
              />
              <div className="mb-2 pb-2">
                <h1 className="text-2xl font-bold mb-1 mt-8">{card.name}</h1>

                <div className="mb-2 mt-4 text-left">
                  <div className="mb-1 mt-12">
                    <strong>Email:</strong> {card.email}
                  </div>
                  <div className="mb-1">
                    <strong>Phone:</strong> {card.contact}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;