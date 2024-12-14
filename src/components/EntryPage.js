import React, { useEffect, useState } from 'react'
import pic from "../assets/Entry_Background.png"
import { motion } from "framer-motion"

function EntryPage() {

    const [count, setCount] = useState(1);

    useEffect(() => {
      const interval = setInterval(() => {
        setCount(prevCount => {
          if (prevCount < 100) {
            return prevCount + 1;
          } else {
            return 0;
          }
        });
      }, 120);
  
      return () => clearInterval(interval);
    }, []);

    // console.log(count)

    const [animatedText, setAnimatedText] = useState('');

    useEffect(() => {
      const text = 'YSELF DIPESH';
      let index = 0;
  
      const interval = setInterval(() => {
        if (index <= text.length) {
          setAnimatedText(text.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 500); // Adjust delay in milliseconds (0.5 seconds in this example)
  
      return () => clearInterval(interval);
    }, []);

    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration:5 , type: 'spring'}} className='min-h-screen flex flex-col justify-center bg-black lg:gap-[50px] md:gap-[40px] gap-[30px] sm:p-5 p-3' style={{backgroundImage: `url(${pic})`, backgroundRepeat: 'no-repeat'}}>
                <section className='flex justify-center text-gray-400 lg:text-3xl md:text-xl sm:text-lg font-semibold tracking-wider'>
                    <div className='flex flex-col justify-center md:gap-[30px] gap-[10px]'>
                        <h3>HEY <span className='text-white lg:text-4xl md:text-2xl sm:text-xl text-lg'>VISITOR!</span> HOPE YOU ARE HAVING A <span className='text-white lg:text-4xl md:text-2xl sm:text-xl'>GREAT TIME.</span></h3>
                        <h2 className='text-white lg:text-6xl md:text-5xl sm:text-3xl text-3xl'>M{animatedText}</h2>
                        <h3>I <span className='text-white lg:text-4xl md:text-2xl sm:text-xl text-lg'>WELCOME</span> YOU TO HAVE A <span className='text-white lg:text-4xl md:text-2xl sm:text-xl'>GLANCE</span> AT MY <span className='text-white lg:text-4xl md:text-2xl text-xl'>PORTFOLIO.</span></h3>
                    </div>
                </section>
                <section className='flex justify-center text-gray-200 gap-[10px]'>
                    <article className='flex flex-col justify-center md:p-5 p-3 bg-gray-900 rounded-md'>
                      <h3 className='md:text-5xl sm:text-3xl text-xl text-center animate-pulse'>👋</h3>
                    </article>
                    <article className='flex flex-col md:p-5 p-3 bg-gray-900 rounded-md md:text-base sm:text-sm text-xs'>
                      <h3 className='text-center'>JUST WAIT A LITTLE BEFORE</h3>
                      <h3 className='text-center'>GETTING REDIRECTED</h3>
                      <h3 className='text-center md:block hidden'>TO ACTUAL PORTFOLIO</h3>
                    </article>
                </section>
            </motion.div>
            <h3 className='absolute lg:top-[50px] md:top-[40px] sm:top-[30px] top-[20px] lg:left-[50px] md:left-[40px] sm:left-[30px] left-[20px] text-white tracking-widest md:text-4xl sm:text-3xl text-2xl'>{count}%</h3>
            <h3 className='absolute lg:top-[50px] md:top-[40px] sm:top-[30px] top-[20px] lg:right-[50px] md:right-[40px] sm:right-[30px] right-[20px] text-white tracking-widest md:text-4xl sm:text-3xl text-2xl animate-spin'>☀️</h3>
            <h3 className='sm:absolute sm:block hidden lg:bottom-[50px] md:bottom-[40px] sm:bottom-[30px] bottom-[20px] lg:right-[50px] md:right-[40px] sm:right-[30px] right-[20px] text-white tracking-widest md:text-lg sm:text-base text-sm'>WEB DEVELOPER</h3>
            <h3 className='sm:absolute sm:block hidden lg:bottom-[50px] md:bottom-[40px] sm:bottom-[30px] bottom-[20px] lg:left-[50px] md:left-[40px] sm:left-[30px] left-[20px] text-white tracking-widest md:text-lg sm:text-base text-sm'>BLOCKCHAIN DEVELOPER</h3>
            <h3 className='sm:hidden absolute lg:bottom-[50px] md:bottom-[40px] sm:bottom-[30px] bottom-[20px] lg:right-[50px] md:right-[40px] sm:right-[30px] right-[20px] text-white tracking-widest md:text-lg sm:text-base text-sm'>WEB</h3>
            <h3 className='sm:hidden absolute lg:bottom-[50px] md:bottom-[40px] sm:bottom-[30px] bottom-[20px] lg:left-[50px] md:left-[40px] sm:left-[30px] left-[20px] text-white tracking-widest md:text-lg sm:text-base text-sm'>BLOCKCHAIN</h3>
        </>
    )
}

export default EntryPage