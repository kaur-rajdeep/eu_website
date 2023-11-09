import React, { useState } from "react";
import Carousel from "../components/Carousel";
import RegistrationForm from "../components/RegistrationForm";
import Card from "../components/Card"; // Import the Card component

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
        <Card
          title="Certificates:"
          content={
            <p>
              C-Certificate is the highest recognition. B-Certificate is the
              initial qualification for senior NCC cadets.
            </p>
          }
          cardStyles={cardStyles}
        />

        <Card
          title="Activities:"
          content={
            <p>
              Focus on instilling discipline and fostering healthy competition.
              Provides leadership, military, and physical training to over 13
              lakh youth.
            </p>
          }
          cardStyles={cardStyles}
        />

        <Card
          title="Benefits:"
          content={
            <p>
              Incentives for NCC certificate holders in recruitment. Special
              Entry Scheme for graduates. Exemption from CDS examination.
            </p>
          }
          cardStyles={cardStyles}
        />

        <Card
          title="NCC Activities:"
          content={
            <p>
              NCC activities aim to instill discipline, foster healthy
              competition, and create prospective officers for the Armed Forces.
              The organization provides training in Leadership, Discipline,
              Integration, Adventure, Military, Physical, and Community
              Development to over 13 lakh youth.
            </p>
          }
          cardStyles={cardStyles}
        />

        <Card
          title="NCC Benefits @ Eternal University:"
          content={
            <p>
              The Combined Annual Training Camp for NCC cadets was conducted by
              1 HP Girls Bn Solan at Baru Sahib, Himachal Pradesh, from 16 to 23
              November 2017. Over 420 cadets from different regions of Himachal
              Pradesh actively participated in various training sessions and
              competitions.
            </p>
          }
          cardStyles={cardStyles}
        />
      </div>

      {!showRegistrationForm || isSubmitted ? (
        <div className="text-center mt-14 mb-10 ">
          <button
            className="bg-[#072e33] text-white btn btn-primary w-60 h-14 rounded-full text-xl font-bold pt-2"
            onClick={handleRegistrationFormClick}>
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