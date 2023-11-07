import React from "react";
import "./Colleges_Card.css";

function Colleges_Card(props) {
  return (
    <>
      <div className="card rounded-lg backdrop-blur-lg shadow-lg shadow-neutral-600  mt-[25%]">
        <div className="imgBx shadow-slate-400">
          <img src={props.imageUrl} alt="college_image" />
        </div>
        <p className="text-center font-semibold text-lg -mt-10">{props.name}</p>
        <div className="content">
          <p className="text-center font-medium text-sm p-2">
            {props.description}
          </p>
        </div>
      </div>
    </>
  );
}

export default Colleges_Card;
