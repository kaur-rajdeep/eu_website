import React from "react";
import SyllabusCard from "../components/SyllabusCard";
import QuestionPaper from "../store/QuestionPaper";
function Question() {
  const cards = QuestionPaper.map((item) => {
    return <SyllabusCard key={item.id} {...item} />;
  });
  return (
    <>
      <div className="mt-20 font-bold text-5xl  text-center mb-10">
        Question Paper
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 mb-10">{cards}</div>
    </>
  );
}


export default Question;


