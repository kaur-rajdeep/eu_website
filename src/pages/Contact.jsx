import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Image1 from '../assets/getintouchicons/location_icon.png';
import Image2 from '../assets/getintouchicons/telephone_icon.png';
import Image3 from '../assets/getintouchicons/mail_icon.png';
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
const OuterCard = ({ text, phone, email }) => {
  const phoneNumbers = phone.split(', ');
  return (
    <div
      className="shadow-[#294d61] shadow-inner p-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-110"
      style={{
        width: '350px',
        height: '350px',
        backgroundColor: '#fff',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        margin: '10px 50px 20px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <p style={{ marginBottom: '10px' }}>
        {phoneNumbers.map((phoneNumber, index) => (
          <span key={index} style={{ fontWeight: 'bold' }}>
            {phoneNumber.trim()}
            {index < phoneNumbers.length - 1 && ', '}
          </span>
        ))}
      </p>
      <p style={{ marginBottom: '130px' }}>
        <a href={`mailto:${email}`} style={{ fontWeight: 'bold' }}>
          {email}
        </a>
      </p>
      <InnerCard text={text} />
    </div>
  );
};

// InnerCard component
const InnerCard = ({ text }) => {
  return (
    <div
      className="bg-blue-200 shadow-md p-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-110"
      style={{
        width: '220px',
        height: '50px',
        backgroundColor: '#c3dafe',
        margin: '-300px 0.5px 0.5px 0.5px',
      }}
    >
      {text}
    </div>
  );
};

// MapComponent component
const MapComponent = () => {
  return (
    <div className="map-container" style={{ marginLeft: '100px' }}>
      <iframe
        title="Google Maps"
        className="google-map"
        width="450px" // Set the width to 100% (adjust it as needed)
        height="450px" // Set the desired height

        style={{
          border: 0,
          borderRadius: '10px', // Add rounded edges (you can adjust the radius)
        }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.744475779127!2d77.29435331510398!3d30.753678291673896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f71f089dc6a15%3A0x57f9fec43429fac6!2sEternal%20University%20Baru%20Sahib!5e0!3m2!1sen!2sin!4v1597320710176!5m2!1sen!2sin"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};
//Get in touch

const GetInTouch = () => {
  return (
    <div className="border-2 p-6 shadow-md lg:m-12 m-4 mt-24 lg:w-1/2 ">
      <div className="grid place-items-center p-2 text-2xl">
        <div className="bg-white text-center text-3xl mb-4">
          <p className="lg:text-5xl md:text-4xl text-3xl text-center lg:mt-12 font-[990]">
            Get in Touch
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-1 mb-10">
          <div className="flex flex-col items-center text-center lg:text-xl md:text-sm text-xs">
            <img src={Image1} alt="Image 1" className="w-10 h-10 mb-2" />
            <p>Baru Sahib, Distt, near Rajah,<br/> Himachal Pradesh 173101</p>
          </div>
          <div className="flex flex-col items-center text-center lg:text-xl md:text-sm text-xs">
            <img src={Image2} alt="Image 2" className="w-10 h-10 mb-2" />
            <p>+91-9816400624</p>
          </div>
          <div className="flex flex-col items-center text-center lg:text-xl md:text-sm text-xs">
            <img src={Image3} alt="Image 3" className="w-10 h-10 mb-2" />
            <p>contact@eternaluniversity.edu.in</p>
          </div>
        </div>
        <form className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-white p-12 text-xl m-auto">
          <div className="flex flex-col items-center gap-8 lg:w-full">
            <input
              type="text"
              id="name"
              placeholder="Enter your Name"
              className="w-full h-12 rounded-3xl p-4 border-2 border-black"
            />
            <input
              type="email"
              id="email"
              placeholder="Enter your Email"
              className="w-full h-12 rounded-3xl p-4 border-2 border-black"
            />
            <input
              type="tel"
              id="contactNumber"
              placeholder="Enter your Contact Number"
              className="w-full h-12 rounded-3xl p-4 border-2 border-black"
            />
          </div>
          <div className='grid place-items-center -ml-16 md:ml-0 lg:w-full'>
            <textarea
              id="message"
              placeholder="Enter your message"
              className="w-full rounded-3xl h-64 p-4 border-2 border-black box-border"
            />
          </div>
          <div className='grid justify-start -ml-40 md:-ml-0 lg:w-full'>
            <button
              type="submit"
              className="mt-4 text-center text-white p-2 text-2xl bg-black rounded-full cursor-pointer col-span-2 mx-40 w-[200px]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
// AddressAndMap component
const AddressAndMap = () => {
  return (
    <div className="color text-black text-center py-16 mt-[-50px] mt-8">
      <h2 className="text-2xl font-bold mb-4 inline-block" style={{ marginLeft: '-60px' }}>
        Address And Map
      </h2>
      <div className="inline-block" style={{ marginLeft: '40vw' }}>
       
      </div>
      <div className="flex flex-wrap justify-center items-start">
        <MapComponent />
        <GetInTouch />
      </div>
    </div>
  );
};

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
    <div>
      
      <div className="h-[60vh] w-[100vw] relative overflow-hidden">
        <Slider>
          {carouselImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`carousel-${index}`}
              className="h-full w-full object-cover"
            />
          ))}
        </Slider>
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

      {/* Admission and Contact Text */}
      <div className="mt-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Admission And Accounts</h2>
        <div className="grid gap-4 justify-center md:flex md:flex-row">
          <OuterCard
            text="For Admission"
            phone="+91-7833911763"
            email="admissions@eternaluniversity.edu.in"
          />
          <OuterCard
            text="For Accounts"
            phone="+91-9805098725"
            email="accounts@eternaluniversity.edu.in"
          />
        </div>
      </div>

      {/* Get In Touch Section */}
      <div className="flex">
      <AddressAndMap />
      
    </div>
    </div>
  );
};

export default Contact;