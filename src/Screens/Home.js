import React from "react";
import CenterComp from "../components/CenterComp";
import Header from "../components/Header";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";

function Home() {
  return (
    <div>
      <Header />
      {/* grid grid-flow-col auto-cols-auto */}
      <div className="flex justify-center ml-auto mr-auto w-full max-w-screen-2xl">
        {/* Left Side */}
        {/* <LeftSide /> */}
        {/* Center Comp */}
        <CenterComp />
        
        {/* Right Side */}
        <RightSide />
      </div>
    </div>
  );
}
// grid grid-cols-3 
export default Home;
