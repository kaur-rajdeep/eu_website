import React from "react";
import { Link } from "react-router-dom";

const AcetClubs = () => {
  const clubsData = [
    {
      name: "HACKATHON CLUB",
      imageSrc:
        "https://media.istockphoto.com/id/1484758991/photo/hackathon-concept-the-meeting-at-the-white-office-table.webp?b=1&s=170667a&w=0&k=20&c=xooe7oIRS4fbyaDSWtEF90rSZ9M7k4Fl1qR08j8Bd7U=",
    },
    {
      name: "CODING CLUB",
      imageSrc:
        "https://images.unsplash.com/photo-1599666505327-7758b44a9985?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29kaW5nJTIwZm9yJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "RESEARCH CLUB",
      imageSrc:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVzayUyMHJlc2VhcmNofGVufDB8fDB8fHww",
    },
  ];

  return (
    <div className="grid justify-center mb-16">
      <p className="lg:text-5xl md:text-4xl text-3xl text-center lg:mt-12 mt-16 font-[990] mb-6">
        CLUBS
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {clubsData.map((club, index) => (
          <div
            key={index}
            className="rounded-lg m-2 lg:w-[80%] border-2 border-[#294d61] bg-transparent p-4">
            <div>
              <img className="rounded-t-lg" src={club.imageSrc} alt="" />
            </div>
            <div className="">
              <div>
                <h5 className="mb-2 text-lg font-bold text-[#294d61] p-2">
                  {club.name}
                </h5>
              </div>
              <Link
                to={`/ACET_CLUBS`} // Use a unique identifier for each club, e.g., the club name
                className="p-2 text-sm font-medium text-center text-white  bg-[#05161A] rounded-lg hover:bg-[#294d61] focus:outline-none">
                Know more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcetClubs;
