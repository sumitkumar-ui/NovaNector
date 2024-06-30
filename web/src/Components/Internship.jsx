import React from 'react';
import NavBar from '../Components/NavBar'
import Footer from './Footer';

const internships = [
  {
    id: 1,
    image: '/webdevelopment.gif',
    title: 'Web Development',
    content: 'Develop functional websites for clients, utilizing modern web technologies and frameworks, refining coding skills and understanding user interface design principles.    ',
  },

  {
    id: 2,
    image: '/android.gif',
    title: 'App Development',
    content: 'Tackle live app projects, utilizing iOS and Android frameworks to develop functional mobile applications, fostering adaptability and proficiency in modern development tools.    ',
  },

  {
    id: 3,
    image: '/data.webp',
    title: 'Data Science',
    content: 'Work with real datasets, applying statistical analysis and machine learning algorithms to derive actionable insights, fostering problem-solving skills and domain expertise.',
  },

  {
    id: 4,
    image: '/java.avif',
    title: 'Java Programing',
    content: ' Contribute to live Java projects, developing scalable software solutions and integrating frameworks, enhancing coding proficiency and understanding software development lifecycle. ',
  },


  {
    id: 5,
    image: '/c++.avif',
    title: 'C++ Programing',
    content: 'Contribute to software projects, optimizing code efficiency and performance, honing programming skills and understanding software architecture in real-world applications.    ',
  },


  {
    id: 6,
    image: '/python.avif',
    title: 'Python Programing',
    content: 'Collaborate on Python projects, implementing solutions for web development, automation, and data manipulation, refining coding skills and versatility in Python applications.',
  },

  {
    id: 7,
    image: '/uiux.gif',
    title: 'UI/UX Design',
    content: 'Design interfaces for live projects, balancing aesthetics and usability, refining user-centered design skills and adapting to project requirements for optimal user experience.',
  },

  {
    id: 8,
    image: '/ai.webp',
    title: 'Artificial Intelligence',
    content: ' Solve real-world problems using AI techniques, designing and implementing intelligent systems, cultivating innovation and practical experience in AI applications.',
  },

  {
    id: 9,
    image: '/machine.gif',
    title: 'Machine Learning',
    content: ' Apply algorithms to real datasets, solving complex problems and refining predictive models, fostering critical thinking and practical experience in data analysis and model deployment.',
  },

  {
    id: 10,
    image: '/200.webp',
    title: 'Full Stack Development',
    content: 'Engage in real-world projects, applying knowledge of front-end and back-end technologies to create scalable web applications, enhancing problem-solving skills and industry experience.',
  },


  {
    id: 11,
    image: '/webdevelopment.gif',
    title: 'DSA (C++) Internship',
    content: 'Master data structures and algorithms with our C++ internship, honing problem-solving skills essential for modern software development.',
  },


  {
    id: 12,
    image: '/digital.webp',
    title: ' Digital Marketing',
    content: 'Implement strategies on live campaigns, optimizing SEO, SEM, and social media channels, refining marketing skills and understanding audience engagement for measurable results. ',
  },

  {
    id: 13,
    image: '/cyber.webp',
    title: 'Cyber Security',
    content: 'Address real security challenges, detecting vulnerabilities and implementing countermeasures, developing a proactive mindset and hands-on experience in protecting digital assets.',
  },

  {
    id: 14,
    image: '/graphic.webp',
    title: 'Graphic Designer',
    content: 'Execute creative projects, translating concepts into compelling visuals and branding materials, refining design skills and adapting to client requirements for impactful communication.',
  },

  {
    id: 15,
    image: '/datascience.webp',
    title: 'Data Science',
    content: 'Work with real datasets, applying statistical analysis and machine learning algorithms to derive actionable insights, fostering problem-solving skills and domain expertise.',
  },

  {
    id: 16,
    image: '/webdevelopment.gif',
    title: ' IT Sales',
    content: 'Engage in real sales scenarios, identifying client needs and proposing technology solutions, refining communication and negotiation skills for successful client engagement.',
  },

  {
    id: 17,
    image: '/dev.webp',
    title: 'DevOps Internship',
    content: 'Streamline software development with our DevOps internship, focusing on automation, cloud computing, and collaboration tools for efficient deployment pipelines.',
  },

  {
    id: 18,
    image: '/block.webp',
    title: 'Blockchain Internship',
    content: 'Explore blockchain potential in our internship, delving into smart contracts, distributed ledger technology, and blockchain development for innovative solutions.',
  },

  {
    id: 19,
    image: '/word.webp',
    title: 'WordPress Development Internship',
    content: 'Immerse yourself in the world of WordPress, tackling real projects to master customization, plugin development, and advanced techniques. Elevate your skills with industry-relevant experience and expert guidance.',
  },

  {
    id: 20,
    image: '/content.webp',
    title: 'Content Writing Internship',
    content: 'Hone your writing skills through real-world projects, crafting compelling content across various platforms. Learn industry standards, techniques, and strategies for effective communication and engagement',
  },

 

  
  
];

const Internship = () => {
  return (
    <>
    <NavBar/>
    <div className="bg-Blue-3000 w-full text-center mt-0 py-3">
      <h1 className="text-3xl font-bold mb-10 mt-10 text-center ">Internship Positions</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {internships.map((internship) => (
          <div key={internship.id} className="p-4 rounded-lg overflow-hidden flex flex-col justify-center items-center mb-10">
            <img
              src={internship.image}
              alt={internship.title}
              className="w-56 h-56 object-cover rounded-lg mb-4 border-none"
            />
            <h2 className="text-xl font-bold mb-2">{internship.title}</h2>
            <p className="text-sm mb-4 flex text-center">{internship.content}</p>
            <button className="bg-blue-900 hover:bg-Blue-1000 text-white font-bold py-2 px-4 rounded-full">
              Apply 
            </button>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
   
    </>
  );
};

export default Internship;

