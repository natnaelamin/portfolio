import Link from 'next/link'
import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { RxGithubLogo } from "react-icons/rx";
import { BsLinkedin } from "react-icons/bs";

interface iprops {
  id: string;
}

const ContactSection = ({ id }: iprops) => {
  return (
    <section id={id} className='grid md:grid-cols-2 my-12 py-24 gap-4 text-center md:text-start'>
      <div>
        <h5 className='text-xl font-bold text-white my-2'>Let&apos;s Connect</h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I&apos;ll try my best to 
          get back to you!
        </p>
        <div className='grid place-items-center md:place-items-start md:gap-10 gap-5 py-5'>
          <p className=' text-slate-400 flex gap-3 md:text-lg'><FaPhone className='text-white mt-1 md:text-xl'/> +251929245088</p>
          <Link href="https://github.com/natnaelamin" className=' flex gap-3 text-slate-400 md:text-lg'>
            <RxGithubLogo className='md:text-xl text-lg text-white mt-1'/> Github
          </Link>
          <Link href="https://www.linkedin.com/in/natnael-amin-919688229/?originalSubdomain=et" 
          className=' flex gap-3 text-slate-400 md:text-lg'>
            <BsLinkedin  className='md:text-xl text-lg text-white mt-1'/>Linkedin
          </Link>
        </div>
      </div>

      <div>
        <form action="https://getform.io/f/adrrrqla" method='POST' className='flex flex-col'>
          <div className='mb-6'>
            <label className='text-white block text-sm font-medium mb-2'>Your email</label>
            <input type="email" name='email' required placeholder='nati@gmail.com' 
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]
              text-gray-100 text-sm rounded-lg block w-full p-2.5' />
          </div>
          <div className='mb-6'>
            <label className='text-white block text-sm font-medium mb-2'>Subject</label>
            <input type="text" name='subject' required placeholder='job offer' 
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]
              text-gray-100 text-sm rounded-lg block w-full p-2.5' />
          </div>
          <div className='mb-6'>
            <label className='text-white block text-sm font-medium mb-2'>Message</label>
            <textarea name='message' required placeholder="Let&apos;s talk about..." 
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]
              text-gray-100 text-sm rounded-lg block w-full p-2.5' />
          </div>
          <button type='submit' className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default ContactSection