import React from 'react';
import Map from './Map';

const AddressAndMap = () => {
  return (
    <div className="color text-black text-center py-16 mt-[-50px] mt-8">
      <h2 className="text-2xl font-bold mb-4">Address And Map</h2>
      <div className="inline-block" style={{ marginLeft: '100px', width: '10%' }}>
        <br />
        <br />
      </div>
      <div className="flex flex-wrap justify-center items-start">
        <Map />
      </div>
    </div>
  );
};

export default AddressAndMap;
