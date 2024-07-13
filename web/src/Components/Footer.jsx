import React, { useState } from 'react';
import axios from 'axios';
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube, FaTelegram, FaEnvelope, FaMobileAlt, FaMapMarkerAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = async () => {
    try {
      const response = await axios.post('http://localhost:5000/subscribe', { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error subscribing');
    }
  };

  return (
    <div className="bg-gray-200 w-full">
      <div className="w-full py-8 flex flex-wrap items-center justify-between px-0">
        {/* Logo */}
        <div className="w-full md:w-1/4 mb-4 md:mb-0 md:pr-8 mt-4 ml-6">
          <img src="logo3.jpeg" alt="Logo" className="h-14 -mx-1" />
        </div>
        {/* Social Icons */}
        <div className="flex flex-wrap items-center text-blue-1000 px-4 md:px-0">
          <a href=" https://www.instagram.com/novanectar_services_pvt.ltd?igsh=MXRoaHN3MGM5czYxZw==" className="mr-4 text-4xl text-blue-500" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://t.me/novanectarservices" className="mr-4 text-4xl text-blue-500" target="_blank" rel="noopener noreferrer">
            <FaTelegram />
          </a>
          <a href="https://www.facebook.com/NovaNectarServicesPvt.Ltd?mibextid=ZbWKwL" className="mr-4 text-4xl text-blue-500" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://youtube.com/@novanectarservicespvt.ltd.?si=5Fm64BpLZfMLrVLX" className="mr-4 text-4xl text-blue-500" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
          <a href=" https://www.linkedin.com/company/novanectar/ " className="mr-4 text-4xl text-blue-500" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <hr className="border-gray-400 w-full" />
      <div className="w-full py-4 flex flex-wrap px-4 md:px-0">
        {/* Columns */}
        <div className="w-full md:w-1/4 mb-4 md:mb-0 md:pr-8 mt-4">
          <h3 className="font-bold">NovaNectar Services Pvt. Ltd.</h3>
          <p className="mt-3">IT Services and IT Consulting, 11-50 employees, Headquarters Dehradun, Uttarakhand, Type Public Company.</p>
          <div className="flex items-center mb-2 mt-4">
            <FaMapMarkerAlt className="mr-2 text-blue-500" />
            <p>GMS Road Dehradun <br /> Uttarakhand, India</p>
          </div>
          <div className="flex items-center mb-2 mt-4">
            <FaMobileAlt className="mr-2 text-blue-500" />
            <p className="mb-0">+91 8979891703<br />+91 8979891705</p>
          </div>
          <div className="flex items-center mb-2 mt-4">
            <FaEnvelope className="mr-2 text-blue-500" />
            <p>info@novanectar.co.in</p>
          </div>
        </div>
        <div className="w-full md:w-1/4 mb-4 md:mb-0 md:pr-8 mt-4">
          <h3 className="font-bold">Quick Links</h3>
          <ul className="space-y-3 md:space-y-3 mt-3">
          <NavLink to="/" exact className="font-weight-extrabold mr-3 nav-link" activeClassName="active-link">Home</NavLink>
                        <NavLink to="/AboutUstwo" className="font-weight-bold mr-3 nav-link" activeClassName="active-link">About</NavLink>
                        <NavLink to="/Services" className="font-weight-bold mr-3 nav-link" activeClassName="active-link">Services</NavLink>
                        <NavLink to="/Internship" className="font-weight-bold mr-3 nav-link" activeClassName="active-link">Internship</NavLink>
                        <NavLink to="/ContactUs" className="font-weight-bold mr-3 nav-link" activeClassName="active-link">Contact</NavLink>
                        <NavLink to="/OurAchievementstwo" className="font-weight-bold mr-3 nav-link" activeClassName="active-link">Our Achievements</NavLink>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-4 md:mb-0 md:pr-8 mt-4">
          <h3 className="font-bold">Our Features</h3>
          <ul className="space-y-3 md:space-y-3 mt-3">
            <li>Why Choose Us</li>
            <li>Our Achievements</li>
            <li>Terms Of Services</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mt-4">
          <h3 className="font-bold">Subscriptions</h3>
          <p className="mt-3">With Our Skills Put Together, You Get An Ensemble Capable Of Doing Anything And Everything Your Brand Needs. Subscribe Here To Get Our Latest Updates.</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 px-2 py-1 mt-2 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="bg-blue-500 text-white px-4 py-1 mt-2 w-full" onClick={handleSubscribe}>Subscribe</button>
          {message && <p className="mt-2">{message}</p>}
        </div>
      </div>
      <div className="w-full text-center py-4 px-4 md:px-0">
        <p className="font-bold text-black">© {new Date().getFullYear()} NovaNectar Services Pvt. Ltd. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
