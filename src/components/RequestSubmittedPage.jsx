import React from "react";
import circle from "../assets/images/circle.png";
import teenyTick from "../assets/images/teenyTick.png";
import requestSubmitted from "../assets/images/requestSubmitted.png";
import downloadLocally from "../assets/images/Download Locally.png";
import notifyLater from "../assets/images/notifyLater.png";
import LeftSection from "./LeftSection";


function RequestAccessPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen overflow-hidden bg-[#0E053E]">
      
      {/* Left side */}
      <LeftSection/>

      
      <div className="relative flex flex-col items-center justify-center px-4 md:px-12 bg-[#0E053E] space-y-8 mx-auto max-w-md">
        <div className="relative w-[120px] h-[120px] mb-2 -mt-35">
          <img 
            src={circle} 
            alt="Circle"
            className="w-full h-full object-contain"
          />
          <img 
            src={teenyTick}  // image to go inside
            alt="Inner Image"
            className="absolute inset-0 w-[50%] h-[50%] object-contain m-auto"
          />
        </div>
  
        <img
          src={requestSubmitted} // import or define image2 above
          alt="Image 2"
          className="w-[250px] h-[68px] object-contain mb-6"
        />

        <img 
          src={notifyLater}
          alt="Notify Later"
          className="w-[350px] h-[80px] object-contain mb-6"
        />

        <img
          src={downloadLocally}
          alt="Image 3"
          className="absolute bottom-[10%] left-1/2 -translate-x-1/2
          w-[170px] h-auto" 
        />
      </div>
    </div>
  );
}

export default RequestAccessPage;

