import React from 'react'
import NavLinks from './NavLinks'

interface linkProps{
    links: any[];
}

const MenuOverlay = ({links}: linkProps) => {
  return (
    <ul className='flex flex-col py-1 items-center '>
        {links.map((link, index) =>(
            <li key={index}>
                <NavLinks href={link.path} title={link.title}/>
            </li>
        ))}
    </ul>
  )
}

export default MenuOverlay
