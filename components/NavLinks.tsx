import Link from 'next/link'
import React from 'react'

interface iProps{
    href: string;
    title: string;
}
const NavLinks = ({href, title}: iProps) => {
  return (
    <Link href={href} 
    className='block py-2 -pl-3 pr-4 sm:text-xl text-[#ADB7BE] rounded md:p-0 hover:text-white'>
        {title}
    </Link>
  )
}

export default NavLinks 
