import React from 'react'

const HeroLeft = () => {
  return (
    <div className='flex flex-col h-full  bottom-0 md:p-0 px-5  w-full -z-10'>
     <div className="content md:mt-28 mt-9">
     <h1 className='bg-gradient-to-r from-purple-500 via-blue-400 to-blue-400 bg-clip-text text-transparent md:text-6xl text-3xl font-bold'>
        Hello, I'm Tom Andrew,
     </h1>
     <h2 className='md:text-4xl text-xl font-semibold text-zinc-100 md:my-5 my-1'>
        Frontend Developer
     </h2>
     <p className='text-zinc-300 md:mb-5 mb-2'>
     Passionate front-end developer with a knack for creating responsive, user-friendly websites. Skilled in HTML, CSS, JavaScript, and modern frameworks like React. Focused on building seamless digital experiences with clean, efficient code."     </p>
     <button className='bg-gradient-to-r my-3 hover:bg-gradient-to-l duration-500 text-zinc-100 ease-in from-purple-500 via-blue-400 to-blue-400 px-4 py-1.5 md:mb-3  mb-1 md:px-6 md:py-2.5 md:text-2xl rounded-full'>
        Download CV
     </button>
     </div>
    </div>
  )
}

export default HeroLeft
