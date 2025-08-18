import React from "react";
import gitHubLogo from "../assets/images/githubLogo.png";
import { useNavigate } from "react-router-dom";
import LeftSection from "./LeftSection";

function LoginWithGitHub() {
    const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen overflow-hidden bg-[#0E053E]">
      
      {/* Left side image */}
      <LeftSection/>

      {/* Right side login form */}
      <div className="grid px-4 md:px-12 bg-[#0E053E] relative">
        <div className="w-full max-w-sm space-y-4 mt-20 mx-auto">
          <h2 className="text-[40px] font-light poppins text-center mb-20 mt-10 text-white" id="login">
            LOGIN
          </h2>

          {/* GitHub logo and text above the email input */}
          <div className="flex items-center gap-2 mb-10 absolute  font-montserrat font-light text-[18px] mt-10 " style={{left: "21.5vw",top: "20vh", width: "clamp(150px, 20vw, 300px)"}}>
            <img src={gitHubLogo} alt="GitHub Logo" className="w-6 h-6" />
            <span className="text-white font-semibold text-lg">GitHub</span>
          </div>

          <div className="space-y-6 mx-auto">
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full px-4 py-3 border border-gray-300 rounded-[13.96px] focus:outline-none font-montserrat font-normal text-[18px] text-white bg-transparent"
              id="gitHubLogo"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-[13.96px] focus:outline-none font-montserrat font-normal text-[18px] text-white bg-transparent"
            />

            <button className="w-full text-white py-3 rounded-[13.96px] transition bg-(--color-continue)" id="continueBtn" onClick={() => navigate("/requestaccess")}>
                    Continue
            </button>
        </div>

          <div className="text-center text-white text-sm">OR</div>

          <button className="w-full border border-gray-400 py-3 rounded-[13.96px] flex items-center justify-center gap-2 text-white bg-[#171717]"  onClick={() => navigate("/login")}>
            Login With Mail
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginWithGitHub;
