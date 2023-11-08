import React from "react";

const FacultyCard = () => {
  const facultyData = [
    {
      name: "Er. SASHI TARUN",
      imageSrc: "https://www.lifeprint.com/asl101/signjpegs/f/farmer5.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
    },
    {
      name: "Er. PRAVEEN RAJPUT",
      imageSrc:
        "https://everydaypower.com/wp-content/uploads/2015/10/Become-A-More-Positive-Person-With-These-10-Actions.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
    },
    {
      name: "Er. BHASKAR BHARDWAJ",
      imageSrc:
        "https://sourcesofinsight.com/wp-content/uploads/2015/06/image27.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
    },
    {
      name: "Er. MANISH KUMAR",
      imageSrc:
        "https://gumlet.assettype.com/filmcompanion%2F2022-11%2F930182b8-0fc6-4ed3-9d16-7f71e256a987%2Fashok.png?format=auto",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
    },
    {
      name: "Er. SUMON DEY",
      imageSrc:
        "https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
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
                  <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {faculty.description}
                  </p>
                  <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                    See More
                  </button>
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
