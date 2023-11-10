import React from 'react';
import Image1 from '../assets/getintouchicons/location_icon.png';
import Image2 from '../assets/getintouchicons/telephone_icon.png';
import Image3 from '../assets/getintouchicons/mail_icon.png';

function GetInTouch() {
  return (
    <div className="grid place-items-center p-2 text-2xl ">
      <div className="bg-white text-center text-3xl py-10 mb-4">
        <p className="lg:text-5xl md:text-4xl text-3xl text-center lg:mt-12 mt-8 font-[990]">
          Get in Touch
        </p>
      </div>
      <div className="grid grid-cols-3 gap-1 mb-10 ">
        <div className="flex flex-col items-center text-center lg:text-xl md:text-sm">
          <img src={Image1} alt="Image 1" className="w-10 h-10 mb-2" />
          <p>Baru Sahib, Distt, near Rajah, Himachal Pradesh 173101</p>
        </div>
        <div className="flex flex-col items-center text-center lg:text-xl md:text-sm">
          <img src={Image2} alt="Image 2" className="w-10 h-10 mb-2" />
          <p>+91-9816400624</p>
        </div>
        <div className="flex flex-col items-center text-center lg:text-xl md:text-sm">
          <img src={Image3} alt="Image 3" className="w-10 h-10 mb-2" />
          <p>contact@eternaluniversity.edu.in</p>
        </div>
      </div>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-white p-12 text-xl shadow-2xl w-70 m-auto">
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
        <div>
          <textarea
            id="message"
            placeholder="Enter your message"
            className="w-full  rounded-3xl h-64 p-4 border border-black rounded box-border"
          />
        </div>
        <button
          type="submit"
          className="mt-4 text-center text-white p-2 text-2xl bg-black rounded-full cursor-pointer col-span-2 mx-40"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default GetInTouch;

