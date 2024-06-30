import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

function Aboutus() {
  return (
    <>
      <NavBar />
      <div className="mx-auto max-w-7xl mt-10 md:mt-10"> {/* Decreased top margin for laptop view */}
        <header className="text-center py-8 mx-4 md:mx-0">
          <h1 className="text-3xl font-bold">About Us</h1>
          <p className="mt-4">
            Discover the power of seamless digital solutions with NovaNectar Services Private Limited. Staying true to our motto "Your Problems, Our Solutions", our team offers a variety of services, including website development, digital marketing, graphic design, app development, and premium SEO services to say the least.
          </p>
        </header>

        <section className="flex flex-col md:flex-row items-center justify-between mt-8 md:mt-10"> {/* Decreased top margin for mobile view */}
          <div className="w-full md:w-1/2 pr-8">
            <h2 className="text-2xl font-bold text-blue-900 mx-8">About Our Company</h2>
            <p className="mt-4 mx-8">
              Elevate your business with cutting-edge website design, development, and digital marketing services. We listen, understand, and deliver tailored solutions that exceed expectations. From startups to enterprises, our dedicated team ensures excellence, fostering long-lasting relationships. Trust NovaNectar for your IT and digital needs, and let us propel your success in the digital age.
            </p>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <img
              className="mx-auto md:w-64 h-auto"
              src="/image1.png"
              alt="Company Image"
            />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Aboutus;
