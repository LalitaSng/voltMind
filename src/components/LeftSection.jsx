import React from "react";
import TermsAndCondition from "../assets/images/terms&condition.png";
import Rectangle from "../assets/images/Rectangle.png";
import innerLeft from "../assets/images/left.png";
import innerRight from "../assets/images/right.png";

export default function VoltMindLanding() {
  return (
    <div
      className="relative flex flex-col text-white hidden md:block " 
      style={{
        backgroundImage: `url(${Rectangle})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Decorative inner images */}
      <img 
        src={innerLeft} 
        alt="Inner left" 
        className="absolute left-[0%] bottom-[10%] w-24 sm:w-32 md:w-40 lg:w-48 object-contain z-10  "
      
      />
      <img 
        src={innerRight} 
        alt="Inner right" 
         className="absolute right-[0%] bottom-[5%] w-24 sm:w-32 md:w-40 lg:w-48 object-contain z-10  "
      />

      {/* Optional overlay to darken background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-indigo-900/50 to-slate-900/70 z-0"></div>

      {/* Main content */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 drop-shadow-2xl">
                Volt<span className="text-cyan-400">Mind</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-200 tracking-widest uppercase drop-shadow-lg">
                BY- VOLT<span className="text-cyan-400">BREW</span>
            </p>
        </div>

        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight px-2 drop-shadow-2xl">
                Lorem Ipsum is <br className="hidden sm:block" /> simply dummy text.
             </h2>
        </div>
      </div>


      <img src={TermsAndCondition}
        alt="Terms and conditions"
        className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[200px] sm:w-[230px] md:w-[273px]            h-auto"
      />
    </div>
  );
}
