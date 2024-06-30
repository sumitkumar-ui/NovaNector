import React from 'react';

const WhyChoose = () => {
  return (
    <>
    <div className="flex flex-wrap  items-center justify-center mt-10">
      <div className="w-full md:w-1/2 p-4">
      <h1 className="text-4xl md:text-3xl font-bold text-black">Why Choose Us</h1>
        <h2 className="text-2xl md:text-2xl font-bold text-black">We’re NovaNectar Services Pvt. Ltd.</h2>
        <p className="mt-4">Choose us for unparalleled IT and digital solutions that meets your unique goals and objectives. With a relentless commitment to excellence, we deliver cutting-edge technology paired with personalized service. Our team of experts ensure seamless integration, innovative problem-solving and round the clock support. Wanting to elevate your business? Trust in our experiences, dedication and sheer passion for helping you bridge the gap between expectation and results.</p>
        <div className="relative flex mt-8  justify-center">
          <div className="flex flex-col items-center justify-center text-center mr-4 mb-4 md:mb-0 md:w-1/5">
            <div className="w-12 h-12 bg-Blue-1000 rounded-full flex items-center justify-center">
              <i className="fas fa-dollar-sign text-white"></i> {/* Competitive Pricing */}
            </div>
            <span className="text-xs mt-2">Competitive Pricing</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center mr-4 mb-4 md:mb-0 md:w-1/5">
            <div className="w-12 h-12 bg-Blue-1000 rounded-full flex items-center justify-center">
              <i className="fas fa-heart text-white"></i> {/* Customer Satisfaction */}
            </div>
            <span className="text-xs mt-2">Customer Satisfaction</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center mr-4 mb-4 md:mb-0 md:w-1/5">
            <div className="w-12 h-12 bg-Blue-1000 rounded-full flex items-center justify-center">
              <i className="fas fa-laptop-code text-white"></i> {/* Skilled IT Expert */}
            </div>
            <span className="text-xs mt-2">Skilled IT Expert</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center mr-4 ml-2 mb-4 md:mb-0 md:w-1/5">
            <div className="w-12 h-12 bg-Blue-1000 rounded-full flex items-center justify-center">
              <i className="fas fa-medal text-white"></i> {/* Best Service */}
            </div>
            <span className="text-xs mt-2">Best Service</span>
          </div>
          
        </div>
      </div>
      <div className="w-full md:w-1/2 p-4 flex justify-center">
        <img src="/choose.png" alt="Image description" className="w-2/3 md:w-2/3 h-auto " />
      </div>
    </div>

    <div>
   
     
     </div>
        

    </>

    
  );
}

export default WhyChoose;
