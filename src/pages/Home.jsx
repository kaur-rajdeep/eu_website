import React from "react";
import Carousel from "../components/Carousel";
import GetInTouch from "../components/GetInTouch";
import NoticeBoard from "../components/NoticeBoard";

function Home() {
  const images = [
    "https://eternaluniversity.edu.in/images/activity/AGY01657703203EducationalVisit.jpg",
    "https://eternaluniversity.edu.in/images/activity/AGY11657703203EducationalVisit.jpg",
    "https://eternaluniversity.edu.in/images/event/MI1656487146Conference.jpg",
    "https://eternaluniversity.edu.in/images/activity/AMI1660805268CollegeActivity.jpg",
    "https://eternaluniversity.edu.in/images/event/MI1660799332Camp.jpg",
  ];

  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 ",
  };

  return (
    <>
      {/* IMAGES CAROUSEL */}
      <Carousel images={images} />
      {/* MISSION */}
      <div className="color mt-16 h-[50vh] grid justify-center">
        <p className="font-extrabold lg:text-6xl text-4xl text-center text-white lg:mt-12 mt-16">
          OUR MISSION
        </p>
        <p className="text-white lg:text-2xl md:w-[70vw] text-center lg:-mt-16">
          "To transform and empower young women talent through cutting edge
          education in science, technology, arts and management amalgamated with
          spiritual rejuvenation for their holistic development to serve the
          mankind with compassion and love."
        </p>
      </div>
      {/* // WHY ETERNAL UNIVERSITY */}
      {/* // COLLEGES */}
      {/* // NOTICE BOARD  */}
      <NoticeBoard />
      {/* // GET IN TOUCH */}
      <GetInTouch />
    </>
  );
}

export default Home;
