import React, { useState } from "react";
import Carousel from "../components/Carousel";
import RegistrationForm from "../components/RegistrationForm";

const images = [
  "https://eternaluniversity.edu.in/images/activity/AGY01657703203EducationalVisit.jpg",
  "https://eternaluniversity.edu.in/images/activity/AGY11657703203EducationalVisit.jpg",
  "https://eternaluniversity.edu.in/images/event/MI1656487146Conference.jpg",
  "https://eternaluniversity.edu.in/images/activity/AMI1660805268CollegeActivity.jpg",
  "https://eternaluniversity.edu.in/images/event/MI1660799332Camp.jpg",
];

function Clubs() {
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
      <h1 className="text-center  lg:text-5xl md:text-4xl text-3xl text-center lg:mt-6 mt-6 mb-4 font-[990]">
        Clubs</h1>

      {!showRegistrationForm || isSubmitted ? (
        <div className="text-center">
          <button
            className="bg-[#072e33] text-white btn btn-primary w-60 h-14 rounded-full text-xl font-bold mt-6"
            onClick={handleRegistrationFormClick}>
            Registration Form
          </button>
        </div>
      ) : (
        <RegistrationForm context="Clubs" onSubmit={handleFormSubmission} />
      )}
    </div>
  );
}

export default Clubs;
