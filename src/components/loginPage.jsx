import React from "react";
import voltMindLogo from "../assets/images/volt-mind-logo.png"; 
import voltText from "../assets/images/Volt.png";
import TermsAndCondition from "../assets/images/terms&condition.png";
import gitHubLogo from "../assets/images/githubLogo.png";

function LoginPage() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen overflow-hidden bg-[#0E053E]">
        
        {/* Left side image */}
        <div className="hidden md:block h-full relative">
        {/* Background/Main image */}
            <img
                src={voltMindLogo}
                alt="Login Illustration"
                className= "w-screen h-screen bg-auto md:bg-cover bg-center"
            />

        {/* Positioned overlay image */}
            <img
                src={voltText}
                alt="voltMind"
                className="absolute
                    left-[50px] top-[40px]      // base screen
                    sm:left-[100px] sm:top-[80px]  // small screens
                    md:left-[150px] md:top-[100px] // medium
                    lg:left-[237px] lg:top-[135px] "// large screens
            />

            <p className="absolute left-[20px] top-[40px] sm:left-[157px] sm:top-[311px] text-white poppins" id="content">
             Lorem Ipsum is simply dummy text.
            </p>


            <img
                src={TermsAndCondition}
                alt="Terms and Conditions"
                className="absolute
                   absolute bottom-[5%] left-1/2 -translate-x-1/2

                    w-[200px] sm:w-[230px] md:w-[273px]
                    h-auto" 
            />
        </div>
  
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

                    <button className="w-full text-white py-3 rounded-[13.96px] transition bg-(--color-continue)" id="continueBtn">
                    Continue
                    </button>
                </div>

                <div className="text-center text-white text-sm">OR</div>

                <button className="w-full border border-gray-400 py-3 rounded-[13.96px] flex items-center justify-center gap-2 text-white bg-[#171717]">
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