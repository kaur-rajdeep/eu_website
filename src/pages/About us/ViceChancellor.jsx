import React from 'react';
import Carousel from '../../components/Carousel';

const images = [
  "https://eternaluniversity.edu.in/images/activity/AGY01657703203EducationalVisit.jpg",
  "https://eternaluniversity.edu.in/images/activity/AGY11657703203EducationalVisit.jpg",
  "https://eternaluniversity.edu.in/images/event/MI1656487146Conference.jpg",
  "https://eternaluniversity.edu.in/images/activity/AMI1660805268CollegeActivity.jpg",
  "https://eternaluniversity.edu.in/images/event/MI1660799332Camp.jpg",
];



function ViceChancellor() {
  return (
    <div className="text-center">
      <Carousel images={images} />

      <p className="text-4xl lg:text-5xl mt-6 mb-6 text-center font-extrabold ">
        Vice Chancellor's Message
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
        <img
          src="https://th.bing.com/th/id/OIP.hMwBGxuqy_2YYxTGS3zMbwAAAA?rs=1&pid=ImgDetMain"
          alt="viceChancellor image"
          className="max-w-1/2 md:max-w-full mx-auto"
        />
        <div className="lg:text-left">
          <p className="text-5xl font-bold">Dr. Davinder Singh</p>
          <p className="text-4xl mt-6 font-bold text-slate-400">
            Vice Chancellor
          </p>
          <p className="text-4xl mt-6 font-bold">Eternal University</p>
        </div>
      </div>
      <div className="text-center mt-6">
        <p className="max-w-6xl mx-auto mt-6 mb-6 text-lg">
          <section className="text-xl mt-6 font-bold ">
            {" "}
            From Vice-Chancellor's Desk
          </section>{" "}
          <br></br>
          The Eternal University, Baru Sahib is the visual manifestation of the
          divine vision of Sant Attar Singh Ji, who had envisioned 100 years ago
          of this seat of higher learning. The vision statement enunciated by
          the divine master 10 decades ago, objectified creation of outstanding
          human beings who could spread the message of love and spiritual
          brotherhood not only in this country, but the entire world. ‘Sanskar
          Nirman’ is the ‘Mantra’ which the founding fathers had proposed to be
          the foundation on which the educational edifice of this institution
          was to rest. This women’s university is ensconced in the captivating
          Divine Baru Valley with deep woods and fresh water springs making the
          ambience conducive for spiritual rejuvenation. The campus, with its
          beautiful diversity of students from all over the country, provides
          ample opportunity to young girls to express themselves uninhibitedly
          and evolve into outstanding human beings who have nerves of steel and
          at the same time possess unlimited patience, forbearance, tolerance
          and love for the entire humanity.
        </p>
      </div>
    </div>
  );
}

export default ViceChancellor;

