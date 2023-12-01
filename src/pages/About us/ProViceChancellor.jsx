import React from 'react'
import Carousel from '../../components/Carousel';
const images = [
  "https://eternaluniversity.edu.in/images/activity/AGY01657703203EducationalVisit.jpg",
  "https://eternaluniversity.edu.in/images/activity/AGY11657703203EducationalVisit.jpg",
  "https://eternaluniversity.edu.in/images/event/MI1656487146Conference.jpg",
  "https://eternaluniversity.edu.in/images/activity/AMI1660805268CollegeActivity.jpg",
  "https://eternaluniversity.edu.in/images/event/MI1660799332Camp.jpg",
];

function ProViceChancellor() {
  return (
    <div className="text-center">
      <Carousel images={images} />

      <p className="text-4xl mt-6 mb-6"> Pro Vice Chancellor's Message</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
        <img
          src="https://th.bing.com/th/id/OIP.cm7u3bClm7Tam_D1T3ZXRgAAAA?rs=1&pid=ImgDetMain"
          alt="viceChancellor image"
          className="max-w-1/2 md:max-w-full mx-auto"
        />
        <div className="text-left">
          <p className="text-5xl font-bold">Dr. Amrik Singh Ahluwalia</p>
          <p className='text-4xl mt-6 font-bold text-slate-400'> Pro Vice Chancellor</p>
          <p className='text-4xl mt-6 font-bold'>Eternal University</p>
        </div>
      </div>
      <div className="text-center mt-6">
        <p className="max-w-6xl mx-auto mt-6 mb-6 text-lg" >
          <section className='text-xl mt-6 font-bold '><em>Dear Students and The Parents</em> </section> <br></br>
          It's a great pleasure for me to be a part of the Eternal University as its first Pro Vice Chancellor. I take this opportunity of welcoming students coming from all parts of the country and abroad, joining the university in undergraduate, postgraduate and doctoral programmes. The mission of the university is to transform and empower young women’s talent through cutting edge education in science, technology, education, arts and management amalgamated with spiritual rejuvenation for their holistic development to serve the mankind with compassion and love. The university is also dedicated to impart quality and value based education in the true sense. To do so, the curriculum is updated regularly and rectified by the Industry experts and external experts from the leading national and international universities as well as regulatory authorities. <br />
The Eternal University was established by Act No. 3 of 2009 by the Government of Himachal Pradesh. It is recognized by University Grants Commission (UGC), Nursing Council of India (NCI) and National Council of Teacher Education (NCTE). The university has got accreditation of the National Assessment and Accreditation Council (NAAC) with B Grade and very well ranked in Atal Ranking of Institutions on Innovation Achievements (ARIIA) released in 2020. It is one of the few universities in the world committed to value based higher scientific and technical education as per the vision of Sant Baba Attar Singh Ji and Sant Baba Teja Singh Ji effectively translated and implemented by Baba Iqbal Singh Ji under the Kalgidhar Trust in close collaboration with Akal University, and a network of about 129 CBSE affiliated Akal Academies for promoting rural education, women empowerment and universal brotherhood for eternal world peace, running in the remote areas of Punjab, Haryana, Uttar Pradesh and Himachal Pradesh. <br />
I am happy to share that the university has interesting range of subjects available for the students ranging from Humanities to Basic sciences, Economics, Commerce and Business Management, Education to Music, Nursing and Public Health Care to cater to the needs of the rural and urban girls in higher studies with the help of highly competent and dedicated faculty through multi-disciplinary streams. Students can have the subjects of their choice keeping in view of their interest in Research, Placement opportunities and continue for higher studies in their chosen field. Research on bio-prospecting of medicinal plants and functional foods has been strengthened by establishing state of the art laboratory infrastructure through institutional, State and Central Government assistance. The campus presents an integrated picture of different facilities for the students including Wi fi, Bank, Post Office, Bakery, Modern Laundry, dairy, farmhouses, Gym, playgrounds including tennis court equipped with proper infrastructure and a multi-speciality hospital. I am optimistic that the serenity of the campus alongwith a complex structure of curricular, co-curricular and extra-curricular activities will shape your physical, mental and intellectual growth during your stay here. <br />
We are committed to attract the best students through motivation, merit scholarships, fellowships and tuition fee waivers and create conducive learning environment for value-based education in this unique residential and predominantly women student university. I wish and assure you, on behalf of the University family, that we will help you pursue your objectives of life under the varied social, cultural and economic environment and make the University family proud of your attainments.
<br /><section className='text-xl mt-6 font-bold '><em>Amrik Singh Ahluwalia</em> </section> 
        </p>
      </div>
    </div>
  );
}

export default ProViceChancellor