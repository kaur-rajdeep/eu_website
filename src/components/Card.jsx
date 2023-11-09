
import React from 'react';

function Card({ title, content }) {
  return (
    <div className=" bg-[#072e33]  lg:w-10/12 md:w-full sm:w-full p-8 rounded-3xl shadow-md border-2 border-indigo-500">
      <h4 className="text-center text-white text-lg lg:text-xl font-bold mb-2">{title}</h4>
      <p className="text-sm lg:text-base">{content}</p>
    </div>
  );
}

export default Card;



