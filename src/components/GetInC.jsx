import React from 'react';
import Image1 from '../assets/getintouchicons/location_icon.png';
import Image2 from '../assets/getintouchicons/telephone_icon.png';
import Image3 from '../assets/getintouchicons/mail_icon.png';

const GetInC = () => {
  return (
    <>
      <p className="text-3xl text-center m-2 font-[990]">Get in Touch</p>
      <div className="border-2 mr-4 shadow-md mt-8 mb-4">
        <br />
        {/* Add a break tag here */}
        <div className="grid place-items-center text-2xl ">
          <div className="bg-white text-center text-3xl mb-4"></div>

          <div className="grid gap-1 mb-10">
            <div className="flex flex-col items-center text-center text-sm">
              <img src={Image1} alt="Image 1" className="w-8 h-8 mb-2" />
              <p>Baru Sahib, Distt, near Rajah, Himachal Pradesh 173101</p>
            </div>
            <div className="flex flex-col items-center text-center text-sm">
              <img src={Image2} alt="Image 2" className="w-8 h-8 mb-2" />
              <p>+91-9816400624</p>
            </div>
            <div className="flex flex-col items-center text-center text-sm">
              <img src={Image3} alt="Image 3" className="w-8 h-8 mb-2" />
              <p>contact@eternaluniversity.edu.in</p>
            </div>
          </div>
          <form className="grid gap-4 bg-white text-lg m-auto">
          <div className="flex flex-col items-center gap-4 lg:w-full">
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full md:w-3/4 lg:w-full h-10 rounded-full p-2 border-2 border-black font-bold"
            />

            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full md:w-3/4 lg:w-full h-10 rounded-full p-2 border-2 border-black font-bold"
            />

            <input
              type="tel"
              id="contactNumber"
              placeholder="Your Contact Number"
              className="w-full md:w-3/4 lg:w-full h-10 rounded-full p-2 border-2 border-black font-bold"
            />
          </div>
          <div className="grid place-items-center lg:w-full">
            <textarea
              id="message"
              placeholder="Your message"
              className="w-full rounded-3xl h-32 p-2 border-2 border-black box-border font-bold"
            />
          </div>
          <div className="grid justify-start -ml-40 md:-ml-0 lg:w-full">
            <button
              type="submit"
              className="mt-2 text-center text-white p-2 text-lg bg-black rounded-full cursor-pointer col-span-2 mx-40 w-[200px] mb-2"
            >
              Submit
            </button>
          </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default GetInC;
