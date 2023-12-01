import React from "react";
import SyllabusCard from "../components/SyllabusCard";
import syllabus_data from "../store/syllabus_data";

function Syllabus() {
  const cards = syllabus_data.map((item) => {
    return <SyllabusCard key={item.id} {...item} />;
  });
  return (
    <>
      <div className="mt-20 font-bold text-5xl  text-center mb-10">
        Syllabus
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 mb-10">{cards}</div>
    </>
  );
}

export default Syllabus;