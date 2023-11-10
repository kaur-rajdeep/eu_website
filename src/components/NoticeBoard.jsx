import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NoticeBoard = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-5 sm:mx-10 md:mx-20 lg:mx-28 mt-5">
      <Slider {...settings} className="mx-auto">
        {Array.isArray(images) &&
          images.map((card, index) => (
            <div key={index} className="shadow-lg p-4 border-2 border-black rounded-lg">
              <img
                src={card.imageUrl}
                alt={`Image ${index + 1}`}
                className="w-full h-64  border-2 border-black rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-4">{card.name}</h3>
              <p>{card.description}</p>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default NoticeBoard;
