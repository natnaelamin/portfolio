import React from 'react'
import { Projects } from '@/constants'
import ProjectCard from './ProjectCard'

interface iprops {
  id: string;
}

const ProjectSection = ({ id }: iprops) => {
  return (
    <div id={id} className='grid place-items-center'>
      <div className='text-center'>
        <h2 className='text-4xl text-white mb-4 font-bold'>Projects</h2>
      </div>
      <div className='grid md:grid-cols-2 gap-5 max-w-[90%] max-h-[75%]'>
        {Projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            image={project.src}
            text={project.text}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectSection