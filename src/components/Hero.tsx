import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative h-screen bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url(/dp.webp)",
        backgroundSize: "40%",
        backgroundPosition: "left top",
        overflow: "hidden",
        borderRadius: "40%",
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 h-full">
        {/* Left Empty Space */}
        <div className="hidden lg:block"></div>

        {/* Text Content */}
        <div className="flex flex-col mb-9 justify-center items-center lg:items-start text-center lg:text-left">
          <h1 className="text-[30px] sm:text-[70px] lg:text-[100px] font-extrabold leading-tight text-blue-500">
            <p className="text-[30px] text-red-500 animate-pulse">I AM</p>
            <p className="text-primary animate-pulse">Sadia </p>
            <p className="bg-cover text-[30px] animate-typing overflow-hidden whitespace-nowrap border-r-4 border-blue-500">
              A FrontEND Developer.
            </p>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
