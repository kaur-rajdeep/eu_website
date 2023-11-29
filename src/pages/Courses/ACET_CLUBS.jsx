import React, { useState } from "react";
import Carousel from "../../components/Carousel";
import RegistrationForm from "../../components/RegistrationForm";
import NoticeBoard from "../../components/NoticeBoard";
import Card from "../../components/Card";
import { ClubsData, ClubsDescription } from "../../store/ACET_CLUBS";

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

function ACET_CLUBS() {
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

      <div className="  mx-auto p-4 lg:h-[50vh] md:h-[70vh] grid justify-center bg-[#072e33] mb-16 text-white">
        <p className="lg:text-5xl md:text-4xl text-3xl text-center lg:mt-12 mt-16 mb-10 font-[990]">
          Clubs
        </p>
        <div className="grid text-white grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ClubsDescription.map((club, index) => (
            <Card
              key={index}
              title={club.title}
              content={<p>{club.content}</p>}
              cardStyles={cardStyles}
            />
          ))}
        </div>
      </div>


      <NoticeBoard images={ClubsData} />

      {!showRegistrationForm || isSubmitted ? (
        <div className="text-center mt-10 mb-10">
          <button
            className="bg-[#072e33] text-white btn btn-primary w-60 h-14 rounded-full text-xl font-bold "
            onClick={handleRegistrationFormClick}
          >
            Registration Form
          </button>
        </div>
      ) : (
        <RegistrationForm context="Clubs" onSubmit={handleFormSubmission} />
      )}
    </div>
  );
}

export default ACET_CLUBS;
