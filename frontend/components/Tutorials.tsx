// import React from "react";
import Marquee from "react-fast-marquee";
// import Lottie from "lottie-react";
// import Illustration from "../../public/illustrations.json"
const Tutorials = () => {
  return (
    <div className=" mt-10">
      <div className="relative bg-black text-white flex justify-center items-center text-6xl brandy-font p-4 border-y-2 border-white h-32">
        <p className=" z-10 bg-black p-3">✦ Game Walkthrough ✦</p>
        <div className="absolute top-0 left-0 w-full h-full flex items-center">
          <Marquee gradient={false} className="text-2xl">
            A Step-by-Step Showcase
          </Marquee>
        </div>
      </div>
      <div className= " pt-10">
        <div className="">
          
        </div>
      </div>
    </div>
  );
};

export default Tutorials;
