"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import NavLinks from './NavLinks'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import MenuOverlay from './MenuOverlay'
import Image from 'next/image'

const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact"
    }
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
      <div className='flex flex-wrap items-center justify-between px-4 mx-auto py-2'>
        <Link href={"/"} className='text-2xl md:text-5xl text-white font-semibold'>
        <div className='rounded-full w-[50px] h-[50px] overflow-hidden mt-0 '>
                <Image 
                src="/images/hero_pic.jpeg"
                alt='hero'
                height={50}
                width={50}
                />
            </div>
        </Link>
        <div className='block md:hidden mobile-menu'>
            { !navbarOpen ?
            ( <button onClick={() => setNavbarOpen(true)}
            className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                <Bars3Icon className='h-5 w-5'/>
            </button>)
            : ( <button onClick={() => setNavbarOpen(false)}
                className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                <XMarkIcon className='h-5 w-5'/>
            </button>)}
        </div>
        <div className='menu hidden md:block md:w-auto' id='navbar'>
            <ul className='flex space-x-8 mt-0'>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <NavLinks href={link.path} title={link.title}/>
                    </li>
                ))}
            </ul>
        </div>
      </div>
      <div className='block md:hidden'>
        {navbarOpen && <MenuOverlay links={navLinks}/> }
      </div>
      
    </nav>
  )
}

export default Navbar
