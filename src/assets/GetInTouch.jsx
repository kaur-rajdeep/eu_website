import React from 'react';
import Image1 from '../assets/get_in_touch/location_icon.png';
import Image2 from '../assets/get_in_touch/telephone_icon.png';
import Image3 from '../assets/get_in_touch/mail_icon.png';


function GetInTouch() {
  return (
    <div className="grid place-items-center p-5 text-2xl">
      <div className="bg-white text-center text-3xl py-10 mb-4">Get in Touch</div>
      <div className="flex items-center mb-10 gap-20">
        {/* Image 1 */}
        <img src={Image1} alt="Image 1" className="w-20 h-20" />
        {/* Image 2 */}
        <img src={Image2} alt="Image 2" className="w-20 h-20" />
        {/* Image 3 */}
        <img src={Image3} alt="Image 3" className="w-20 h-20" />
      </div>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-white p-20 text-xl shadow-2xl w-70 m-auto ">
        <div className="flex flex-col items-center gap-8">
          <input
            type="text"
            id="name"
            placeholder="Enter your Name"
            className="w-full rounded-3xl p-4 border border-black rounded"
          />
          <input
            type="email"
            id="email"
            placeholder="Enter your Email"
            className="w-full  rounded-3xl p-4 border border-black rounded"
          />
          <input
            type="tel"
            id="contactNumber"
            placeholder="Enter your Contact Number"
            className="w-full rounded-3xl p-4 border border-black rounded"
          />
        </div>
        <div >
          <textarea
            id="message"
            placeholder="Enter your message"
            className="w-full  rounded-3xl h-64 p-4 border border-black rounded box-border"
          />
        </div>
        <button
          type="submit"
          className="mt-20 text-center text-white p-4 text-2xl bg-black rounded-full cursor-pointer self-center col-span-2 md:col-auto"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default GetInTouch;
