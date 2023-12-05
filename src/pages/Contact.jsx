import React from 'react';
import Carousel from "../components/Carousel";
import CardData from "../components/CardData";
import AddressAndMap from "../components/AddressAndMap";
import GetInC from "../components/GetInC";
import Map from "../components/Map";
import AccountCard from '../components/AccountCard';

const images = [
  "https://eternaluniversity.edu.in/images/activity/AGY01657703203EducationalVisit.jpg",
  "https://eternaluniversity.edu.in/images/activity/AGY11657703203EducationalVisit.jpg",
  "https://eternaluniversity.edu.in/images/event/MI1656487146Conference.jpg",
  "https://eternaluniversity.edu.in/images/activity/AMI1660805268CollegeActivity.jpg",
  "https://eternaluniversity.edu.in/images/event/MI1660799332Camp.jpg",
];

const ContactsCardData = [
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

const AccountsCardData=[
  {
    text: "For Admission",
    phone: "+91-7833911763",
    email: "admissions@eternaluniversity.edu.in",
    name: "Admissions",
  },
  {
    text: "For Accounts",
    phone: "+91-9805098725",
    email: "accounts@eternaluniversity.edu.in",
    name: "Accounts",
  }
]

const Contact = () => {
  return (
    <div>
      {/* IMAGE CAROUSEL */}
      <Carousel images={images} />
      {/* ... (Carousel component) */}

      <h1 className="text-3xl font-extrabold mt-8 mb-4 p-4 flex items-center justify-center">
        Important Contacts Of Eternal University
      </h1>

      <div className="color grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
        {ContactsCardData.map((card) => (
          <CardData key={card.name} {...card} />
        ))}
      </div>

      {/* Admission and Contact Text */}
      <div className="mt-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Admission And Accounts</h2>
        <div className="grid gap-4 justify-center md:flex md:flex-row">
          {AccountsCardData.map((card)=>(
            <AccountCard key={card.name} {...card} />
          ))}
        </div>
      </div>

      {/* Address And Map and Get In Touch Section */}
      <div className="flex flex-wrap justify-center items-start">
        <div className="w-full lg:w-1/2 pr-4">
          <AddressAndMap />
        </div>
        <div className="w-full lg:w-1/2 pl-4">
          <GetInC/>
        </div>
      </div>
    </div>
  );
};

export default Contact;