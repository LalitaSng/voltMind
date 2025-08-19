import React from "react";
import { FaArrowUp } from "react-icons/fa";
import VB from "../assets/images/VB.png";

function VoltMindDashboard() {
  return (
    <div className="h-screen w-screen flex bg-[#010A3F]">
      {/* Sidebar */}
      <div className="flex flex-col justify-between p-6 w-64 bg-[#010A3F]">
        <div>
          <div className="flex items-center space-x-2 mb-8">
            {/* Logo */}
            <div className="h-12 w-12 bg-[#0A1E6A] rounded-lg flex items-center justify-center">
              {/* <span className="text-white font-bold text-lg">V3</span> */}
                <img src={VB} alt="Volt Brew Logo" className="h-8 w-8 object-contain" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">
                <span className="text-white">Volt</span>
                <span className="text-cyan-400">Mind</span>
              </h1>
              <p className="text-xs text-gray-400">BY- VOLT<span className="text-cyan-400">BREW</span></p>
            </div>
          </div>
        </div>

        {/* Profile */}
        <div className="flex items-center space-x-3 bg-[#0A1E6A] px-4 py-3 rounded-xl">
          <div className="bg-orange-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold">
            N
          </div>
          <span className="text-white font-medium">Nisha Bhatt</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white rounded-tl-3xl rounded-tr-3xl rounded-br-3xl rounded-bl-3xl p-5 flex flex-col justify-between mr-4 mt-3.5 mb-3.5">
        {/* Top Navigation */}
        <div className="flex justify-end space-x-4">
          {["Blogs", "Docs", "Features"].map((item, index) => (
            <button
              key={index}
              className="px-6 py-1.5 bg-gray-100 rounded-full text-gray-400 font-light text-sm hover:bg-gray-200 transition"
              style={{color: '#6D6D6D', fontFamily: 'Montserrat, sans-serif'}}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Center Content */}
        <div className="flex flex-col items-center justify-center flex-1 -mt-16">
          <h2 className="text-gray-500 text-xl mb-2 font-montserrat" style={{ fontFamily: 'Montserrat, sans-serif', color : '#979797' }}>Welcome To</h2>
          <h1 className="text-7xl font-extrabold mb-2">
            <span className="text-[#091863]" >Volt</span>
            <span className="text-cyan-400">Mind</span>
          </h1>
          <p className="text-[#091863] text-xl font-medium mb-6">
            BY- <span >VOLT<span className="text-cyan-400">BREW</span></span>
          </p>
          <p className="text-[#8F8F8F] text-center max-w-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        {/* Chat Input */}
        <div className="flex items-center w-full max-w-5xl mx-auto bg-gray-100 rounded-3xl px-4 py-6">
          <input
            type="text"
            placeholder="Ask Anything"
            className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-500 pl-2 pb-5"
            style={{ fontFamily: 'Montserrat, sans-serif', color: '#7A7A7A' }}
          />
          <button className="bg-[#091863] p-3 rounded-full text-white flex items-center justify-center" style={{ backgroundColor: '#091863' }}>
            <FaArrowUp />
          </button>
        </div>
      </div>
    </div>
  );
}

export default VoltMindDashboard;
