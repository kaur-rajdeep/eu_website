import React from 'react';
import Carousel from "../components/Carousel";
import Image1 from '../assets/getintouchicons/location_icon.png';
import Image2 from '../assets/getintouchicons/telephone_icon.png';
import Image3 from '../assets/getintouchicons/mail_icon.png';

const images = [
  "https://eternaluniversity.edu.in/images/activity/AGY01657703203EducationalVisit.jpg",
  "https://eternaluniversity.edu.in/images/activity/AGY11657703203EducationalVisit.jpg",
  "https://eternaluniversity.edu.in/images/event/MI1656487146Conference.jpg",
  "https://eternaluniversity.edu.in/images/activity/AMI1660805268CollegeActivity.jpg",
  "https://eternaluniversity.edu.in/images/event/MI1660799332Camp.jpg",
];

const cardsData = [
  {
    description: "Vc Office",
    contact: "+91-9805098724",
    email: "contact@eternaluniversity.edu.in",
    name: "Vice-Chancellor",
    image: "https://media.istockphoto.com/id/186608462/photo/thirty-something-hispanic-man.jpg?s=612x612&w=0&k=20&c=MoKRsmvCtyu6wVa1tdn5aSZHzpUFdPD8qjSlyL0lHS8=",
  },
  {
    description: "Pro-Vice-Chancellor",
    contact: "+91-9815984489",
    email: "pvc@eternaluniversity.edu.in",
    name: "Pro-Vice-Chancellor",
    image: "https://media.istockphoto.com/id/639058162/photo/mid-adult-man.jpg?s=612x612&w=0&k=20&c=G04KXC7On51hJjbwklqTN32lLW6BTvDG6hNQ3wqXc88=",
  },
  {
    description: "Registrar Office",
    contact: "+91-9805098718",
    email: "registrar@eternaluniversity.edu.in",
    name: "Registrar",
    image: "https://media.istockphoto.com/id/481376567/photo/hispanic-man.jpg?s=612x612&w=0&k=20&c=O3ZX0_9VXY3EFuJxdZepUiWU0yQWowEtxv5QUAXAa60=",
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

const MapComponent = () => {
  return (
    <div className="map-container" style={{ marginLeft: '30px', marginTop: '-20px' }}>
      <br/><br/>
      {/* Your Google Maps iframe goes here */}
      <iframe
        title="Google Maps"
        width="500"
        height="500"
        style={{ border: '0', marginLeft: '20px' }}  // Adjusted marginLeft value
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.1474245742003!2d-122.41941678459717!3d37.77492997975304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1628164523218!5m2!1sen!2sus"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

const GetInTouchComponent = () => {
  return (
    <>
          <p className="text-3xl text-center m-2 font-[990]">
            Get in Touch
          </p>
    <div className="border-2 mr-4 shadow-md mt-8 mb-4" >
      <br /> {/* Add a break tag here */}
      <div className="grid place-items-center text-2xl ">
        <div className="bg-white text-center text-3xl mb-4">
        </div>
    

        <div className="grid gap-1 mb-10">
          <div className="flex flex-col items-center text-center text-sm">
            <img src={Image1} alt="Image 1" className="w-8 h-8 mb-2" />
            <p>Baru Sahib, Distt, near Rajah, Himachal Pradesh 173101</p>
          </div>
          <div className="flex flex-col items-center text-center text-sm">
            <img src={Image2} alt="Image 2" className="w-8 h-8 mb-2" />
            <p>+91-9816400624</p>
          </div>
          <div className="flex flex-col items-center text-center text-sm">
            <img src={Image3} alt="Image 3" className="w-8 h-8 mb-2" />
            <p>contact@eternaluniversity.edu.in</p>
          </div>
        </div>
        <form className="grid gap-4 bg-white text-lg m-auto">
          <div className="flex flex-col items-center gap-4 lg:w-full">
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full md:w-3/4 lg:w-full h-10 rounded-full p-2 border-2 border-black font-bold"
            />

            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full md:w-3/4 lg:w-full h-10 rounded-full p-2 border-2 border-black font-bold"
            />

            <input
              type="tel"
              id="contactNumber"
              placeholder="Your Contact Number"
              className="w-full md:w-3/4 lg:w-full h-10 rounded-full p-2 border-2 border-black font-bold"
            />
          </div>
          <div className="grid place-items-center lg:w-full">
            <textarea
              id="message"
              placeholder="Your message"
              className="w-full rounded-3xl h-32 p-2 border-2 border-black box-border font-bold"
            />
          </div>
          <div className="grid justify-start -ml-40 md:-ml-0 lg:w-full">
            <button
              type="submit"
              className="mt-2 text-center text-white p-2 text-lg bg-black rounded-full cursor-pointer col-span-2 mx-40 w-[200px] mb-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

const AddressAndMap = () => {
  return (
    <div className="color text-black text-center py-16 mt-[-50px] mt-8">
      <h2 className="text-2xl font-bold mb-4">
        Address And Map
      </h2>
      <div className="inline-block" style={{ marginLeft: '`100px', width: '10%' }}><br/>
      <br/></div>
      <div className="flex flex-wrap justify-center items-start">
        <MapComponent />
      </div>
    </div>
  );
};
const GetInTouch = () => {
  return (
    <div className="border-2 p-6 shadow-md lg:m-12 mt-[-80px] mt-8" style={{ width: '60%', marginLeft: '5%' }}><br/><br/>
      <div className="grid place-items-center p-2 text-2xl">
        {/* Rest of the component remains unchanged */}
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      {/* IMAGE CAROUSEL */}
      <Carousel images={images} />

      <h1 className="text-3xl font-extrabold mt-8 mb-4 p-4 flex items-center justify-center">
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
  {/* Address And Map and Get In Touch Section */}
  <div className="flex flex-wrap justify-center items-start">
        <div className="w-full lg:w-1/2 pr-4">
          <AddressAndMap />
        </div>
        <div className="w-full lg:w-1/2 pl-4">
          <GetInTouchComponent />
        </div>
      </div>
    </div>
  );
};
export default Contact;