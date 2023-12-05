import React from 'react';

function CardData(props) {
  return (
    <div className="shadow-[#294d61] shadow-inner p-4 rounded-lg text-center transition duration-300 ease-in-out transform hover:scale-105 h-[400px] mt-16">
      <div className="mb-4">
        <img
          src={props.image}
          alt={`profile-${props.name}`}
          className="w-44 h-44 mx-auto mb-2 object-cover rounded-full"
        />
        <div className="mb-2 pb-2">
          <h1 className="text-2xl font-bold mb-1 mt-8">{props.name}</h1>
          <div className="mb-2 mt-4 text-left">
            <div className="mb-1 mt-12">
              <strong>Email:</strong>{' '}
              <a href={`mailto:${props.email}`} className="text-blue-500">
                {props.email}
              </a>
            </div>
            <div className="mb-1">
              <strong>Phone:</strong> {props.contact}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardData;
