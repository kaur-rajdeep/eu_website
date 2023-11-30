import React from "react";
import SyllabusCard from "../components/SyllabusCard";
import Datesheet_Data from "../store/Datesheet_Data";
function Datesheet() {
  const cards = Datesheet_Data.map((item) => {
    return <SyllabusCard key={item.id} {...item} />;
  });
  return (
    <>
      <div className="mt-20 font-bold text-5xl  text-center mb-10">
        DateSeet
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 mb-10">{cards}</div>
    </>
  );
}

export default Datesheet;
