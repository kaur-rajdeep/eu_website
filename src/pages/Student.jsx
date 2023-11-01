import React from "react";
import Carousel from '../components/Carousel'

const images = [
  'https://eternaluniversity.edu.in/images/activity/AGY01657703203EducationalVisit.jpg',
  'https://eternaluniversity.edu.in/images/activity/AGY11657703203EducationalVisit.jpg',
  'https://eternaluniversity.edu.in/images/event/MI1656487146Conference.jpg',
  'https://eternaluniversity.edu.in/images/activity/AMI1660805268CollegeActivity.jpg',
  'https://eternaluniversity.edu.in/images/event/MI1660799332Camp.jpg'
];

const containerStyles = {
  width: "500px",
  height: "280px",
  margin: "0 ",
};

const Student = () => {
  return (
    <div className="mt-16">
      <div style={containerStyles}>
        <Carousel images={images} />
      </div>
    </div>
  );
};

export default Student;
