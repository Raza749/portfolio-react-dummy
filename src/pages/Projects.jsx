import React from 'react'
import ProjectsContent from '../components/ProjectsContent';

const Projects = () => {
  return (
    <div className=' md:w-[1250px]  md:mx-auto'>
      <h1 className='md:text-5xl md:font-bold font-semibold text-zinc-300 text-3xl m-5 md:m-6'>Projects</h1>
     <ProjectsContent/>
    </div>
  )
}

export default Projects
