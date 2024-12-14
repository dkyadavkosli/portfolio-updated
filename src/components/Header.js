import React from 'react'
import { Link } from "react-scroll";

function Header() {
  return (
    <div className='flex justify-between lg:px-16 md:px-8 sm:px-5 px-3 lg:py-8 md:py-6 sm:py-4 py-3'>
        <div className=''>
            <h2 className='text-white md:text-3xl text-2xl'>DIPESH K.</h2>
        </div>
        <div className='text-white sm:flex hidden lg:gap-[20px] md:gap-[10px] text-sm'>
            <Link to={"projects"}
            smooth={true}
            offset={-50}
            duration={700} 
            className='px-3 py-2 cursor-pointer hover:animate-bg-fade-in hover:text-black rounded-3xl'>PROJECTS</Link>
            <Link to={"about"}
            smooth={true}
            offset={-50}
            duration={500}
             className='px-3 py-2 cursor-pointer hover:animate-bg-fade-in hover:text-black rounded-3xl'>ABOUT</Link>
            {/* <a href="/" className='px-3 py-2 hover:animate-bg-fade-in hover:text-black rounded-3xl'>EDUCATION</a> */}
        </div>
        <div>
            <Link to={"contact"}
            smooth={true}
            offset={-50}
            duration={900}
            className='border-[1px] cursor-pointer border-slate-400 rounded-3xl md:text-base text-sm py-2 px-4 text-white hover:animate-bg-fade-in hover:text-slate-900'>GET IN TOUCH</Link>
        </div>
    </div>
  )
}

export default Header