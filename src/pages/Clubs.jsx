import React, { useState } from 'react';
import Carousel from '../components/Carousel';
import RegistrationForm from '../components/RegistrationForm';
const images = [
  'https://eternaluniversity.edu.in/images/activity/AGY01657703203EducationalVisit.jpg',
  'https://eternaluniversity.edu.in/images/activity/AGY11657703203EducationalVisit.jpg',
  'https://eternaluniversity.edu.in/images/event/MI1656487146Conference.jpg',
  'https://eternaluniversity.edu.in/images/activity/AMI1660805268CollegeActivity.jpg',
  'https://eternaluniversity.edu.in/images/event/MI1660799332Camp.jpg',
];

const containerStyles = {
  width: '400px',
  margin: '0',
};

function Clubs() {
    const [showRegistrationForm, setShowRegistrationForm] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false); // Add state to track form submission
  
    const handleRegistrationFormClick = () => {
      setShowRegistrationForm(true);
    };
  
    const handleFormSubmission = () => {
      // Perform form submission logic here (if any)
      console.log('Form submitted');
      setIsSubmitted(true); // Set the submitted state to true
      setShowRegistrationForm(false); // Hide the registration form after submission
    };
  return (
    <div className='container' style={containerStyles}>
      <Carousel images={images} />
      <h1 className='text-center '>Clubs</h1>

      {!showRegistrationForm || isSubmitted ? (
        <div className='text-center'>
          <button className=' color btn btn-primary  mr-40 w-60 h-14 rounded-md text-xl font-bold pt-2 ' onClick={handleRegistrationFormClick}>
            Registration Form
          </button>
        </div>
      ) : (
        <RegistrationForm onSubmit={handleFormSubmission} />
      )}
    </div>
  )
}

export default Clubs