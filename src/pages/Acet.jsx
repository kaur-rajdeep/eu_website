import { height } from '@mui/system';
import React from 'react'
import Carousel from "../components/Carousel";


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
    {/* </div> */}
    {/* <div className="mt-16">
    </div>
    <img src={'https://eternaluniversity.edu.in/images/activity/AGY01657703203EducationalVisit.jpg'}
     className='h-[60vh] w-[100vw]'/> */}

<div className="grid place-items-center">
  <div className="color shadow-md backdrop-blur-lg mt-[-2px] z-10 border-2 m-0 w-full">
    <div className="md:flex items-center justify-center py-4 md:px-10 px-7"> 
      <div className="color p-6 rounded-md text-white text-center h-[40vh]">
        <h1 className="font-bold text-8xl sm:text-2xl md:text-4xl mt-10">AKAL COLLEGE OF ENGINEERING AND TECHNOLOGY</h1> 
        <h2 className="font-bold mt-10 font-2xl">Kalgidhar Trust is a premier organization of universal brotherhood, was the main force behind the mission of “Removal of Economic Backwardness through Technology”.</h2> 
      </div>
    </div>
  </div>
</div>

{/* <div className="grid">
  <div className=" shadow-md backdrop-blur-lg mt-[-2px] z-10 border-2 m-0 w-[100%] ">
    <div className=" py-4 md:px-10 px-7"> 
      <div className="p-6 rounded-md text-white text-center h-[50vh]">
        <h1 className=" brown font-bold text-4xl sm:text-xl md:text-2xl ">COURSES</h1> 


        <div className="card-container flex ">
      <div className="card">
        <img
          src="https://th.bing.com/th/id/OIP.NyM7hZh-dmjy9nHlElY_wgHaEK?pid=ImgDet&rs=1"  // Add the image URL for the first card
          alt="Card Image"
          className="card-image"
        />
        <div className="color card-content w-[35vw] ">
          <h2 className="card-title ">Card Title 1</h2>
          <p className="card-description">Card Description 1</p>
        </div>
      </div>
      <div className="card">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdZjwCVXmB4RnsftxoNEw1Dtg41GQejEozGd10WS8IhUwr1crsEogBC6cfAsuBdAUnRZc&usqp=CAU"  // Add the image URL for the second card
          alt="Card Image"
          className="card-image"
        />
        <div className=" color card-content  w-[35vw]">
          <h2 className="card-title">Card Title 2</h2>
          <p className="card-description">Card Description 2</p>
        </div>
      </div>
    </div>

</div>
</div>
</div> 
</div> */}

{/* <div className="grid">
  <div className="shadow-md backdrop-blur-lg mt-[-2px] z-10 border-2 m-0 w-full">
    <div className="py-4 md:px-10 px-7">
      <div className="p-6 rounded-md text-white text-center h-[50vh]">
        <h1 className="brown font-bold text-4xl sm:text-xl md:text-2xl">COURSES</h1>

        <div className="card-container flex rounded-lg">
          <div className="card w-[32vw] h-[20vh]"> 
            <img
              src="https://th.bing.com/th/id/OIP.NyM7hZh-dmjy9nHlElY_wgHaEK?pid=ImgDet&rs=1"
              alt="Card Image"
              className="card-image"
            />
            <div className="color card-content">
              <h2 className="card-title">Card Title 1</h2>
              <p className="card-description">Card Description 1</p>
            </div>
          </div>
          <div className="card w-[35vw] h-[25vh]">
            <img
              src="https://www.brainwareuniversity.ac.in/blog/wp-content/uploads/2022/03/banner_mtechcse.jpg"
              alt="Card Image"
              className="card-image"
            />
            <div className="color card-content">
              <h2 className="card-title">Card Title 2</h2>
              <p className="card-description">Card Description 2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}

<div className="grid">
  <div className="shadow-md backdrop-blur-lg mt-[-2px] z-10 border-2 m-0 w-full">
  {/* shadow-md backdrop-blur-lg mt-[-2px] z-10 border-2 m-0 w-full m-4 p-4 w-[100%] */}
    <div className="py-4 md:px-10 px-7">
      <div className="p-6 rounded-md text-white text-center h-[50vh]">
        <h1 className="brown font-bold text-8xl sm:text-2xl md:text-4xl mb-10">COURSES</h1> 
        
        <div className="card-container flex gap-80">
          <div className="card ">
            <img
              src="https://qph.cf2.quoracdn.net/main-qimg-687b4bfeace2dfd905b39bb747179561-pjlq"
              alt="Card Image"
              className="card-image"
            />
            <div className="color card-content">
              <h2 className="card-title">Card Title 1</h2>
              <p className="card-description">Card Description 1</p>
            </div>
          </div>
          <div className="card-2">
            <img
              src="https://mnit.ac.in/dept_cse/images/pgcse-01.jpg"
              alt="Card Image"
              className="card-image"
            />
            <div className="color card-content">
              <h2 className="card-title">Card Title 2</h2>
              <p className="card-description">Card Description 2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



    </>
  );
}


export default Acet;
































































