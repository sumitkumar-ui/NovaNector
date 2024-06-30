import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OurAchievements = () => {
  const images = [
    '/google.png',
    '/msme.png',
    '/iso.png',
    '/fb.png',
    '/startup.png',
    '/mca.png',
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: '70px',
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '0px', // Center the image for mobile view
        },
      },
    ],
  };

  return (
    <div className="w-full text-center mt-24 py-3 bg-Blue-3000">
      <h2 className="text-3xl font-bold text-center mb-4 mt-4">Our Achievements</h2>
      <div className="overflow-x-hidden">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="h-64">
              <img src={image} alt={`Achievement ${index + 1}`} className="w-60 h-full object-contain mx-auto" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurAchievements;
