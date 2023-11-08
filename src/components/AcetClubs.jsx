import React from "react";

const AcetClubs = () => {
  const clubsData = [
    {
      name: "HACKATHON CLUB",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjPaMD9wh_YkQWNdp-jbGcc4IMIr4TNLFw_rRdCaUTE8datj84UeKkG3YQUfIu2y7jzzU&usqp=CAU",
    },
    {
      name: "CODING CLUB",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjPaMD9wh_YkQWNdp-jbGcc4IMIr4TNLFw_rRdCaUTE8datj84UeKkG3YQUfIu2y7jzzU&usqp=CAU",
    },
    {
      name: "RESEARCH CLUB",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjPaMD9wh_YkQWNdp-jbGcc4IMIr4TNLFw_rRdCaUTE8datj84UeKkG3YQUfIu2y7jzzU&usqp=CAU",
    },
  ];

  return (
    <div className="grid justify-center mb-16">
      <p className="brown lg:text-5xl md:text-4xl text-3xl text-center lg:mt-12 mt-16 font-[990] mb-6">
        CLUBS
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {clubsData.map((club, index) => (
          <div
            key={index}
            className="rounded-lg m-2 lg:w-[80%] border-2 border-[#294d61] bg-transparent p-4"
          >
            <div>
              <img className="rounded-t-lg" src={club.imageSrc} alt="" />
            </div>
            <div className="">
              <div>
                <h5 className="mb-2 text-lg font-bold text-[#294d61] p-2">
                  {club.name}
                </h5>
              </div>
              <a
                href="#"
                className="p-2 text-sm font-medium text-center text-white  bg-[#05161A] rounded-lg hover:bg-[#294d61] focus:outline-none"
              >
                Know more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcetClubs;
