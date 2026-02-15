import React from 'react';
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Navbar: React.FC = () => {
  return (
    <nav className='flex justify-between items-center fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200/50'>
      <div className='w-full max-w-screen-3xl mx-auto flex justify-between items-center text-xl md:text-2xl lg:text-3xl px-6 md:px-12 lg:px-16 xl:px-24 py-4 lg:py-5'>
        <span className='font-semibold tracking-tight'>DDTechnologies</span>
        <HiOutlineMenuAlt4 className='hover:cursor-pointer text-2xl md:text-3xl lg:text-4xl transition-transform hover:scale-105'/>
      </div>
    </nav>
  )
}

export default Navbar;
