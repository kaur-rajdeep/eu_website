/*import React from 'react'

const Contact = () => {
  return <div className="mt-16">Design by Anandita kaur</div>;

      <img src={'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shiksha.com%2Funiversity%2Feternal-university-himachal-pradesh-other-38025&psig=AOvVaw1uloO-ldNQOlpUHPYcDfA6&ust=1698731360358000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKCnndWJnYIDFQAAAAAdAAAAABAD'} alt="image" />
    
}

export default Contact
import React from 'react';

const Contact = () => {
  return (
    <div className="mt-16">
      Design by Anandita kaur
      <img 
        src={"https://www.google.com/imgres?imgurl=https%3A%2F%2Ftheknowledgereview.com%2Fwp-content%2Fuploads%2F2020%2F07%2FEternal-University.jpg&tbnid=mXSx16jvOa244M&vet=12ahUKEwj53tjLiZ2CAxVDfGwGHbpXDbUQMygEegQIARBo..i&imgrefurl=https%3A%2F%2Ftheknowledgereview.com%2Feternal-university-empowering-women-through-comprehensive-education-and-holist-development%2F&docid=BjKMHzRKla4qyM&w=900&h=426&q=eternal%20university%20baru%20sahib&ved=2ahUKEwj53tjLiZ2CAxVDfGwGHbpXDbUQMygEegQIARBo"}
        alt="image"
      />
    </div>
  );
};

export default Contact;
import React from 'react';

const Contact = () => {
  return (
    <div className="mt-16">
     
      <img
        src={'https://images.shiksha.com/mediadata/images/1623762631php42TSYI.jpeg'}
        alt="image"
        style={{ width: '1000px', height: '200px' }} // Set width and height here
      />
    </div>
  );
};

export default Contact;*/
/*import React from 'react';

const Contact = () => {
  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <img
        src="https://images.shiksha.com/mediadata/images/1623762631php42TSYI.jpeg"
        alt="image"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div className="mt-16">Design by Anandita kaur</div>
    </div>
  );
};

export default Contact;*/
/*import React from 'react';

const Contact = () => {
  return (
    
    <div className="mt-16">
      
      <img
        src={'https://images.shiksha.com/mediadata/images/1623762631php42TSYI.jpeg'}
        
      
      className='h-[60vh] w-[100vw]'/>
      
        </div>
        
  );
};

export default Contact;*/

/*<div className="h-screen" style={{ backgroundColor: 'rgba(215, 121, 59, 1)' }}>

</div>

        <div className="p-4">
          Design by Anandita kaur
        
        </div>*/
       /* import React, { useState } from 'react';

const images = [
  'https://images.shiksha.com/mediadata/images/1623762631php42TSYI.jpeg',
  'https://eternaluniversity.edu.in/images/nss/1.jpg',
  'https://eternaluniversity.edu.in/images/event/MI1656487146Conference.jpg',
  'https://eternaluniversity.edu.in/images/activity/AMI1660805268CollegeActivity.jpg',
  'https://eternaluniversity.edu.in/images/activity/AMI1671255818TrainingProgram.jpg'
];

const Contact = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="mt-16">
      <div className='h-[60vh] w-[100vw] relative overflow-hidden'>
        <img src={images[currentIndex]} alt={`carousel-${currentIndex}`} className='h-full w-full object-cover' />
        <button onClick={prevImage} className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded'>
          Previous
        </button>
        <button onClick={nextImage} className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded'>
          Next
        </button>
      </div>
    </div>
  );
};

export default Contact;*/
import React, { useState, useEffect } from 'react';

const images = [
  'https://images.shiksha.com/mediadata/images/1623762631php42TSYI.jpeg',
  'https://eternaluniversity.edu.in/images/nss/1.jpg',
  'https://eternaluniversity.edu.in/images/event/MI1656487146Conference.jpg',
  'https://eternaluniversity.edu.in/images/activity/AMI1660805268CollegeActivity.jpg',
  'https://eternaluniversity.edu.in/images/event/MI1660799332Camp.jpg'
];

const Contact = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds (3000 milliseconds)

    return () => {
      clearInterval(interval); // Cleanup interval on component unmount
    };
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  return (
    <div className="mt-16">
      <div className='h-[60vh] w-[100vw] relative overflow-hidden'>
        <img src={images[currentIndex]} alt={`carousel-${currentIndex}`} className='h-full w-full object-cover' />
      </div>

      <div className="grid place-items-center">
        <div className="color shadow-md backdrop-blur-lg mt-[-2px] z-10 border-2 m-0 w-[100%] ">
          <div className="md:flex items-center justify-center py-4 md:px-10 px-7"> 
            <div className="color p-6 rounded-md text-white text-center">
              <h1 className="font-bold text-4xl sm:text-xl md:text-2xl">Important Contacts Of Eternal University</h1>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

