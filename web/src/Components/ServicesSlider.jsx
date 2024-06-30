import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    image: 'service1.png',
    title: 'Website Development',
    description: 'Our skilled developers will help your visualization of the ideal website to meet reality. We will bring your website.',
  },
  {
    id: 2,
    image: 'service2.png',
    title: 'App Development',
    description: 'Revolutionize your business with our cutting-edge app development services. From concept to launch, we specialize.',
  },
  {
    id: 3,
    image: 'service3.png',
    title: 'Hosting/Official Mail',
    description: 'We Offer Reliable And Secure Hosting Solutions Along With Professional Email Services To Empower Your Online Presence And Streamline.',
  },
  {
    id: 4,
    image: 'service4.png',
    title: 'Graphic Design',
    description: 'Transform your brand with our dynamic graphic design services. From eye-catching logos to compelling brand identities, we specialize in the functioning.',
  },
  {
    id: 5,
    image: 'service5.png',
    title: 'SEO',
    description: 'Drive your business to the top of search engine results with our dynamic SEO services.',
  },
  {
    id: 6,
    image: 'service6.png',
    title: 'Digital Marketing',
    description: 'Skyrocket your online presence with our comprehensive digital marketing services. From strategic social media.',
  },
];

const ServicesSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          padding: '0 20px', // Padding on mobile view
        },
      },
    ],
  };

  return (
    <div className="px-4">
      <h2 className="text-2xl flex justify-center font-bold mb-4 mt-4">Our Services</h2>
      <Slider {...settings}>
        {services.map((service) => (
          <div key={service.id} className="px-2 md:px-4">
            <div className="bg-Blue-3000 flex flex-col md:flex-row items-center shadow-md rounded-lg p-4 md:p-6 w-full h-60 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className={`object-cover mb-4 md:mb-0 ${service.id === 5 || service.id === 6 ? 'w-24 md:w-32' : 'w-32'}`}
              />
              <div className="w-full text-center md:text-left">
                <h3 className="text-base font-bold mb-1">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex justify-center mt-8 mb-8">
        <Link to="/Services">
          <button className="bg-blue-900 hover:bg-Blue-1000 text-white font-bold py-2 px-4 rounded-full">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServicesSlider;
