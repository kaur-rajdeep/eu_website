import React from "react";
import Carousel from "../components/Carousel";
import "./Acet.css";
import FacultyCard from "../components/FacultyCard";
import AcetClubs from "../components/AcetClubs";
import QueryBox from "../components/QueryBox";
import { Link } from "react-router-dom";
function Acet() {
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
      {/* IMAGE CAROUSEL */}
      <Carousel images={images} />

      {/* ACET */}

      <div class="text-white bg-[#072e33] h-[50vh] grid justify-center">
        <p class="lg:text-4xl md:text-2xl text-xl text-center lg:mt-12 mt-16 font-extrabold">
          AKAL COLLEGE OF ENGINEERING AND
          <p>TECHNOLOGY</p>
        </p>

        <p class="lg:text-2xl md:w-[70vw] text-center lg:-mt-12 -mt-16 md:text-xl">
          Kalgidhar Trust is a premier organization of universal brotherhood,
          was the main force behind the mission of “Removal of Economic
          Backwardness through Technology”.
        </p>
      </div>

      {/* COURSES */}

      <div class="grid justify-center mb-16">
        <p class=" brown lg:text-5xl md:text-3xl text-2xl text-center text-white lg:mt-12 mt-16 font-extrabold mb-6">
          COURSES
        </p>
        <div class="grid md:grid-cols-1 lg:grid-cols-2 gap-4 place-items-center ">
          <div class=" rounded-lg m-2 lg:w-[30vw] md:w-[60vw] w-[90vw] border-2 border-[#294d61]">
            <div>
              <img
                class=" rounded-t-lg"
                src="https://qph.cf2.quoracdn.net/main-qimg-687b4bfeace2dfd905b39bb747179561-pjlq"
                alt=""
              />
            </div>
            <div class="p-3 grid place-items-center shadow-md shadow-[#294d61] rounded-md">
              <div>
                <h5 class="mb-2 text-xl font-extrabold text-center">BTECH</h5>
              </div>
              <Link
                to="/btech"
                class="p-2 text-sm font-medium text-center text-white  bg-[#05161A] rounded-lg hover:bg-[#294d61] focus:outline-none"
              >
                Read more
              </Link>
            </div>
          </div>

          <div class="rounded-lg m-2 lg:w-[30vw] md:w-[60vw] w-[90vw] border-2 border-[#294d61]">
            <div>
              <img
                class=" rounded-t-lg"
                src="https://qph.cf2.quoracdn.net/main-qimg-687b4bfeace2dfd905b39bb747179561-pjlq"
                alt=""
              />
            </div>
            <div class="p-3 grid place-items-center shadow-md shadow-[#294d61] rounded-md">
              <div>
                <h5 class="mb-2 text-xl font-extrabold text-center">MTECH</h5>
              </div>
              <Link
                to="/mtech"
                class="p-2 text-sm font-medium text-center text-white bg-[#05161A] rounded-lg hover:bg-[#294d61] focus:outline-none "
              >
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------------FACULTY----------------------------------------- */}
      <FacultyCard />

      {/* --------------------------------CLUBS---------------------------------------------------------- */}
      <AcetClubs />

      {/* ----------------------------------QUERY BOX--------------------------------------------------- */}
      <QueryBox />
    </>
  );
}
export default Acet;
