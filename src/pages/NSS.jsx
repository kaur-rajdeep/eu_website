import React, { useState } from "react";
import Carousel from "../components/Carousel";
import MenuBar from "../components/StudentZone_MenuBar";
import RegistrationForm from "../components/RegistrationForm";
import Card from "../components/Card";
import { NSSImages, NSSDescription } from "../store/NSSData";

const cardStyles = {
  height: "400px",
  width: "800px",
  textAlign: "center",
  marginBottom: "20px",
  marginRight: "20px",
};

function NSS() {
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
      <Carousel images={NSSImages} />

      <div className="mt-6 mb-6">
        <MenuBar />
      </div>

      <h1 className="text-center  lg:text-5xl md:text-4xl text-3xl text-center lg:mt-6 mt-6 mb-6 font-[990]">
        NSS (National Service Scheme)
      </h1>
      <p className="text-center font-bold text-2xl mb-6">
        The Motto of NSS "Not Me But You", reflects the essence of democratic
        living and upholds the need for selfless service.
      </p>

      <div className=" text-white grid lg:grid-cols-3  md:grid-cols-2 gap-4 place-items-center">
        {NSSDescription.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            content={
              <div className="text-left">
                {Array.isArray(card.content) ? (
                  <ul className="list-disc ml-6">
                    {card.content.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  Object.keys(card.content).map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                      <p className="mt-4">
                        <strong>{section}:</strong>
                      </p>
                      <ul className="list-disc ml-6">
                        {card.content[section].map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))
                )}
              </div>
            }
            cardStyles={cardStyles}
          />
        ))}
      </div>

      {!showRegistrationForm || isSubmitted ? (
        <div className=" text-center mt-14 mb-10 ">
          <button
            className="bg-[#072e33] text-white btn btn-primary w-60 h-14 rounded-full text-xl font-bold pt-2"
            onClick={handleRegistrationFormClick}
          >
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