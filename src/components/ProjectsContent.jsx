import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsContent = () => {

  const projectsData = [
    {
      img:"https://i.postimg.cc/rFXZvnLV/gym.png",
      title:"Gym Nex",
      description:"Join our gym for top-notch equipment, expert training, and a supportive community. Start your fitness journey today!"
    },
    {
      img:"https://i.postimg.cc/Kvtc2HkJ/Food.png",
      title:"Nutribite",
      description:"NutriByte is a modern landing page for a nutrition-based platform, offering detailed insights on healthy eating and diet plans,"
    },
    {
      img:"https://i.postimg.cc/6q9cpS6n/image.png",
      title:"Image Search App",
      description:"Discover images with AI-powered search engine. Search for any images you're looking for.",
    },
    {
      img:"https://i.postimg.cc/d0JZXkBt/Thumbnail.png",
      title:"Landing Page",
      description:"Create a visually appealing landing page for your business or website.",
    }
  ];

  return (
    <div className='grid md:grid-cols-2 grid-cols-1 md:ms-auto'>
     {projectsData.map((item,index)=>{
      return(
       <ProjectCard key={index} img={item.img} title={item.title} des={item.description} />
      )
     })}
    </div>
  )
}

export default ProjectsContent
