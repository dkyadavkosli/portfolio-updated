import React, { useEffect, useState } from 'react'
import {
    SiGithub,
    SiLinkedin,
    SiInstagram,
    SiTwitter,
    SiGmail,
} from "react-icons/si";
import pic from "../assets/MyImage.png"
import react from "../assets/react.png";
import solidity from "../assets/solidity.png";
import tailwind from "../assets/tailwind.svg";
import typescript from "../assets/typescript.png";
import js from "../assets/js.png";
import mongodb from "../assets/mongodb.png";
import next from "../assets/next.png";
import nodejs from "../assets/nodejs.png";
import { useInView } from 'react-intersection-observer';

function About() {

    const [animatedText, setAnimatedText] = useState('');

    useEffect(() => {
        const text = 'BOUT ME';
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

    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
      threshold: 0.4, // Trigger when 50% of the component is in view
    });
  
    useEffect(() => {
      if (inView) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }, [inView]);

    return (
        <div id='about' className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-[30px] md:gap-[15px] lg:py-24 md:py-16 sm:py-14 py-10 xl:px-10 sm:px-6 px-2 bg-black text-white'>
            <section ref={ref}>
                <h2 className='md:text-5xl text-4xl text-start'>A{animatedText}</h2>
                <article className='p-5 bg-gradient-to-r from-[#141414] to-[#1f1f1f] mt-5 rounded-xl'>
                    <h4 className={`text-start text-slate-300 text-lg ${isVisible ? 'opacity-100 translate-y-0' : 'lg:opacity-0 lg:translate-y-10'
                        } transition-opacity duration-1000 ease-in-out transform-gpu`}>A dedicated web and blockchain developer passionate about delving deeper into the world of
                        Web3 and crafting intuitive, user-friendly Decentralized Applications (DApps).</h4>
                    <div className='flex justify-between pt-4'>
                        <div className="text-slate-300 text-2xl flex sm:justify-start justify-center gap-7 mt-6">
                            <a
                                href="https://github.com/dkyadavkosli"
                                target="_blank"
                                className="hover:text-slate-500 dark:hover:text-sky-300"
                            >
                                <SiGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/dipesh-kumar-b8580020b/"
                                target="_blank"
                                className="hover:text-slate-500 dark:hover:text-sky-300"
                            >
                                <SiLinkedin />
                            </a>
                            <a
                                href="https://www.instagram.com/kal.se_padhai.shuru/"
                                target="_blank"
                                className="hover:text-slate-500 dark:hover:text-sky-300"
                            >
                                <SiInstagram />
                            </a>
                            <a
                                href="https://twitter.com/DipeshK71331890"
                                target="_blank"
                                className="hover:text-slate-500 dark:hover:text-sky-300"
                            >
                                <SiTwitter />
                            </a>
                        </div>
                    </div>
                </article>
                <article className={`mt-5 ${isVisible ? 'opacity-100 translate-y-0' : 'lg:opacity-0 lg:translate-y-10'
                        } transition-opacity duration-1000 ease-in-out transform-gpu`}>
                    <img className='h-full w-full max-h-[400px] rounded-3xl' src={pic} alt="" />
                </article>
                <article className={`p-5 lg:hidden bg-gradient-to-r from-[#141414] to-[#1f1f1f] mt-5 rounded-xl text-slate-300 text-start ${isVisible ? 'opacity-100 translate-y-0' : 'lg:opacity-0 lg:translate-y-10'
                        } transition-opacity duration-1000 ease-in-out transform-gpu`}>
                    <h3 className='text-xl tracking-wider text-white text-start'>MY EDUCATION</h3>
                    <div className='mt-4'>
                        <h3>Indian Institute of Information Technology, Kota</h3>
                        <p className='text-green-200'>B.Tech</p>
                        <p className=''>Duration: 2020-2024</p>
                    </div>
                    <div className='mt-4'>
                        <h3>Rao Pahlad Singh School, Mahendergarh</h3>
                        <p className='text-green-200'>12th Class</p>
                        <p className=''>Duration: 2019-2020</p>
                    </div>
                    <div className='mt-4'>
                        <h3>Rao Pahlad Singh School, Mahendergarh</h3>
                        <p className='text-green-200'>10th Class</p>
                        <p className=''>Duration: 2017-2018</p>
                    </div>
                </article>
            </section>
            <section>
                <article className={`p-5 bg-gradient-to-r from-[#141414] to-[#1f1f1f] mt-5 rounded-xl text-slate-300 ${isVisible ? 'opacity-100 translate-y-0' : 'lg:opacity-0 lg:translate-y-10'
                        } transition-opacity duration-1000 ease-in-out transform-gpu`}>
                    <h3 className='text-xl tracking-wider text-white text-start'>MY BACKGROUND</h3>
                    <p className='text-start mt-2'>Growing up in a quaint village in India, I was surrounded by an environment brimming
                        with positivity and motivation. With both my parents being dedicated teachers,
                        they ensured I excelled in my studies. Although my initial exposure to technology was limited,
                        my curiosity grew over time, sparking a deep interest in computers.
                    </p>
                    <p className='text-start mt-2'>During my school years, my passion for sports shone brightly. I competed at the state level in Volleyball for the under-14 category,
                        excelled in Throwball for the under-16 category, and showcased my talent in Cricket at the state level for the under-16 category.</p>
                    <p className='text-start mt-2'>My true interaction with emerging technologies began in college, where I discovered various
                        tech stacks and the fascinating world of blockchain.
                        Today, I harness my technical skills to craft user-friendly web applications.</p>
                </article>
                <article className={`p-5 bg-gradient-to-r from-[#141414] to-[#1f1f1f] mt-5 rounded-xl text-slate-300 ${isVisible ? 'opacity-100 translate-y-0' : 'lg:opacity-0 lg:translate-y-10'
                        } transition-opacity duration-1000 ease-in-out transform-gpu`}>
                    <h3 className='text-xl tracking-wider text-white text-start'>TECHNOLOGIES</h3>
                    <div className='grid grid-cols-4 gap-[20px] mt-[25px]'>
                        <a href="https://react.dev/" target='_blank'> <img src={react} className='h-[50px] w-[50px] cursor-pointer bg-slate-600 p-2 border-[1px] border-slate-300 rounded-full' alt="/" /> </a>
                        <a href="https://nextjs.org/" target='_blank'> <img src={next} className='h-[50px] w-[50px] cursor-pointer bg-slate-600 p-2 border-[1px] border-slate-300 rounded-full' alt="/" /> </a>
                        <a href="https://tailwindcss.com/" target='_blank'> <img src={tailwind} className='h-[50px] w-[50px] cursor-pointer bg-slate-600 p-2 border-[1px] border-slate-300 rounded-full' alt="/" /> </a>
                        <a href="https://www.typescriptlang.org/" target='_blank'> <img src={typescript} className='h-[50px] w-[50px] cursor-pointer bg-slate-600 p-2 border-[1px] border-slate-300 rounded-full' alt="/" /> </a>
                        <a href="https://www.javascript.com/" target='_blank'> <img src={js} className='h-[50px] w-[50px] cursor-pointer bg-slate-600 p-2 border-[1px] border-slate-300 rounded-full' alt="/" /> </a>
                        <a href="https://soliditylang.org/" target='_blank'> <img src={solidity} className='h-[50px] w-[50px] cursor-pointer bg-slate-600 p-2 border-[1px] border-slate-300 rounded-full' alt="/" /> </a>
                        <a href="https://www.mongodb.com/" target='_blank'> <img src={mongodb} className='h-[50px] w-[50px] cursor-pointer bg-slate-600 p-2 border-[1px] border-slate-300 rounded-full' alt="/" /> </a>
                        <a href="https://nodejs.org/en" target='_blank'> <img src={nodejs} className='h-[50px] w-[50px] cursor-pointer bg-slate-600 p-2 border-[1px] border-slate-300 rounded-full' alt="/" /> </a>
                    </div>
                </article>
                <article className={`pt-5 lg:hidden px-5 bg-gradient-to-r from-[#141414] to-[#1f1f1f] mt-5 rounded-xl text-slate-300 text-start ${isVisible ? 'opacity-100 translate-y-0' : 'lg:opacity-0 lg:translate-y-10'
                        } transition-opacity duration-1000 ease-in-out transform-gpu`}>
                    <h3 className='text-xl tracking-wider text-white text-start mb-3'>FAVOURITE TUNES</h3>
                    <iframe src="https://open.spotify.com/embed/track/52AXCViV9CJCayQkIzokkr?utm_source=generator&theme=0" 
                    width="100%" height="102" frameBorder="0" allowfullscreen="" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    <iframe src="https://open.spotify.com/embed/track/7aMIuIT4db2iH6gMllU8dW?utm_source=generator&theme=0" 
                    width="100%" height="102" frameBorder="0" allowfullscreen="" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    <iframe src="https://open.spotify.com/embed/track/0ZxIxTxup7AiJIHDwodwCR?utm_source=generator&theme=0" 
                    width="100%" height="102" frameBorder="0" allowfullscreen="" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </article>
            </section>
            <section className='lg:block hidden'>
                <article className={`p-5 bg-gradient-to-r from-[#141414] to-[#1f1f1f] mt-5 rounded-xl text-slate-300 text-start ${isVisible ? 'opacity-100 translate-y-0' : 'lg:opacity-0 lg:translate-y-10'
                        } transition-opacity duration-1000 ease-in-out transform-gpu`}>
                    <h3 className='text-xl tracking-wider text-white text-start'>MY EDUCATION</h3>
                    <div className='mt-4'>
                        <h3>Indian Institute of Information Technology, Kota</h3>
                        <p className='text-green-200'>B.Tech</p>
                        <p className=''>Duration: 2020-2024</p>
                    </div>
                    <div className='mt-4'>
                        <h3>Rao Pahlad Singh School, Mahendergarh</h3>
                        <p className='text-green-200'>12th Class</p>
                        <p className=''>Duration: 2019-2020</p>
                    </div>
                    <div className='mt-4'>
                        <h3>Rao Pahlad Singh School, Mahendergarh</h3>
                        <p className='text-green-200'>10th Class</p>
                        <p className=''>Duration: 2017-2018</p>
                    </div>
                </article>
                <article className={`pt-5 px-5 bg-gradient-to-r from-[#141414] to-[#1f1f1f] mt-5 rounded-xl text-slate-300 text-start ${isVisible ? 'opacity-100 translate-y-0' : 'lg:opacity-0 lg:translate-y-10'
                        } transition-opacity duration-1000 ease-in-out transform-gpu`}>
                    <h3 className='text-xl tracking-wider text-white text-start mb-3'>FAVOURITE TUNES</h3>
                    <iframe src="https://open.spotify.com/embed/track/52AXCViV9CJCayQkIzokkr?utm_source=generator&theme=0" 
                    width="100%" height="102" frameBorder="0" allowfullscreen="" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    <iframe src="https://open.spotify.com/embed/track/7aMIuIT4db2iH6gMllU8dW?utm_source=generator&theme=0" 
                    width="100%" height="102" frameBorder="0" allowfullscreen="" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    <iframe src="https://open.spotify.com/embed/track/0ZxIxTxup7AiJIHDwodwCR?utm_source=generator&theme=0" 
                    width="100%" height="102" frameBorder="0" allowfullscreen="" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </article>
            </section>
        </div>
    )
}

export default About