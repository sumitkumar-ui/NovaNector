import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from './Footer';

const servicesData = [
  {
    id: 1,
    image: 'service1.png',
    title: 'Website Development',
    content: 'Our skilled developers will help your visualization of the ideal website to meet reality. We will bring your website design to life utilizing the latest technologies and coding practices to build a robust and scalable website. Whether your desire a basic informational site or a complex e-commerce platform, we have the expertise to deliver a custom solution tailored to your needs. Our focus on clean code, fast load timing and responsive design to ensure your website not only performs optimally but also provides an exceptional user experience.'
  },
  {
    id: 2,
    image: 'service2.png',
    title: 'App Development',
    content: 'Revolutionize your business with our cutting-edge app development services. From concept to launch, we specialize in creating custom mobile solutions that drive engagement and enhance user experience. Whether you’re looking to streamline operations, boost customer loyalty, or enter new markets, our team of experienced developers is dedicated to turning your ideas into reality. Don’t miss out on the opportunity to elevate your brand and stay ahead of the competition. Contact us today to kickstart your app journey and unlock endless possibilities for your business!',
  },
  {
    id: 3,
    image: 'service6.png',
    title: 'Digital Marketing',
    content: 'Skyrocket your online presence with our comprehensive digital marketing services. From strategic social media campaigns to targeted PPC advertising, we specialize in driving traffic, generating leads, and maximizing ROI for businesses of all sizes. Our team of experts harnesses the latest trends and technologies to deliver results-driven solutions tailored to your specific goals. Don’t let your competitors steal the spotlight – seize the opportunity to dominate your industry and captivate your audience. Get in touch today to ignite your digital marketing strategy and take your business to new heights!',
  },
  {
    id: 4,
    image: 'service4.png',
    title: 'Graphic Design',
    content: 'Transform your brand with our dynamic graphic design services. From eye-catching logos to compelling brand identities, we specialize in crafting visually striking assets that resonate with your audience. Whether you’re aiming to revamp your image or launch a new campaign, our team of skilled designers is dedicated to bringing your vision to fruition. Stay ahead of the curve and make a lasting impact on your customers. Reach out today to unleash the potential of outstanding design for your business!',
  },
  {
    id: 5,
    image: 'service5.png',
    title: 'SEO',
    content: 'Drive your business to the top of search engine results with our dynamic SEO services. From optimizing website content to strategic link-building, we employ cutting-edge techniques to boost your online visibility and attract more organic traffic. Stay ahead of the competition and dominate your industry with our tailored SEO solutions. Ready to unlock the full potential of your online presence? Contact us today and let’s propel your business to new heights together!',
  },
  {
   id: 6,
    image: 'service3.png',
    title: 'Hosting/Official Mail',
    content: 'We Offer Reliable And Secure Hosting Solutions Along With Professional Email Services To Empower Your Online Presence And Streamline Communication. Whether You are A Startup, A Small Business, Or A Large Enterprise, Our Hosting And Official Email Services Are Designed To Provide A Robust Foundation For Your Digital Infrastructure.',

  },
];

const Services = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto text-center mt-12 mb-4">
        <h2 className="text-3xl md:text-3xl font-bold mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map(service => (
            <div key={service.id} className="bg-Blue-3000 border  rounded p-6 shadow-lg mx-2">
              <img src={service.image} alt={service.title} className="w-full h-40 object-contain mb-4" />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.content}</p>
            </div>
          ))}
        </div>
      </div>
     <Footer/>
    </>
  );
};

export default Services;
