import React from "react";
import gitHubLogo from "../assets/images/githubLogo.png";
import { useNavigate } from "react-router-dom";
import LeftSection from "./LeftSection";

function LoginPage() {
    const navigate = useNavigate();

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen overflow-hidden bg-[#0E053E]">
        
        {/* Left side image */}
        <LeftSection/>
  
        {/* Right side login form */}
        <div className="grid  px-4 md:px-12  bg-[#0E053E]">
            <div className="w-full max-w-sm space-y-4  mt-20 mx-auto">
                <h2 className="text-[40px] font-light poppins text-center mb-20 mt-10 text-white" id="login">
                    LOGIN
                </h2>

                <div className="space-y-6 mx-auto">
                    <input
                    type="email"
                    placeholder="Enter Mail"
                    className="w-full px-4 py-3 border border-gray-300 rounded-[13.96px] focus:outline-none font-montserrat font-normal text-[18px] text-white"
                    />

                    <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-[13.96px] focus:outline-none font-montserrat font-normal text-[18px]"
                    />

                    <button className="w-full text-white py-3 rounded-[13.96px] transition bg-(--color-continue)" id="continueBtn" onClick={() => navigate("/requestaccess")}>
                    Continue
                    </button>
                </div>

                <div className="text-center text-white text-sm">OR</div>

                <button className="w-full border border-gray-400 py-3 rounded-[13.96px] flex items-center justify-center gap-2 text-white bg-[#171717]" onClick={() => navigate("/loginwithgithub")}>
                    <img
                        src={gitHubLogo}
                        alt='GitHub Logo'
                        className="w-5 h-5 "
                    />
                    GitHub
                </button>
                </div>
            </div>
      </div>
    );
}
  
export default LoginPage;