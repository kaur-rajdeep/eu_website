import React from "react";
import Carousel from "../../components/Carousel";
import QueryBox from "../../components/QueryBox";
function Btech(){
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
        The Department of Computer Science and Engineering offers 4-year B.Tech. 
        programme. Department also offers mandatory 6-8 weeks summer internships before 
        completion of under graduation. A novel concept of Induction Program and Virtual Laboratories has also been introduced in the Model Curriculum.
        </p>
      </div>

      {/*----------------------------------------- CARDS----------------------------------------------- */}
<div className="grid lg:grid-cols-3">
        <div className="border-2-black border shadow-md m-4 lg:ml-20 hover:scale-110">
          <div className="p-4 bg-[#0F969C] text-center">
          <p className="text-white text-2xl">DURATION</p>
          </div>
          <p className="text-center p-4">4 Years</p>
        </div>

        <div className="border-2-black border shadow-md m-4 hover:scale-110">
          <div className="p-4 bg-[#0F969C] text-center">
          <p className="text-white text-2xl">SEATS</p>
          </div>
          <p className="text-center p-4">60</p>
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
          <p className="text-center p-4">On the basis of JEE (Main) with 15% marks for general category
           and 10% marks for reserved category or HPCET with 20% marks for general category and 15%
            marks for reserved category or on the basis of 10+2 examination with 45% marks.</p>
        </div>

</div>

{/* -------------------------------------------QUERYBOX----------------------------------------------------- */}
        <QueryBox/>
        </>
    )
}
export default Btech;