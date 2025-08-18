import React from "react";
import LeftSection from "./LeftSection";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/images/LockImage.png";
import image2 from "../assets/images/AccessRestriced.png";
import image3 from "../assets/images/Download Locally.png";


function RequestAccessPage() {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen overflow-hidden bg-[#0E053E]">
      
      {/* Left side */}
      
      <LeftSection/>
      
      <div className="relative flex flex-col items-center justify-center px-4 md:px-12 bg-[#0E053E] space-y-10 mx-auto max-w-md">
        <img
          src={image1} // import or define image1 above
          alt="Image 1"
          className="w-[120px] h-[120px] object-contain mb-2 -mt-25"
        />
  
        <img
          src={image2}
          alt="Image 2"
          className="w-[250px] h-[68px] object-contain mb-6"
        />
  
        <button
          onClick={() => navigate("/requestSubmitted")} // replace with your handler
          className="w-[350px] h-[50px]  py-3 bg-blue-600 rounded-[12px] text-white text-lg font-semibold hover:bg-blue-700 transition mb-10"
          id="requestAccessBtn"
        >
          Request Access
        </button>
  
        <img
          src={image3}
          alt="Image 3"
          className="absolute bottom-[10%] left-1/2 -translate-x-1/2
          w-[170px] h-auto" 
        />
      </div>
    </div>
  );
}

export default RequestAccessPage;
