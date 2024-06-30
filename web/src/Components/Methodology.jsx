import React from 'react';

const Methodology = () => {
  return (
    <div className="w-full text-center mt-24 py-3 bg-Blue-3000 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 mt-8">Our Methodology</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <img src="Group2.png" alt="Requirement Gathering" className="w-40 h-32 object-cover mb-4" />
          <h3 className="text-xl font-bold mb-2">Requirement Gathering</h3>
          <p className="text-gray-700 px-4">We begin by thoroughly understanding your business objectives, target
                                audience and meeting specific requirements. Our
                                team conducts comprehensive discussions and assessments to gather all the pivotal
                                information needed to ensure that our
                                solutions satisfy your unique demands.</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="Group3.png" alt="Analysis" className="w-32 h-32 object-cover mb-4" />
          <h3 className="text-xl font-bold mb-2">Analysis</h3>
          <p className="text-gray-700 px-4">Once we have gathered all the requirements, we conduct a thorough
                                analysis to determine the best approach for achieving
                                your goals.This includes assessing technical feasibility, identifying potential
                                challenges and determining the scope of
                                your project. Our goal is to develop a roadmap that adumbrates the steps required to
                                deliver a successful output.</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="Group4.png" alt="Development" className="w-60 h-32 object-cover mb-4" />
          <h3 className="text-xl font-bold mb-2">Development</h3>
          <p className="text-gray-700 px-4">Once we have a solid understanding of your requirements and a detailed
                                plan in place, our team of skilled developers
                                gets to work bringing your vision and reality on the same plane. We make use of the
                                latest technologies to build robust,
                                scalable and high-performance solutions. Throughout the development process, we will
                                hold active discussions with you to
                                provide timely updates and gather your valuable feedback to ensure that the final output
                                aligns with your objectives.</p>
        </div>
      </div>
    </div>
  );
};

export default Methodology;
