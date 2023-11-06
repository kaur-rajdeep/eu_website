import React from "react";
import "./Colleges_Card.css";

function Colleges_Card() {
  return (
    <>
      <div className="card rounded-lg backdrop-blur-lg shadow-lg shadow-neutral-600">
        <div className="imgBx">
          <img
            src="https://www.targetadmission.com/img/colleges/optimized/600/IMG-1-503761281.jpg"
            alt="college_image"
          />
        </div>
        <p className="text-center font-semibold text-xl -mt-10">
          Name of College
        </p>
        <div className="content">
          <p className="text-center font-medium text-lg p-2">
            discription about college
          </p>
        </div>
      </div>
    </>
  );
}

export default Colleges_Card;
