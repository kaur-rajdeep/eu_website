import { height } from '@mui/system';
import React from 'react'
import Carousel from '../components/Carousel';

import "./Acet.css"
import FacultyCard from "../components/FacultyCard";
function  Acet(){
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
              <a
                href="#"
                class="p-2 text-sm font-medium text-center text-white  bg-[#05161A] rounded-lg hover:bg-[#294d61] focus:outline-none"
              >
                Read more
              </a>
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
              <a
                href="#"
                class="p-2 text-sm font-medium text-center text-white bg-[#05161A] rounded-lg hover:bg-[#294d61] focus:outline-none "
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------------------------------------FACULTY--------------------------------- */}
      {/* <div class="">
        <div class="color h-[90vh] grid justify-center">
          <p class="lg:text-5xl md:text-4xl text-3xl text-center text-black lg:mt-12 mt-16 font-[990] mb-19">
            FACULTY
          </p>

          <div class="flex flex-row min-screen items-center justify-center lg:-mt-45 ">
            <div class="grid grid-cols-3 gap-5 md:grid-cols-2 lg:grid-cols-3">
              <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-60 w-72">
                  <img
                    class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src="https://www.lifeprint.com/asl101/signjpegs/f/farmer5.jpg"
                    alt=""
                  />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 class="font-dmserif text-3xl font-bold text-white">
                    Er. SASHI TARUN
                  </h1>
                  <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis dolore adipisci placeat.
                  </p>
                  <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                    See More
                  </button>
                </div>
              </div>
              <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-60 w-72">
                  <img
                    class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src="https://everydaypower.com/wp-content/uploads/2015/10/Become-A-More-Positive-Person-With-These-10-Actions.jpg"
                    alt=""
                  />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 class="font-dmserif text-3xl font-bold text-white">
                    Er. PRAVEEN RAJPUT
                  </h1>
                  <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis dolore adipisci placeat.
                  </p>
                  <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                    See More
                  </button>
                </div>
              </div>
              <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-60 w-72">
                  <img
                    class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src="https://sourcesofinsight.com/wp-content/uploads/2015/06/image27.png"
                    alt=""
                  />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 class="font-dmserif text-3xl font-bold text-white">
                    Er. BHASKAR BHARDWAJ
                  </h1>
                  <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis dolore adipisci placeat.
                  </p>
                  <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                    See More
                  </button>
                </div>
              </div>

              <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 ">
                <div class="h-60 w-72">
                  <img
                    class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src="https://gumlet.assettype.com/filmcompanion%2F2022-11%2F930182b8-0fc6-4ed3-9d16-7f71e256a987%2Fashok.png?format=auto"
                    alt=""
                  />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 class="font-dmserif text-3xl font-bold text-white">
                    Er. MANISH KUMAR
                  </h1>
                  <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis dolore adipisci placeat.
                  </p>
                  <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                    See More
                  </button>
                </div>
              </div>

              <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-60 w-72">
                  <img
                    class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
                    alt=""
                  />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 class="font-dmserif text-3xl font-bold text-white">
                    Er. SUMON DEY
                  </h1>
                  <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis dolore adipisci placeat.
                  </p>
                  <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                    See More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
  </div>*/}
      <FacultyCard />

      {/* --------------------------------CLUBS---------------------------------------------------------- */}

      <div class=" h-[50vh] grid justify-center mb-16">
        <p class=" brown lg:text-5xl md:text-4xl text-3xl text-center text-white lg:mt-12 mt-16 font-[990] mb-6">
          CLUBS
        </p>

        <div class="flex flex-row md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div class="max-w-xs bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-600 dark:border-gray-500">
            <div>
              <img
                class=" rounded-t-lg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjPaMD9wh_YkQWNdp-jbGcc4IMIr4TNLFw_rRdCaUTE8datj84UeKkG3YQUfIu2y7jzzU&usqp=CAU"
                alt=""
              />
            </div>
            <div class="p-3">
              <div>
                <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  HACKATHON CLUB
                </h5>
              </div>
              <a
                href="#"
                class="inline-flex items-center px-2 py-1 text-sm font-medium text-center text-white bg-[#f93a54] rounded-lg hover:bg-[#e3142c] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Know more
              </a>
            </div>
          </div>

          <div class="max-w-xs bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-600 dark:border-gray-500">
            <div>
              <img
                class=" rounded-t-lg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjPaMD9wh_YkQWNdp-jbGcc4IMIr4TNLFw_rRdCaUTE8datj84UeKkG3YQUfIu2y7jzzU&usqp=CAU"
                alt=""
              />
            </div>
            <div class="p-3">
              <div>
                <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  CODING CLUB
                </h5>
              </div>
              <a
                href="#"
                class="inline-flex items-center px-2 py-1 text-sm font-medium text-center text-white bg-[#f93a54] rounded-lg hover:bg-[#e3142c] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Know more
              </a>
            </div>
          </div>
          <div class="max-w-xs bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-600 dark:border-gray-500">
            <div>
              <img
                class=" rounded-t-lg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjPaMD9wh_YkQWNdp-jbGcc4IMIr4TNLFw_rRdCaUTE8datj84UeKkG3YQUfIu2y7jzzU&usqp=CAU"
                alt=""
              />
            </div>
            <div class="p-3">
              <div>
                <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  RESEARCH CLUB
                </h5>
              </div>
              <a
                href="#"
                class="inline-flex items-center px-2 py-1 text-sm font-medium text-center text-white bg-[#f93a54] rounded-lg hover:bg-[#e3142c] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Know more
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default Acet;
































































