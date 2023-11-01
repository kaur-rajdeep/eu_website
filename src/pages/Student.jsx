import React from 'react';
import Carousel from '../components/Carousel';

/*
const images = [
  { url: "https://th.bing.com/th/id/OIP.xK3mmOAKzPTYAyhade6QcgHaE5?w=256&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", title: "image1" },
  { url: "https://th.bing.com/th/id/OIP.wVYMxnmQywfPYnXFfiG9NwHaDg?pid=ImgDet&rs=1", title: 'image2' },
  { url: "https://th.bing.com/th/id/OIP.yY-E-Mu1SHC02rwOHKC1XgHaDm?w=327&h=170&c=7&r=0&o=5&dpr=1.3&pid=1.7", title: "image3" },
  { url: "https://th.bing.com/th/id/OIP.V5VDHg7SwqbTACc3VjpYswHaFi?w=204&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", title: 'image4' },
];
*/

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
