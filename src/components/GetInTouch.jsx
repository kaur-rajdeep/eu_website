import React from 'react';
import Image1 from '../assets/getintouchicons/location_icon.png';
import Image2 from '../assets/getintouchicons/telephone_icon.png';
import Image3 from '../assets/getintouchicons/mail_icon.png';

function GetInTouch() {
  return (
    <div className='border-2 p-6 shadow-md lg:m-12 m-4 mt-24'>
    <div className="grid place-items-center p-2 text-2xl">
      <div className="bg-white text-center text-3xl mb-4">
        <p className="lg:text-5xl md:text-4xl text-3xl text-center lg:mt-12 font-[990]">
          Get in Touch
        </p>
      </div>

      <div className="grid md:grid-cols-3  gap-1 mb-10">
        <div className="flex flex-col items-center text-center lg:text-xl md:text-sm text-xs">
          <img src={Image1} alt="Image 1" className="w-10 h-10 mb-2" />
          <p>Baru Sahib, Distt, near Rajah,<br/> Himachal Pradesh 173101</p>
        </div>
        <div className="flex flex-col items-center text-center lg:text-xl md:text-sm text-xs">
          <img src={Image2} alt="Image 2" className="w-10 h-10 mb-2" />
          <p>+91-9816400624</p>
        </div>
        <div className="flex flex-col items-center text-center lg:text-xl md:text-sm text-xs">
          <img src={Image3} alt="Image 3" className="w-10 h-10 mb-2" />
          <p>contact@eternaluniversity.edu.in</p>
        </div>
      </div>
      <form className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-white p-12 text-xl m-auto">
        <div className="flex flex-col items-center gap-8">
          <input
            type="text"
            id="name"
            placeholder="Enter your Name"
            className="lg:w-[40vw] md:w-[70vw] w-[85vw] h-12 md:h-auto rounded-3xl p-4 border-2 border-black"
            />
          <input
            type="email"
            id="email"
            placeholder="Enter your Email"
            className="lg:w-[40vw] md:w-[70vw] w-[85vw] h-12 md:h-auto rounded-3xl p-4 border-2 border-black"
            />
          <input
            type="tel"
            id="contactNumber"
            placeholder="Enter your Contact Number"
            className="lg:w-[40vw] md:w-[70vw] w-[85vw] h-12 md:h-auto rounded-3xl p-4 border-2 border-black"
            />
        </div>
        <div className='grid place-items-center -ml-16 md:ml-0'>
          <textarea
            id="message"
            placeholder="Enter your message"
            className="md:w-full w-[85vw] rounded-3xl h-64 p-4 border-2 border-black box-border"
            />
        </div>
        <div className='grid justify-start -ml-40 md:-ml-0' >
        <button
          type="submit"
          className="mt-4 text-center text-white p-2 text-2xl bg-black rounded-full cursor-pointer col-span-2 mx-40 w-[200px]"
          >
          Submit
        </button>
          </div>
      </form>
    </div>
  </div>
  );
}

export default GetInTouch;

