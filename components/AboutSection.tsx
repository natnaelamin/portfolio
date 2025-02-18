"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { SkillData } from '@/constants'
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'

interface iprops {
    id: string;
}

const AboutSection = ({ id }: iprops) => {
  return (
    <>
        <div id={id} className='px-0 md:px-24 text-center mt-12'>
            <h2 className='text-4xl text-white mb-4 font-bold'>About Me</h2>
            <p className='text-base lg:text-lg text-white'>
                As a self-taught programmer, I&apos;ve been deeply passionate about coding since I first discovered it.
                Over the past two years, I&apos;ve honed my skills independently,
                facing and overcoming various challenges. I&apos;m eager to apply my knowledge
                in a practical setting through an internship or a job, collaborating with a team,
                and contributing to real-world projects.
            </p>
        </div>
        <div className='flex flex-col gap-16 text-center items-center'>
            <div className='flex flex-col items-center gap-4'>
                <h1 className='text-white font-semibold text-[25px]'>
                    Skills <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                        {" "}&{" "}
                    </span>Technologies
                </h1>
            </div>
            <Swiper 
                slidesPerView={5}
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false
                }}
                speed={5000}
                modules={[Autoplay]}
                className='max-w-[80%]'
            >
                {SkillData.map((skill, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={skill.Image}
                            alt={skill.name}
                            width={skill.width}
                            height={skill.height} 
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper 
                slidesPerView={5}
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    reverseDirection: true
                }}
                speed={5000}
                modules={[Autoplay]}
                className='max-w-[80%]'
            >
                {SkillData.map((skill, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={skill.Image}
                            alt={skill.name}
                            width={skill.width}
                            height={skill.height} 
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </>
  )
}

export default AboutSection