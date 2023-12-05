import React from "react";
import Carousel from "../../components/Carousel";
import QueryBox from "../../components/QueryBox";
function Mtech(){
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
    
    return(
        <>
        {/*---------------------------------------- CAROUSAL --------------------------------------------*/}

        <Carousel images={images} />

        {/*------------------------------------------ COURSE OVERVIEW------------------------------------- */}
        <div className="text-white bg-[#072e33] grid justify-center ">
        <p className="lg:text-4xl md:text-2xl text-xl text-center lg:mt-10 m-4 font-extrabold">
          COURSE OVERVIEW
          
        </p>

        <p class="lg:text-md  text-center md:text-xl mt-8 m-16">
        The department offers Master in Technology Program to students who are interested in advanced learning
        and research in any area of computer science. Masters Program is two years degree Program spread over
        4 semesters for a full-time student The Master’s in Computer Science & Engineering programme aims at
        equipping the graduates, with advanced conceptual knowledge, technical skills and ability to pursue research
        in the field of Computer Science and Engineering, appropriate to the present scenario.</p>
        </div>
        <div className="grid lg:grid-cols-3 ">
        <div className="border-2-black border shadow-md m-4 lg:ml-20 hover:scale-110">
          <div className="p-4 bg-[#0F969C] text-center">
          <p className="text-white text-2xl">DURATION</p>
          </div>
          <p className="text-center p-4">2 Years</p>
        </div>

        <div className="border-2-black border shadow-md m-4 hover:scale-110">
          <div className="p-4 bg-[#0F969C] text-center">
          <p className="text-white text-2xl">SEATS</p>
          </div>
          <p className="text-center p-4">5</p>
        </div>

        <div className="border-2-black border shadow-md m-4 hover:scale-110">
          <div className="p-4 bg-[#0F969C] text-center">
          <p className="text-white text-2xl">FEE</p>
          </div>
          <p className="text-center p-4">55,000</p>
        </div>
        </div>
{/*------------------------------------------- ELIGIBILITY CARD----------------------------------------------- */}
<div className="grid place-items-center">
        <div className="border-2-black border shadow-md m-4 lg:ml-20 hover:scale-110 lg:w-1/2 ">
          <div className="p-4 bg-[#0F969C] text-center">
          <p className="text-white text-2xl">ELIGIBILITY</p>
          </div>
          <p className="text-center p-4">
          Admission to the M.Tech. Degree shall be made on the basis of valid GATE score or HPCET with 20% marks
          or B.E./B.Tech. with 50% marks in relevant field.
          </p>
        </div>

</div>

{/* -------------------------------------------QUERYBOX----------------------------------------------------- */}
        <QueryBox/>
        </>
    )
}
export default Mtech;
