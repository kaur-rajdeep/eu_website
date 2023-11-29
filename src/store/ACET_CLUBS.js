import image1 from '../assets/Clubs_Images/img1.jpeg'
import image2 from '../assets/Clubs_Images/img2.jpeg';
import image3 from '../assets/Clubs_Images/img3.jpeg';
import image4 from '../assets/Clubs_Images/img4.jpeg';

const ClubsData = [
    {
      id: 1,
      imageUrl: image1,
      name: "Club Name 1",
      description: "Description for Club 1.",
    },
    {
      id: 2,
      imageUrl: image2,
      name: "Club Name 2",
      description: "Description for Club 2.",
    },
    {
      id: 3,
      imageUrl: image3,
      name: "Club Name 3",
      description: "Description for Club 3.",
    },
    {
      id: 4,  // Changed to a unique identifier
      imageUrl: image4,
      name: "Club 4",
      description: "Description for Club 4.",
    },
  ];
  
  const ClubsDescription = [
    {
      title: "HACKATHON CLUB",
      content: "The HACKATHON CLUB is dedicated to organizing and participating in hackathons, fostering creativity, innovation, and collaboration among members.",
    },
    {
      title: "CODING CLUB",
      content: "The CODING CLUB aims to enhance coding skills, host coding competitions, and provide a platform for members to explore and excel in the world of programming.",
    },
    {
      title: "RESEARCH CLUB",
      content: "The RESEARCH CLUB focuses on promoting research activities, encouraging members to undertake research projects, and fostering a culture of inquiry and exploration.",
    },
  ];
  
  export { ClubsData, ClubsDescription };
  