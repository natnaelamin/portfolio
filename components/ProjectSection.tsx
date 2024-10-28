import React from 'react'
import { Projects } from '@/constants'
import ProjectCard from './ProjectCard'

const ProjectSection = () => {
  return (
    <>
     <div className='text-center'>
      <h2 className='text-4xl text-white mb-4 font-bold'>Projects</h2>
     </div> 
     <div className='grid grid-cols-2 gap-5 max-w-[90%] h-auto'>
        {Projects.map((project, index) =>(
            <ProjectCard 
            key={index}
            title={project.title}
            image={project.src}
            text={project.text}
            />
        ))}
      </div>
    </>
  )
}

export default ProjectSection
