import React, { useState } from "react";
import Carousel from "../components/Carousel";

const images = [
  "https://eternaluniversity.edu.in/images/activity/AGY01657703203EducationalVisit.jpg",
  "https://eternaluniversity.edu.in/images/activity/AGY11657703203EducationalVisit.jpg",
  "https://eternaluniversity.edu.in/images/event/MI1656487146Conference.jpg",
  "https://eternaluniversity.edu.in/images/activity/AMI1660805268CollegeActivity.jpg",
  "https://eternaluniversity.edu.in/images/event/MI1660799332Camp.jpg",
];

function Result() {
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [resultMessage, setResultMessage] = useState("");
  const [error, setError] = useState(null);

  const handleRegistrationNumberChange = (e) => {
    setRegistrationNumber(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Simulating fetching data from an API
    // Replace this with your actual data fetching logic
    setTimeout(() => {
      setResultMessage("Here is your result!");
      setError(null);
    }, 1000);
  };

  return (
    <div>
      <Carousel images={images} />
      <h1 className="text-center lg:text-5xl md:text-4xl text-3xl text-center lg:mt-6 mt-16 mb-6 font-[990]">
        Check Your Result
      </h1>

      <form onSubmit={handleFormSubmit} className="text-center">
        <label className="block mb-4 lg:text-2xl md:text-xl mb-7">
          Registration Number:
          <input
            type="text"
            value={registrationNumber}
            onChange={handleRegistrationNumberChange}
            className="border p-2 ml-2"
          />
        </label>
        <button type="submit" className="bg-[#072e33] text-white btn btn-primary w-60 h-14 rounded-full text-xl font-bold pt-2 mb-10">
          Get Result
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {resultMessage && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Result Details</h2>
          <p>{resultMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Result;
