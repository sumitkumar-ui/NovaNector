import React, { useState } from 'react';
import NavBar from '../Components/NavBar';
import Footer from './Footer';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://novanector.onrender.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccessMessage('Data submitted successfully');
        setFormData({ name: '', contact: '', email: '', message: '' });
      } else {
        setSuccessMessage('Error submitting data');
      }
    } catch (error) {
      setSuccessMessage('Error submitting data');
    }
  };

  return (
    <>
      <NavBar />
      <div className="w-full text-center mt-0 py-3 bg-Blue-3000">
        <h2 className="text-3xl md:text-3xl font-bold mb-10 mt-8">Contact Us</h2>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-4">
            {/* Google Map location */}
            <iframe
              className="w-full h-64 md:h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.507785521921!2d78.0035169750208!3d30.308071206032984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092be94375e729%3A0xc160311fe8cb82d6!2sNovaNectar%20Services%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1715827180523!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="w-full md:w-1/2 p-4">
            {/* Contact Form */}
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
                  Contact
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="contact"
                  type="text"
                  placeholder="Contact"
                  value={formData.contact}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4 my-0">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder="Your Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-900 hover:bg-Blue-1000 text-white font-bold py-2 px-4 rounded-full"
                  type="submit"
                >
                  Submit
                </button>
              </div>
              {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
            </form>
          </div>
        </div>
      </div>
      <Footer/>
      
    </>
  );
};

export default ContactUs;
