import React from "react";
import SyllabusCard from "../components/SyllabusCard";
import TimeTable from "../store/TimeTable";
function Timetable() {
  const cards = TimeTable.map((item) => {
    return <SyllabusCard key={item.id} {...item} />;
  });
  return (
    <>
      <div className="mt-20 font-bold text-5xl  text-center mb-10">
        Time Table
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 mb-10">{cards}</div>
    </>
  );
}


export default Timetable;
