import React from 'react';


const ProjectCard = (props) => {
  return (
    <div className="project-card h-[300px] w-[88%] mx-auto my-2 md:h-[440px] border-[1px] border-purple-500 overflow-hidden rounded-xl gap-5  md:w-[560px]">
      <div className='img-container h-1/2 md:h-[65%] w-full bg-blue-500'>
        <img className="w-full h-full object-cover" alt="" src={props.img} />
        <h1 className='md:text-xl text-lg font-semibold text-zinc-200 pt-4 px-2'>
          {props.title}
        </h1>
        <p className='py-1 px-2 text-zinc-300 md:text-sm text-xs'>
          {props.des} 
        </p>
        <div className='flex w-full items-center  justify-around mt-1'>
          <button className='bg-gradient-to-l hover:bg-gradient-to-r text-zinc-200 mx-4 md:px-4 md:py-1.5 px-3 py-1 rounded-full from-purple-500 via-blue-400 to-blue-400 '>
            Live Preview
          </button>
          <button className=' text-zinc-200 md:px-4 md:py-1.5 px-3 py-1 rounded-full hover:bg-gradient-to-l from-purple-500 via-blue-400 to-blue-400    border-[1px] border-zinc-300'>
            Check ON Github
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
