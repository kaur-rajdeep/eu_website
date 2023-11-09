import React, { useState } from "react";
import Carousel from "../components/Carousel";
import RegistrationForm from "../components/RegistrationForm";
import Card from "../components/Card";
// ... (other imports and constants)
const images = [
  "https://eternaluniversity.edu.in/images/activity/AGY01657703203EducationalVisit.jpg",
  "https://eternaluniversity.edu.in/images/activity/AGY11657703203EducationalVisit.jpg",
  "https://eternaluniversity.edu.in/images/event/MI1656487146Conference.jpg",
  "https://eternaluniversity.edu.in/images/activity/AMI1660805268CollegeActivity.jpg",
  "https://eternaluniversity.edu.in/images/event/MI1660799332Camp.jpg",
];

const cardStyles = {
  height: "400px",
  width: "800px", // Adjust the card width
  textAlign: "center",
  marginBottom: "20px",
  marginRight: "20px", // Add right margin to separate the cards
};

function NSS() {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // Add state to track form submission

  const handleRegistrationFormClick = () => {
    setShowRegistrationForm(true);
  };

  const handleFormSubmission = () => {
    // Perform form submission logic here (if any)
    console.log("Form submitted");
    setIsSubmitted(true); // Set the submitted state to true
    setShowRegistrationForm(false); // Hide the registration form after submission
  };

  return (
    // color bg-[#072e33], bg-[#0F969C]

    <div>
      <Carousel images={images} />

      {/* cards */}

      <h1 className="text-center  lg:text-5xl md:text-4xl text-3xl text-center lg:mt-6 mt-6 mb-6 font-[990]">
        NSS (National Service Scheme)
      </h1>
      <p className="text-center font-bold text-2xl mb-6">
        The Motto of NSS "Not Me But You", reflects the essence of democratic
        living and upholds the need for selfless service.
      </p>

      <div className=" text-white grid lg:grid-cols-3  md:grid-cols-2 gap-4 place-items-center">
        <Card
          title="NSS at Eternal University "
          content={
            <div className="text-left">
              <p>
                <strong>NSS Introduction:</strong>
              </p>
              <ul className="list-disc ml-6">
                <li>NSS introduced by the Government of India in 1969.</li>
                <li>
                  Evolved to develop students' sense of nation-building through
                  social work.
                </li>
              </ul>

              <p className="mt-4">
                <strong>NSS at Eternal University:</strong>
              </p>
              <ul className="list-disc ml-6">
                <li>Hosts one self-financed NSS unit at Baru Sahib.</li>
                <li>
                  Sanctioned strength of 100 volunteers; 70 students currently
                  enrolled.
                </li>
              </ul>
            </div>
          }
          cardStyles={cardStyles}
        />

        <Card
          title="NSS at Eternal University:"
          content={
            <ul className="text-left list-disc">
              <li>
                Voluntary association run by students themselves, guided by
                faculty members.
              </li>
              <li>
                Organizes NSS camps for engaging in social welfare activities,
                such as:
                <ul className="list-disc ml-6">
                  <li>Tree Plantation</li>
                  <li>Awareness programs on drug de-addiction</li>
                  <li>AIDS awareness</li>
                  <li>Swine-flu awareness</li>
                  <li>Campaigns for saving water and cleanliness</li>
                </ul>
              </li>
            </ul>
          }
          cardStyles={cardStyles}
        />

        <Card
          title="NSS Objectives:"
          content={
            <ul className="text-left list-disc">
              <li>Understand the community in which they work.</li>
              <li>Understand themselves in relation to their community.</li>
              <li>
                Identify the needs and problems of the community and involve
                them in problem-solving.
              </li>
              <li>
                Develop among themselves a sense of social and civic
                responsibility.
              </li>
              <li>
                Utilize their knowledge in finding practical solutions to
                individual and community problems.
              </li>
            </ul>
          }
          cardStyles={cardStyles}
        />
      </div>

      {!showRegistrationForm || isSubmitted ? (
        <div className="flex text-center items-center justify-center mt-6">
          <button
            className="bg-[#072e33] text-white btn btn-primary w-60 h-14 rounded-full text-xl font-bold pt-2"
            onClick={handleRegistrationFormClick}>
            Registration Form
          </button>
        </div>
      ) : (
        <RegistrationForm context="nss" onSubmit={handleFormSubmission} />
      )}
    </div>
  );
}

export default NSS;