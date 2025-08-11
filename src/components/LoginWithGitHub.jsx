import React from "react";
import voltMindLogo from "../assets/images/volt-mind-logo.png"; 
import voltText from "../assets/images/Volt.png";
import TermsAndCondition from "../assets/images/terms&condition.png";
import gitHubLogo from "../assets/images/githubLogo.png";

function LoginWithGitHub() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen overflow-hidden bg-[#0E053E]">
      
      {/* Left side image */}
      <div className="hidden md:block h-full relative">
        <img
          src={voltMindLogo}
          alt="Login Illustration"
          className="w-screen h-screen md:bg-cover bg-center"
        />

        <img
          src={voltText}
          alt="voltMind"
          className="absolute
            left-[50px] top-[30px]
            sm:left-[100px] sm:top-[70px]
            md:left-[150px] md:top-[90px]
            lg:left-[237px] lg:top-[125px]
            w-[clamp(120px,18vw,280px)]"
        />

        <p
          className="absolute
            left-[20px] top-[10px]
            sm:left-[157px] sm:top-[280px]
            text-white poppins"
          id="content"
        >
          Lorem Ipsum is simply dummy text.
        </p>

        <img
          src={TermsAndCondition}
          alt="Terms and Conditions"
          className="absolute bottom-[5%] left-1/2 -translate-x-1/2
            w-[200px] sm:w-[230px] md:w-[273px]
            h-auto"
        />
      </div>

      {/* Right side login form */}
      <div className="grid px-4 md:px-12 bg-[#0E053E] relative">
        <div className="w-full max-w-sm space-y-4 mt-20 mx-auto">
          <h2 className="text-[40px] font-light poppins text-center mb-20 mt-10 text-white" id="login">
            LOGIN
          </h2>

          {/* GitHub logo and text above the email input */}
          <div className="flex items-center gap-2 mb-2 absolute  font-montserrat font-normal text-[18px] mt-10 mb-10" style={{left: "21vw",top: "20vh", width: "clamp(150px, 20vw, 300px)"}}>
            <img src={gitHubLogo} alt="GitHub Logo" className="w-6 h-6" />
            <span className="text-white font-semibold text-lg">GitHub</span>
          </div>

          <div className="space-y-6 mx-auto">
            <input
              type="email"
              placeholder="Enter Mail"
              className="w-full px-4 py-3 border border-gray-300 rounded-[13.96px] focus:outline-none font-montserrat font-normal text-[18px] text-white bg-transparent"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-[13.96px] focus:outline-none font-montserrat font-normal text-[18px] text-white bg-transparent"
            />

            <button className="w-full text-white py-3 rounded-[13.96px] transition bg-(--color-continue)" id="continueBtn">
                    Continue
            </button>
        </div>

          <div className="text-center text-white text-sm">OR</div>

          <button className="w-full border border-gray-400 py-3 rounded-[13.96px] flex items-center justify-center gap-2 text-white bg-[#171717]">
            Login With Mail
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginWithGitHub;
