import React from "react";

import { Link } from "react-router-dom"; // Import Link from react-router-dom
import RegistrationForm from "../components/RegistrationForm";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

  const images = [
    "https://eternaluniversity.edu.in/images/activity/AGY01657703203EducationalVisit.jpg",
    "https://eternaluniversity.edu.in/images/activity/AGY11657703203EducationalVisit.jpg",
    "https://eternaluniversity.edu.in/images/event/MI1656487146Conference.jpg",
    "https://eternaluniversity.edu.in/images/activity/AMI1660805268CollegeActivity.jpg",
    "https://eternaluniversity.edu.in/images/event/MI1660799332Camp.jpg",
  ];

// ... (Your Card component and other imports)

function Faculty() {
  return (
    <div className="mt-16">

<Carousel images={images} />
      {/* COURSES */}
      <div className="grid justify-center mb-16">
        <p className="brown lg:text-5xl md:text-3xl text-2xl text-center text-white lg:mt-12 mt-16 font-extrabold mb-6">
          Jobs And Internships
        </p>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 place-items-center">
          <div className="rounded-lg m-2 lg:w-[30vw] md:w-[60vw] w-[90vw] border-2 border-[#294d61]">
            <div>
              <img
                className="rounded-t-lg"
                src="https://img.freepik.com/free-vector/situation-people-office-flat-background_23-2148109842.jpg?size=626&ext=jpg&ga=GA1.1.1952474314.1701203880&semt=ais"
                alt=""
              />
            </div>
            <div className="p-3 grid place-items-center shadow-md shadow-[#294d61] rounded-md">
              <div>
                <h5 className="mb-2 text-xl font-extrabold text-center">Job Applicant</h5>
              </div>
              <Link
                to="/register"
                className="p-2 text-sm font-medium text-center text-white bg-[#05161A] rounded-lg hover:bg-[#294d61] focus:outline-none"
              >
                Registration Form
              </Link>
            </div>
          </div>

          <div className="rounded-lg m-2 lg:w-[30vw] md:w-[60vw] w-[90vw] border-2 border-[#294d61]">
            <div>
              <img
                className="rounded-t-lg"
                src="https://img.freepik.com/free-vector/situation-people-office-flat-background_23-2148109842.jpg?size=626&ext=jpg&ga=GA1.1.1952474314.1701203880&semt=ais"
                alt=""
              />
            </div>
            <div className="p-3 grid place-items-center shadow-md shadow-[#294d61] rounded-md">
              <div>
                <h5 className="mb-2 text-xl font-extrabold text-center">Company seeking employees</h5>
              </div>
              <Link
                to="/mtech"
                className="p-2 text-sm font-medium text-center text-white bg-[#05161A] rounded-lg hover:bg-[#294d61] focus:outline-none"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faculty;