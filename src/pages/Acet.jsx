import { height } from '@mui/system';
import React from 'react'
import Carousel from '../components/Carousel';

import "./Acet.css"
const images = [
  'https://eternaluniversity.edu.in/images/activity/AGY01657703203EducationalVisit.jpg',
  'https://eternaluniversity.edu.in/images/activity/AGY11657703203EducationalVisit.jpg',
  'https://eternaluniversity.edu.in/images/event/MI1656487146Conference.jpg',
  'https://eternaluniversity.edu.in/images/activity/AMI1660805268CollegeActivity.jpg',
  'https://eternaluniversity.edu.in/images/event/MI1660799332Camp.jpg'
];

const containerStyles = {
  width: "400px",
  height: "600px",
  margin: "0 ",
};
const Acet = () => {
  return (
    <>
      <div className="mt-16">
        <div style={containerStyles}>
          <Carousel images={images} />
        </div>
      </div>

      <div class="">
        <div class="bg-[#072e33] text-white h-[50vh] grid justify-center">
          <p class="lg:text-5xl md:text-4xl text-3xl text-center lg:mt-28 font-[990]">
            AKAL COLLEGE OF ENGINEERING AND TECHNOLOGY
          </p>
          <div class="grid justify-items-center">
            <p class="lg:text-2xl md:w-[70vw] text-center lg:-mt-4 -mt-16 md:text-xl">
              Kalgidhar Trust is a premier organization of universal
              brotherhood, was the main force behind the mission of “Removal of
              Economic Backwardness through Technology”.
            </p>
          </div>
        </div>
      </div>

      <div className="grid">
        <div className="shadow-md backdrop-blur-lg mt-[-2px] border-2 m-0 w-full">
          {/* shadow-md backdrop-blur-lg mt-[-2px] z-10 border-2 m-0 w-full m-4 p-4 w-[100%] */}
          <div className="py-4 md:px-10 px-7">
            <div className="p-6 rounded-md text-center h-[50vh]">
              <h1 className="brown font-bold lg:text-5xl text-8xl sm:text-4xl md:text-4xl mb-6 ">
                COURSES
              </h1>
              <div class="grid md:grid-cols-1 justify-items-center lg:grid-cols-2">
                <div class="w-[50%] border rounded-lg shadow bg-[#072E33] border-gray-500 m-2">
                  <div>
                    <img
                      class=" rounded-t-lg"
                      src="https://qph.cf2.quoracdn.net/main-qimg-687b4bfeace2dfd905b39bb747179561-pjlq"
                      alt=""
                    />
                  </div>
                  <div class="p-4">
                    <div>
                      <h5 class="mb-2 text-lg font-bold text-white">BTECH</h5>
                    </div>
                    <a
                      href="#"
                      class="p-2 text-sm font-medium text-center text-white bg-[#f93a54] rounded-lg hover:bg-[#e3142c] focus:outline-none"
                    >
                      Read more
                    </a>
                  </div>
                </div>

                <div class="w-[50%] border rounded-lg shadow bg-[#072E33] border-gray-500 m-2">
                  <div>
                    <img
                      class="rounded-t-lg"
                      src="https://images.indianexpress.com/2021/04/application-1200x667-1.jpg?w=414"
                      alt=""
                    />
                  </div>
                  <div class="p-3">
                    <div>
                      <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                        MTECH
                      </h5>
                    </div>
                    <a
                      href="#"
                      class="p-2 text-sm font-medium text-center text-white bg-[#f93a54] rounded-lg hover:bg-[#e3142c] focus:outline-none"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="">
        <div class="color h-[70vh] grid justify-center">
          <p class="lg:text-5xl md:text-4xl text-3xl text-center text-white lg:mt-12 mt-16 font-[990]">
            FACULTY
          </p>
        </div>
      </div>
    </>
  );
}


export default Acet;
































































