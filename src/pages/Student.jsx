import React from 'react';
import Carousel from '../components/Carousel';
import MenuBar from '../components/StudentZone_MenuBar';

const images = [
  'https://eternaluniversity.edu.in/images/activity/AGY01657703203EducationalVisit.jpg',
  'https://eternaluniversity.edu.in/images/activity/AGY11657703203EducationalVisit.jpg',
  'https://eternaluniversity.edu.in/images/event/MI1656487146Conference.jpg',
  'https://eternaluniversity.edu.in/images/activity/AMI1660805268CollegeActivity.jpg',
  'https://eternaluniversity.edu.in/images/event/MI1660799332Camp.jpg'
];

const containerStyles = {
  width: "400px",
  height: "680px",
  margin: "0",
};

const Student = () => {
  return (
    <div className="text-center">


      <div style={containerStyles}>
        <Carousel images={images} />
      </div>

      <div>
        <MenuBar/>
      </div>


      <div className="color text-2xl font-bold mt-10  h-[30vh]">
        <div className="text-4xl font-bold mb-4 py-8 ">Student Zone</div>
        <p>
          "Education is the key that unlocks the door
          <br /> 
          to a world of possibilities,
          where knowledge empowers students to
          <br />
          shape the future and realize their dreams."
        </p>
      </div>
      <div className='color mt-10 h-[15vh]'></div>
    </div>
    
  );
};
  
export default Student;
