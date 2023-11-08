import React from "react";
import Carousel from "../components/Carousel";
import GetInTouch from "../components/GetInTouch";
import NoticeBoard from "../components/NoticeBoard";
import CounterComponent from "../components/Counter";
import Colleges_Card from "../components/Colleges_Card";
import college_card_data from "../store/college_card_data";

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

  const cards = college_card_data.map((item) => {
    return <Colleges_Card key={item.id} {...item} />;
  });
  return (
    <>
      {/* IMAGES CAROUSEL */}
      <Carousel images={images} />
      {/* MISSION */}
      <div className="h-[50vh] grid justify-center bg-[#072e33] text-white">
        <p className="lg:text-5xl md:text-4xl text-3xl text-center lg:mt-12 mt-16 font-[990]">
          OUR MISSION
        </p>
        <p className="lg:text-2xl md:w-[70vw] text-center lg:-mt-12 -mt-16 md:text-xl">
          "To transform and empower young women talent through cutting edge
          education in science, technology, arts and management amalgamated with
          spiritual rejuvenation for their holistic development to serve the
          mankind with compassion and love."
        </p>
      </div>
      {/* // WHY ETERNAL UNIVERSITY */}
      <div>
        <p className="brown font-extrabold text-5xl text-center mt-12">
          Why Eternal University?
        </p>
        <p className="brown text-center font-semibold mt-10 md:text-xl h-24">
          Eternal university is NAAC Accredited & ISO 9001: 2015. The university
          is Recognised by UGC | AICTE | INC | NCTE | DISR | DBT | DRDO.
        </p>
      </div>
      {/* COUNTER */}
      <div className="grid justify-center lg:grid-cols-4 mt-16 md:grid-cols-2">
        <div className="border-r-8 border-[#05161A] backdrop-blur-lg p-2 m-12 mt-24">
          <div className="m-[15%] -mt-32 bg-[#0F969C]  rounded-full w-52 h-52">
            <div className="mt-4 -ml-4 m-0">
              <CounterComponent toValue={2200} color="white" separator={true} />
            </div>
          </div>
          <p className="brown w-64 h-24 font-semibold m-[12%] text-xl pr-8">
            Top private girls only university in Northern India.
          </p>
        </div>
        <div className="border-r-8 border-[#05161A] backdrop-blur-lg p-2 m-12 mt-24">
          <div className="m-[15%] -mt-32 bg-[#0F969C]  rounded-full w-52 h-52">
            <div className="mt-4 -ml-4 m-0">
              <CounterComponent toValue={10} color="white" separator={true} />
            </div>
          </div>
          <p className="brown w-64 h-24 font-semibold m-[12%] text-xl pr-8">
            Ongoing Research Projects in Various fields
          </p>
        </div>
        <div className="border-r-8 border-[#05161A] backdrop-blur-lg p-2 m-12 mt-24">
          <div className="m-[15%] -mt-32 bg-[#0F969C]  rounded-full w-52 h-52">
            <div className="mt-4 -ml-4 m-0">
              <CounterComponent toValue={63} color="white" separator={true} />
            </div>
          </div>
          <p className="brown w-64 h-28 font-semibold m-[12%] text-xl pr-8">
            Latest Undergraduate, Postgraduate and Doctorate Course as per the
            modern industry needs
          </p>
        </div>
        <div className="border-[#05161A] backdrop-blur-lg p-2 m-12 mt-24">
          <div className="m-[15%] -mt-32 bg-[#0F969C] rounded-full w-52 h-52">
            <div className="mt-4 -ml-4 m-0">
              <CounterComponent toValue={50} color="white" separator={true} />
            </div>
          </div>
          <p className="brown w-64 h-24 font-semibold m-[12%] text-xl pr-8">
            Global alliances with international companies & universities.
          </p>
        </div>
      </div>
      {/* // COLLEGES */}
      <div>
        <p className="brown font-extrabold text-5xl text-center mt-12">
          Colleges
        </p>
        <div className="grid justify-center">
          <div className="mx-auto grid lg:grid-cols-4 md:grid-cols-3 mt-12 gap-8">
            {cards}
          </div>
        </div>
      </div>
      {/* // NOTICE BOARD  */}
      <NoticeBoard />
      {/* // GET IN TOUCH */}
      <GetInTouch />
    </>
  );
}

export default Home;
