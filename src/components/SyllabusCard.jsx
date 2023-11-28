import React from "react";

function SyllabusCard(props) {
  return (
    <>
      <div className="flex flex-col items-center p-4 border border-4-black m-2 rounded-md shadow-lg mt-6">
        <p className="text-xl font-semibold">{props.title}</p>
        <button className="border-2-black border p-2 rounded-md bg-slate-200 m-2">
          Explore
        </button>
      </div>
    </>
  );
}

export default SyllabusCard;
