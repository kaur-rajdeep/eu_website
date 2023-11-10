import React from 'react';
import Carousel from '../components/Carousel';
import MenuBar from '../components/StudentZone_MenuBar';
import NoticeBoard from '../components/NoticeBoard';
import StudentZoneData from '../store/Student_Zone_Data';

const images = [
  'https://eternaluniversity.edu.in/images/activity/AGY01657703203EducationalVisit.jpg',
  'https://eternaluniversity.edu.in/images/activity/AGY11657703203EducationalVisit.jpg',
  'https://eternaluniversity.edu.in/images/event/MI1656487146Conference.jpg',
  'https://eternaluniversity.edu.in/images/activity/AMI1660805268CollegeActivity.jpg',
  'https://eternaluniversity.edu.in/images/event/MI1660799332Camp.jpg'
];


const Student = () => {
  return (


    <div className="text-center mb-10">

      {/* Carousel */}

        <Carousel images={images} />


        {/* menu bar */}

      <div className='mt-6 mb-6'>
        <MenuBar/>
      </div>

      {/* Student Zone */}
      <div className="h-[50vh] grid justify-center bg-[#072e33] text-white">
        <p className="lg:text-5xl md:text-4xl text-3xl text-center lg:mt-12 mt-16 font-[990]">
        Student Zone
        </p>
        <p className="lg:text-2xl md:w-[70vw] text-center lg:-mt-12 -mt-16 md:text-xl">
          "Education unlocks a world of opportunities and empowers students to shape their future.
           It nurtures critical thinking, creativity, and global awareness. Our institution is dedicated to
          unleashing potential, fostering knowledge, and inspiring meaningful change."
        </p>
      </div>

      <NoticeBoard images={StudentZoneData} />

    </div>
    
  );
};
  
export default Student;
