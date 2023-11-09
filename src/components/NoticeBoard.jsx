import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlidingCards = ({ images }) => {
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
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="mx-28 mt-5">
      {Array.isArray(images) && images.map((card, index) => (
        <div key={index} className="shadow-lg p-4">
          <img
            src={card.imageUrl}
            alt={`Image ${index + 1}`}
            className="w-full h-64 object-cover"
          />
          <h3 className="text-lg font-semibold mt-4">{card.name}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </Slider>
  );
};

export default SlidingCards;