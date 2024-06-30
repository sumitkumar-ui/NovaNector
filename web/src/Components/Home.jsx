import React from 'react';
import ServicesSlider from './ServicesSlider';
import Methodology from './Methodology';
import Counter from './Counter';
import Whychoose from '../Components/Whychoose';
import OurAchievements from './OurAchievements';
import AboutUs from '../Components/Aboutus';
import NavBar from '../Components/NavBar';
import Circle from './Circle';
import ContactUstwo from './ContactUstwo';
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-wrap bg-Blue-3000">
        <div className="w-full md:w-1/2 p-4 mt-6 md:mt-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-Blue-1000">
            Welcome to <span className="border-b-2 border-blue-900 text-blue-900">NovaNectar Services!</span>
          </h1>
          <p className="text-lg md:text-8xl mb-4 font-bold mt-4 md:mt-10">
            <span className='text-Blue-1000'>Your</span> <span className='text-blue-900'>Problems,</span> <span className='text-blue-900'> Our </span> <span className='text-Blue-1000'>Solutions.</span>
          </p>
          <p className="text-base md:text-lg mb-4">
            Elevate and Transform your business to Digital with our Innovative Ideas
          </p>
          <button className="bg-blue-900 hover:bg-Blue-1000 text-white font-bold py-2 px-4 rounded-full">
            Explore
          </button>
        </div>
        <div className="w-full md:w-1/2 p-4 mt-4 md:mt-0">
          <video className="w-full" autoPlay loop muted>
            <source src="ff.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <ServicesSlider />
      <AboutUs />
      <Methodology />
      <Counter />
      <Whychoose />
      <ContactUstwo />
      <Circle/>
      <OurAchievements />
      <Footer/>
      
    </>
  );
};

export default Home;
