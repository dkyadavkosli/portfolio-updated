import React, {useEffect, useState} from 'react'
import Header from './Header'
import { motion } from "framer-motion"
import pic from "../assets/ProfileImage.png"

function HeroSection() {

   const [animatedText, setAnimatedText] = useState('');

   useEffect(() => {
     const text = 'DIPESH';
     let index = 0;
     let interval;
 
     const animateText = () => {
       interval = setInterval(() => {
         if (index <= text.length) {
           setAnimatedText(text.slice(0, index));
           index++;
         } else {
           clearInterval(interval);
           index = 0; // Reset index to start animation again
           setTimeout(animateText, 100); // Wait 1 second before starting again
         }
       }, 500); // Adjust delay in milliseconds (0.5 seconds in this example)
     };
 
     animateText(); // Start animation
 
     return () => clearInterval(interval);
   }, []);

  return (
    <div className='min-h-screen bg-black flex flex-col justify-between' style={{backgroundImage: `url(${pic})`}}>
      <Header/>
      <section className='flex justify-center'>
        <div className='flex flex-col'>
         <motion.h1 initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1}} transition={{duration:15 , type: 'spring'}} className='2xl:text-[9rem] lg:text-9xl md:text-8xl sm:text-7xl text-5xl md:leading-[11rem] sm:leading-[6rem] leading-[4rem] text-white tracking-wide'>HEY THERE</motion.h1>
         <div className='sm:flex hidden justify-center tracking-widest text-slate-200'>
            <p className='md:text-base text-sm'>A SKILLED WEB AND BLOCKCHAIN DEVELOPER</p>
         </div>
         <div>
         <motion.h1 initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1}} transition={{duration:15 , type: 'spring'}} className='2xl:text-[9rem] lg:text-9xl md:text-8xl sm:text-7xl text-5xl md:leading-[11rem] sm:leading-[6rem] leading-[4rem] text-white tracking-wide'>I'M <span className='bordered-text animate-pulse'>{animatedText}</span></motion.h1>
         </div>
         </div>
      </section>
      <section className='flex justify-between text-white lg:px-16 md:px-8 sm:px-5 px-2 lg:py-8 md:py-6 sm:py-4 py-3'>
         <article>
            <h4 className='sm:text-base text-sm'>📍 Based in Haryana, India</h4>
            <p className='sm:text-sm text-xs text-slate-300'>A small village named Kosli</p>
         </article>
         <article className='sm:block hidden'>
            <p className='text-sm text-slate-300'>Scroll</p>
            <div className="animate-bounce mt-[5px]">⇣</div>
         </article>
         <article>
            <h4 className='sm:text-base text-sm'>What More About Me 🤔</h4>
            <p className='sm:text-sm text-xs text-slate-300'>Just Volleyball and Esports</p>
         </article>
      </section>
    </div>
  )
}

export default HeroSection