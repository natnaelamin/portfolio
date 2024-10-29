"use client"
import React, { useState } from 'react'
import {motion} from 'framer-motion'

interface Props{
    image: string;
    title: string;
    text: string;
}

const ProjectCard = ({image, title ,text}: Props) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    function handleFlip(){
        if(!isAnimating){
            setIsFlipped(!isFlipped)
            setIsAnimating(true)
        }
    }

  return (
    <div className='cursor-pointer rouded-md w-[250px] md:w-[450px] h-[200px] md:h-[200px]'
    onClick={handleFlip}>
      <motion.div
      className='flip-card-inner w-full h-full'
      initial= {false}
      animate={{rotateY: isFlipped ? 180 : 360 }}
      transition={{duration: 0.6, animationDirection: 'normal'}}
      onAnimationComplete={() => setIsAnimating(false)}
      >
        <div 
        style={{backgroundImage: `url(${image})`}}
        className='w-full h-full group relative flip-card-front bg-center bg-cover text-white rounded-lg p-4'>
            <div className='absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40'/>
            <div className='absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center'>
                Learn more &gt;
            </div>  
        </div>

        <div 
        style={{backgroundImage: `url(${image})`}}
        className='w-full h-full group relative flip-card-back bg-center bg-cover text-white rounded-lg p-4'>
            <div className='absolute inset-0 w-full h-full rounded-md bg-black opacity-80 z-[-1]'/>
            <div className='flex flex-col gap-10 py-3 z-[30]'>
                <h1 className='text-white text-lg  md:text-2xl font-semibold'>{title}</h1>
                <p className='text-gray-100 text-sm md:text-[18px]'>
                    {text}
                </p>
            </div>  
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectCard
