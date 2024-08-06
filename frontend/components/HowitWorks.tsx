import React from "react";

const HowitWorks = () => {
  return (
    <div>
      <div className=" bg-black text-white flex justify-center text-6xl animate-pulse brandy-font p-4 border-2 border-white">
        ✦ How It Works ✦
      </div>
      <div className="  md:flex justify-center gap-20 pt-16">
        {/* <div className=" md:flex justify-center items-center pt-10"> */}
        <div className="card w-[450px] h-[250px] flex justify-center items-center relative">
          <div className="bg bg-transparent hover:bg-orange-400 w-[440px] h-[240px] flex justify-center items-center relative">
            <div className="items-center p-4">
              <div>
                <p className=" brandy-font text-5xl md:text-7xl text-center">
                  1
                </p>
                <p className=" text-2xl font-semibold brandy-font text-center">
                  Generate Unique Key
                </p>
                <p className="text-center">
                  Use our dynamic wallet integration to securely connect your
                  preferred crypto wallet
                </p>
              </div>
            </div>
          </div>
          <div className="blob w-[450px] h-[250px] absolute top-0 left-0"></div>
        </div>
        <div className="card w-[450px] h-[250px] flex justify-center items-center relative">
          <div className="bg bg-transparent hover:bg-orange-400 w-[440px] h-[240px] flex justify-center items-center relative">
            <div className="items-center p-4">
              <div>
                <p className=" brandy-font text-5xl md:text-7xl text-center">
                  2
                </p>
                <p className=" text-2xl brandy-font font-semibold text-center">
                  Build a Game using VortextEngine
                </p>
                <p className="text-center">
                  Utilize VortexEngine to develop your on-chain game with
                  powerful, seamless tools.
                </p>
              </div>
            </div>
          </div>
          <div className="blob w-[450px] h-[250px] absolute top-0 left-0"></div>
        </div>
        {/* </div> */}
      </div>
      <div className=" flex  justify-center pt-20">
        <div className="card w-[450px] h-[250px] flex justify-center items-center relative">
          <div className="bg bg-transparent hover:bg-orange-400 w-[440px] h-[240px] flex justify-center items-center relative">
            <div className="items-center p-4">
              <div>
                <p className=" brandy-font text-5xl md:text-7xl text-center">
                  3
                </p>
                <p className=" text-2xl font-semibold brandy-font text-center">
                  Deploy Your Game On-Chain
                </p>
                <p className="text-center">
                  Launch your game on the blockchain to make it accessible to
                  the community.
                </p>
              </div>
            </div>
          </div>
          <div className="blob w-[450px] h-[250px] absolute top-0 left-0"></div>
        </div>
      </div>
    <div className=" flex justify-center pt-10">
      <button className=" text-white text-2xl bg-transparent backdrop-blur-2xl backdrop-filter hover:scale-105 transform transition-transform duration-100 hover:shadow-xl p-3 rounded-xl md:text-base border-2 brandy-font border-white custom-border-radius">
        View Docs
      </button>
      </div>
    </div>
  );
};

export default HowitWorks;