// import React, { useState } from 'react';

// const JobPostPage = () => {
//   const [isAddJobOpen, setAddJobOpen] = useState(false);

//   const toggleAddJobDropdown = () => {
//     setAddJobOpen(!isAddJobOpen);
//   };

//   const JobCard = ({ job }) => {
//     const applyLink = job.applyLink;

//     return (
//       <div className="flex flex-col mb-8 sm:mb-0 w-full sm:w-1/2 md:w-1/3 p-2">
//         <div
//           className="shadow-[#294d61] shadow-inner p-4 rounded-lg text-center transition duration-300 ease-in-out transform hover:scale-105 mt-2"
//           style={{ width: '400px' }}
//         >
//           <div className="mb-4">
//             <h1 className="text-2xl font-bold mb-1 mt-8">{job.jobTitle}</h1>
//             <p className="mb-2 mt-4 text-left">{job.jobDescription}</p>

//             <div className="mb-2 mt-4 text-left">
//               <div className="mb-1 mt-12">
//                 <strong>Location :</strong> {job.location}
//               </div>
//               <div className="mb-1">
//                 <strong>Experience :</strong> {job.experience}
//               </div>
//             </div>
//           </div>
//           <div className="mt-4 flex justify-center">
//             {applyLink && (
//               <a href={applyLink} target="_blank" rel="noopener noreferrer">
//                 <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Apply</button>
//               </a>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const JobCards = ({ jobsData, style }) => {
//     return (
//       <div className={`color grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8`} style={style}>
//         {jobsData.map((job, index) => (
//           <JobCard key={index} job={job} />
//         ))}
//       </div>
//     );
//   };

//   const jobData = [
//     {
//       jobTitle: 'GM - SCM & Data Science',
//       jobDescription: 'Manage and analyze data in order to build data driven business insights and high impact data models to generate significant business value',    
//       location:'Delhi',
//       experience:'13-15yr',
//       applyLink: 'https://www.naukri.com/job-listings-gm-scm-data-science-mastermind-network-delhi-ncr-13-to-15-years-301123012270?src=discovery_trendingWdgt_homepage_srch&sid=17014031135127033&xp=1&px=1',
//     },
//     {
//       jobTitle: 'Data Scientist',
//       jobDescription: 'As a Data Scientist, you will work on a broad range of cutting-edge data analytics and machine learning problems across a variety of industries',
//       location: 'Hyderabad/Secunderabad, Chennai, Bangalore/Bengaluru',
//       experience: '1-5yr',
//       applyLink: 'https://www.naukri.com/job-listings-senior-analyst-data-scientist-data-science-tiger-analytics-hyderabad-secunderabad-chennai-bangalore-bengaluru-1-to-5-years-241123500123?src=discovery_trendingWdgt_homepage_srch&sid=17014031135127033&xp=2&px=1',
//     },
//     {
//       jobTitle: 'Data Science Consultant',
//       jobDescription: 'he role is with the decision science and insights team. This team is responsible for connecting key data sources to generate insights, identify consumer needs and respond to those needs at scale.',
//       location: 'Gurugram,Haryana, Bengaluru,Karnataka',
//       experience: '2-4yr',
//       applyLink: 'https://www.naukri.com/job-listings-data-science-consultant-2-4-years-bangalore-or-gurgaon-xtage-technologies-gurugram-haryana-bengaluru-karnataka-2-to-4-years-291123005687?src=discovery_trendingWdgt_homepage_srch&sid=17014031135127033&xp=4&px=1',
//     },
//     // Add more job data as needed
//   ];

//   return (
//     <div>
//       {/* Job Section */}
//       <div style={{ padding: '20px' }}>
//         <h1>Job Posts</h1>

//         {/* Job Cards */}
//         <JobCards jobsData={jobData} style={{ backgroundColor: '#f0f0f0' }} />
//       </div>

//       {/* Custom Button at Top Right */}
//       <button
//         style={{
//           position: 'fixed',
//           top: '70px',
//           right: '5px',
//           height: '100px',
//           width: '100px',
//           backgroundColor: '#4CAF50',
//           color: 'white',
//           borderRadius: '50%',
//           border: 'none',
//           cursor: 'pointer',
//         }}
//       >
//         Add Job
//       </button>
//     </div>
//   );
// };

// export default JobPostPage;



import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
//componnet function
const JobPostPage = () => {
 
  const JobCard = ({ job }) => {
    const applyLink = job.applyLink;//job object
 //component renders a job card
    return (
      <div className="flex flex-col mb-8 sm:mb-0 w-full sm:w-1/2 md:w-1/3 p-2">
        <div
          className="shadow-[#294d61] shadow-inner p-4 rounded-lg text-center transition duration-300 ease-in-out transform hover:scale-105 mt-2"
          style={{ width: '400px' }}
        >
          <div className="mb-4">
            <h1 className="text-2xl font-bold mb-1 mt-8">{job.jobTitle}</h1>
           
            <p className="mb-2 mt-4 text-left">{job.jobDescription}</p>

            <div className="mb-2 mt-4 text-left">
              <div className="mb-1 mt-12">
                <strong>Location :</strong>
                
              </div>
              <div className="mb-1">
                <strong>Experience :</strong> {job.experience}
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            {applyLink && (
              <a href={applyLink} target="_blank" rel="noopener noreferrer">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Apply</button>
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  const JobCards = ({ jobsData, style }) => {
    return (
      <div className={`color grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8`} style={style}>
        {jobsData.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    );
  };

  const jobData = [
    {
      jobTitle: 'GM - SCM & Data Science',
      jobDescription: 'Manage and analyze data in order to build data driven business insights and high impact data models to generate significant business value',
      location: 'Delhi',
      experience: '13-15yr',
      applyLink: 'https://www.naukri.com/job-listings-gm-scm-data-science-mastermind-network-delhi-ncr-13-to-15-years-301123012270?src=discovery_trendingWdgt_homepage_srch&sid=17014031135127033&xp=1&px=1',
    },
    {
      jobTitle: 'Data Scientist',
      jobDescription: 'As a Data Scientist, you will work on a broad range of cutting-edge data analytics and machine learning problems across a variety of industries',
      location: 'Hyderabad/Secunderabad, Chennai, Bangalore/Bengaluru',
      experience: '1-5yr',
      applyLink: 'https://www.naukri.com/job-listings-senior-analyst-data-scientist-data-science-tiger-analytics-hyderabad-secunderabad-chennai-bangalore-bengaluru-1-to-5-years-241123500123?src=discovery_trendingWdgt_homepage_srch&sid=17014031135127033&xp=2&px=1',
    },
    {
      jobTitle: 'Data Science Consultant',
      jobDescription: 'The role is with the decision science and insights team. This team is responsible for connecting key data sources to generate insights, identify consumer needs and respond to those needs at scale.',
      location: 'Gurugram,Haryana, Bengaluru,Karnataka',
      experience: '2-4yr',
      applyLink: 'https://www.naukri.com/job-listings-data-science-consultant-2-4-years-bangalore-or-gurgaon-xtage-technologies-gurugram-haryana-bengaluru-karnataka-2-to-4-years-291123005687?src=discovery_trendingWdgt_homepage_srch&sid=17014031135127033&xp=4&px=1',
    },
    // Add more job data as needed
  ];

  return (
    <div>
      {/* Job Section */}
      <div style={{ padding: '20px' }}>
        <h1>Job Posts</h1>

        {/* Job Cards */}
        <JobCards jobsData={jobData} style={{ backgroundColor: '#f0f0f0' }} />
      </div>

      {/* Custom Button at Top Right with Link to Login */}
      <Link to="/login"> {/* Specify the correct path to your login page */}
        <button
          style={{
            position: 'fixed',
            top: '70px',
            right: '5px',
            height: '100px',
            width: '100px',
            backgroundColor: '#4CAF50',
            color: 'white',
            borderRadius: '50%',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Add Job
        </button>
      </Link>
    </div>
  );
};

export default JobPostPage;
