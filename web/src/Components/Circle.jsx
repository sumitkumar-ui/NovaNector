import React from 'react';
import './Circle.css';

const Circle = () => {
  return (
    <div className="container mx-auto text-center mt-12 mb-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Technologies Stack</h2>
      <div className="circle-container">
        <div className="big-circle">
          <div className="small-circle center">
            <img src="/circularlogo.jpeg" alt="Center" />
          </div>
          <div className="small-circle top">
            <img src="/html-5.svg" alt="Top" />
          </div>
          <div className="small-circle right">
            <img src="/angularjs.svg" alt="Right" />
          </div>
          <div className="small-circle bottom">
            <img src="/css-3.svg" alt="Bottom" />
          </div>
          <div className="small-circle left">
            <img src="/figma.svg" alt="Left" />
          </div>
          <div className="small-circle one">
            <img src="/flutter.svg" alt="One" />
          </div>
          <div className="small-circle two">
            <img src="/javascript.svg" alt="Two" />
          </div>
          <div className="small-circle three">
            <img src="/laravel.svg" alt="Three" />
          </div>
          <div className="small-circle four">
            <img src="/magento.svg" alt="Four" />
          </div>
          <div className="small-circle five">
            <img src="/react-js.svg" alt="Five" />
          </div>
          <div className="small-circle six">
            <img src="/java-2.svg" alt="Six" />
          </div>
          
          
        </div>
      </div>
      </div>
   
  );
};

export default Circle;