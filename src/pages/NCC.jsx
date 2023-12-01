import React, { useState } from "react";
import Carousel from "../components/Carousel";
import MenuBar from "../components/StudentZone_MenuBar";
import RegistrationForm from "../components/RegistrationForm";
import Card from "../components/Card";
import cardData from "../store/NCC_DATA";
const images = [
  "https://eternaluniversity.edu.in/images/activity/AGY01657703203EducationalVisit.jpg",
  "https://eternaluniversity.edu.in/images/activity/AGY11657703203EducationalVisit.jpg",
  "https://eternaluniversity.edu.in/images/event/MI1656487146Conference.jpg",
  "https://eternaluniversity.edu.in/images/activity/AMI1660805268CollegeActivity.jpg",
  "https://eternaluniversity.edu.in/images/event/MI1660799332Camp.jpg",
];
const cardStyles = {
  height: "200px",
  marginBottom: "20px",
  textAlign: "center",
};

function NCC() {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRegistrationFormClick = () => {
    setShowRegistrationForm(true);
  };

  const handleFormSubmission = () => {
    console.log("Form submitted");
    setIsSubmitted(true);
    setShowRegistrationForm(false);
  };

  return (
    <div>
      <Carousel images={images} />

      <div className='mt-6 mb-6'>
        <MenuBar />
      </div>

      <h1 className="text-center lg:text-5xl md:text-4xl text-3xl text-center lg:mt-6 mt-6 mb-6 font-[990]">
        NCC (National Cadet Corps)
      </h1>
      <p className="text-center font-bold text-2xl mb-6">
        <strong>AIM OF NCC</strong>
        <br />
        To instill qualities like Character, Courage, Comradeship, Discipline,
        Leadership, Secular Outlook, and a Spirit of Adventure among the youth
        of the country. The goal is to create an organized, trained, and
        motivated youth resource ready to lead and serve the nation, with a
        particular focus on encouraging careers in the Armed Forces.
      </p>

      <div className="text-white grid lg:grid-cols-3 md:grid-cols-2 gap-4 place-items-center">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            content={<p>{card.content}</p>}
            cardStyles={cardStyles}
          />
        ))}
      </div>

      {!showRegistrationForm || isSubmitted ? (
        <div className="text-center mt-14 mb-10 ">
          <button
            className="bg-[#072e33] text-white btn btn-primary w-60 h-14 rounded-full text-xl font-bold pt-2"
            onClick={handleRegistrationFormClick}
          >
            Registration Form
          </button>
        </div>
      ) : (
        <RegistrationForm context="ncc" onSubmit={handleFormSubmission} />
      )}
    </div>
  );
}

export default NCC;