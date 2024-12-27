import React from "react";
import  '../index.css'
const HeroRight = () => {
  return (
    <div className="">
      <div className=" md:h-[480px] ml-5 md:mt-10 md:w-[480px] h-[260px] w-[260px] border-4 border-transparent flex items-center justify-center bg-gradient-to-l from-purple-500 via-blue-400 to-blue-400 p-1 rounded-full">
        <div className="img-container rounded-full w-[250px] h-[250px] md:h-[470px] md:w-[470px] bg-[#0F1724] relative">
        <img id="img" src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTI3fHxwb3J0cmFpdCUyMGRhcmt8ZW58MHx8MHx8fDA%3D" className="profile-img md:h-[350px] md:w-[350px] h-[200px] w-[200px] rounded-full absolute -right-16 shadow-lg shadow-blue-300 border-[5px] border-purple-300 " alt="" />

        </div>
      </div>
    </div>
  );
};

export default HeroRight;
