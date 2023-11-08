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
  width: '400px', // Adjust the container width
  margin: '0 auto', // Center the container
};

const cardStyles = {
  height: '450px',
  width: '500px', // Adjust the card width
  textAlign: 'center',
  marginBottom:'20px',
  marginRight: '800px', // Add right margin to separate the cards
};

function NSS() {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRegistrationFormClick = () => {
    setShowRegistrationForm(true);
  };

  const handleFormSubmission = () => {
    console.log('Form submitted');
    setIsSubmitted(true);
    setShowRegistrationForm(false);
  };

  return (
    <div className="container" style={containerStyles}>
      <Carousel images={images} />
      <h1 className="text-center mt-5">NSS</h1>
      <div className="d-flex">
        <div className="card" style={cardStyles}>
          <h4 className="text-center">NSS (National Service Scheme) at Eternal University:</h4>
          <p>
            At Eternal University, special efforts are put in to develop students’ personality through community services. NSS (National Service Scheme) at Eternal University is a voluntary association being run by students themselves under guidance from faculty members. Various NSS camps are organized every year where students undertake various social welfare activities like Tree Plantation and awareness programs on drug de-addiction, AIDS, Swine-flu, and campaign for saving water and cleanliness.
          </p>
        </div>

        <div className="card" style={cardStyles}>
          <h6 className="card-subtitle mb-2">NSS at Eternal University:</h6>
          <p className="card-text text-center">
            At Eternal University, special efforts are put in to develop students’ personality through community services. NSS (National Service Scheme) at Eternal University is a voluntary association being run by students themselves under guidance from faculty members. Various NSS camps are organized every year where students undertake various social welfare activities like Tree Plantation and awareness programs on drug de-addiction, AIDS, Swine-flu, and campaign for saving water and cleanliness.
          </p>
        </div>

        <div className="card" style={cardStyles}>
          <h6 className="card-subtitle mb-2">NSS Objectives:</h6>
          <p className="card-text text-center">
            The main objectives of National Service Scheme (NSS) are:
            <ul>
              <li>Understand the community in which they work.</li>
              <li>Understand themselves in relation to their community.</li>
              <li>Identify the needs and problems of the community and involve them in problem-solving.</li>
              <li>Develop among themselves a sense of social and civic responsibility.</li>
              <li>Utilize their knowledge in finding practical solutions to individual and community problems.</li>
            </ul>
            The Motto of NSS "Not Me But You," reflects the essence of democratic living and upholds the need for self-less service.
          </p>
        </div>
      </div>

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
  );
}

export default NSS;
