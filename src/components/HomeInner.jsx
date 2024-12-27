import React from 'react'
import HeroLeft from "../components/HeroLeft";
import HeroRight from "../components/HeroRight";

const HomeInner = () => {
  return (
    <div className="md:max-w-[1250px] p-1 relative md:p-0 flex-col-reverse md:flex flex md:flex-row mx-auto w-full md:h-[88vh]">
        <div className="relative heroLeft md:h-full md:w-[60%] h-[70% ] w-full">
          <HeroLeft />
        </div>
        <div className="relative heroRight md:h-full md:w-[40%] h-[40%] w-full">
          <HeroRight />
        </div>
      </div>
  )
}

export default HomeInner
