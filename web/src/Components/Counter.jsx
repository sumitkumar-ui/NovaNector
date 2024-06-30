import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer'; // Import useInView
import '@fortawesome/fontawesome-free/css/all.css'; // Import the Font Awesome CSS

const Counter = () => {
  const [hours, setHours] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);

  // Use useInView to detect when the component is in view
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  const targetHours = 1501;
  const targetProjects = 50;
  const targetClients = 38;

  useEffect(() => {
    let start = 0;
    const animateCounter = () => {
      if (start < targetHours) {
        setHours(start++);
      }
      if (start < targetProjects) {
        setProjects(start + 1);
      }
      if (start < targetClients) {
        setClients(start + 3);
      }
      // Reset the counters if they reach the target
      if (hours === targetHours && projects === targetProjects && clients === targetClients) {
        start = 0;
      }
    };

    // Start the animation when the component is in view
    const interval = setInterval(animateCounter, 10);
    return () => clearInterval(interval);
  }, [inView]);

  const renderIcon = (icon) => {
    return <i className={`fas ${icon} text-white text-4xl lg:text-6xl`} />;
  };

  return (
    <div
      ref={ref} // Attach the ref to the component
      className="relative flex flex-wrap justify-center items-center"
      style={{
        backgroundImage: "url('backgroundimage.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        height: '70vh',
      }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-5xl mx-auto space-y-4 md:space-y-0">
        <div className="bg-black bg-opacity-50 border-white border-4 p-4 text-white text-center font-bold flex flex-col items-center justify-center rounded-lg w-36 h-36 md:w-56 md:h-56 md:mr-auto">
          {renderIcon('fa-clock')}
          <span className="text-xl md:text-3xl lg:text-4xl">{hours}</span>
          <span className="text-sm md:text-base lg:text-lg">working hours</span>
        </div>
        <div className="bg-black bg-opacity-50 border-white border-4 p-4 text-white text-center font-bold flex flex-col items-center justify-center rounded-lg w-36 h-36 md:w-56 md:h-56 mx-auto">
          {renderIcon('fa-check')}
          <span className="text-xl md:text-3xl lg:text-4xl">{projects}</span>
          <span className="text-sm md:text-base lg:text-lg">completed projects</span>
        </div>
        <div className="bg-black bg-opacity-50 border-white border-4 p-4 text-white text-center font-bold flex flex-col items-center justify-center rounded-lg w-36 h-36 md:w-56 md:h-56 md:ml-auto">
          {renderIcon('fa-smile')}
          <span className="text-xl md:text-3xl lg:text-4xl">{clients}</span>
          <span className="text-sm md:text-base lg:text-lg">happy clients</span>
        </div>
      </div>
    </div>
  );
};

export default Counter;
