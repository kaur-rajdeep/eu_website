import React from "react";

const FacultyCard = () => {
  const facultyData = [
    {
      name: "Dr. SASHI TARUN",
      imageSrc: "https://www.lifeprint.com/asl101/signjpegs/f/farmer5.jpg",
      description:
        "He is a phD. in CSE. His research interests are Cloud Systems, Database System, AI, Machine learning. He has joined as h.o.d in the department of CSE in ACET.",
    },
    {
      name: "Er. PRAVEEN RAJPUT",
      imageSrc:
        "https://hips.hearstapps.com/hmg-prod/images/street-portrait-of-a-young-man-using-mobile-phone-royalty-free-image-1018047498-1564431457.jpg?crop=0.668xw:1.00xh;0.226xw,0&resize=640:*",
      description:
        "He has a diverse mix of industry experience as a team leader at Airtel and an educator. He has joined as Assistant professor in CSE department",
    },
    {
      name: "Er. BHASKAR BHARDWAJ",
      imageSrc:
        "https://sourcesofinsight.com/wp-content/uploads/2015/06/image27.png",
      description:
        "He is a Mater of science in CS from California State University, US with a specialization in AI & Data Analytis.He has joined as Assistant professor in CSE department.",
    },
    {
      name: "Er. MANISH KUMAR",
      imageSrc:
        "https://gumlet.assettype.com/filmcompanion%2F2022-11%2F930182b8-0fc6-4ed3-9d16-7f71e256a987%2Fashok.png?format=auto",
      description:
        "He has Masters in CSE and has real-time experience in full stack web application technologies such as React, MongDB and JS .He has joined as an Assistant professor in CSE department.",
    },
    {
      name: "Er. SUMON DEY",
      imageSrc:
        "https://media.istockphoto.com/photos/portrait-of-confident-caucasian-male-teacher-in-classroom-picture-id515264678?k=6&m=515264678&s=170667a&w=0&h=1Y3zqhc30COWabbJlCZRsV01-TAr7lICACaonjnvc_k=",
      description:
        "He has joined us an Assistant Professor in CSE department. A passionate, optimistic, self-motivated, and inspired teaching profession with 4+ years of experience teaching.",
    },
    {
      name: "Er. RAJEEV THAKUR",
      imageSrc:
        "https://insidesources.com/wp-content/uploads/2020/03/bigstock-Portrait-Of-A-Young-Male-Teach-324671239-e1584700649236.jpg",
      description:
        "A passionate, optimistic, self-motivated, and inspired teaching profession with several years of experience teaching.",
    },
  ];

  return (
    <div className="">
      <div className="color grid justify-center">
        <p className="lg:text-5xl md:text-4xl text-3xl text-center text-black lg:mt-12 mt-16 font-[990] mb-20">
          FACULTY
        </p>

        <div className="">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {facultyData.map((faculty, index) => (
              <div
                key={index}
                className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
              >
                <div className="h-60 w-72">
                  <img
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src={faculty.imageSrc}
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className="font-dmserif text-3xl font-bold text-white">
                    {faculty.name}
                  </h1>
                  <p className="mb-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {faculty.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyCard;
