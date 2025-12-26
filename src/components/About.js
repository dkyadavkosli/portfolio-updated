import React, { useEffect, useState } from 'react'
import {
    SiGithub,
    SiLinkedin,
    SiInstagram,
    SiTwitter,
    SiGmail,
} from "react-icons/si";
import { motion } from 'framer-motion';
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

    const socialLinks = [
        { icon: SiGithub, href: "https://github.com/dkyadavkosli", label: "GitHub", color: "hover:text-gray-300 hover:bg-gray-800" },
        { icon: SiLinkedin, href: "https://www.linkedin.com/in/dipesh-kumar-b8580020b/", label: "LinkedIn", color: "hover:text-blue-400 hover:bg-blue-900/20" },
        { icon: SiInstagram, href: "https://www.instagram.com/kal.se_padhai.shuru/", label: "Instagram", color: "hover:text-pink-400 hover:bg-pink-900/20" },
        { icon: SiTwitter, href: "https://twitter.com/DipeshK71331890", label: "Twitter", color: "hover:text-sky-400 hover:bg-sky-900/20" },
    ];

    const technologies = [
        { name: "React", src: react, href: "https://react.dev/" },
        { name: "Next.js", src: next, href: "https://nextjs.org/" },
        { name: "Tailwind", src: tailwind, href: "https://tailwindcss.com/" },
        { name: "TypeScript", src: typescript, href: "https://www.typescriptlang.org/" },
        { name: "JavaScript", src: js, href: "https://www.javascript.com/" },
        { name: "Solidity", src: solidity, href: "https://soliditylang.org/" },
        { name: "MongoDB", src: mongodb, href: "https://www.mongodb.com/" },
        { name: "Node.js", src: nodejs, href: "https://nodejs.org/en" },
    ];

    const education = [
        { institution: "Indian Institute of Information Technology, Kota", degree: "B.Tech", duration: "2020-2024" },
        { institution: "Rao Pahlad Singh School, Mahendergarh", degree: "12th Class", duration: "2019-2020" },
        { institution: "Rao Pahlad Singh School, Mahendergarh", degree: "10th Class", duration: "2017-2018" },
    ];

    return (
        <div id='about' className='bg-black text-white relative overflow-hidden py-20 lg:px-10 md:px-6 sm:px-8 px-4'>
            {/* Background gradient effects */}
            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/5 to-transparent pointer-events-none'></div>
            
            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Title Section - Kept exactly the same */}
                <div className="mb-12">
                    <h2 className='md:text-5xl text-4xl text-start'>A{animatedText}</h2>
                </div>

                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                    {/* Left Column */}
                    <section ref={ref} className="space-y-6">
                        {/* Intro Card */}
                        <motion.article
                            initial={{ opacity: 0, y: 30 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className='bg-gradient-to-br from-slate-900/60 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300'
                        >
                            <h4 className='text-start text-slate-200 text-lg leading-relaxed font-light mb-6'>
                                A dedicated web and blockchain developer passionate about delving deeper into the world of
                                Web3 and crafting intuitive, user-friendly Decentralized Applications (DApps).
                            </h4>
                            
                            {/* Social Media Links */}
                            <div className="flex flex-wrap gap-3 justify-start">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1, y: -3 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`group relative flex items-center justify-center w-12 h-12 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-400 transition-all duration-300 ${social.color} backdrop-blur-sm`}
                                            aria-label={social.label}
                                        >
                                            <Icon className="text-xl transition-transform duration-300 group-hover:scale-110" />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.article>

                        {/* Image Card */}
                        <motion.article
                            initial={{ opacity: 0, y: 30 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                            className="relative group overflow-hidden rounded-2xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 rounded-2xl"></div>
                            <img 
                                className='h-full w-full max-h-[450px] object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110' 
                                src={pic} 
                                alt="Dipesh Kumar" 
                            />
                            <div className="absolute bottom-4 left-4 right-4 z-20">
                                <p className="text-white text-sm font-medium">Dipesh Kumar</p>
                                <p className="text-slate-300 text-xs">Web & Blockchain Developer</p>
                            </div>
                        </motion.article>

                        {/* Education - Mobile Only */}
                        <motion.article
                            initial={{ opacity: 0, y: 30 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                            className='lg:hidden bg-gradient-to-br from-slate-900/60 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-xl'
                        >
                            <h3 className='text-xl font-semibold text-white text-start mb-6 flex items-center gap-2'>
                                <span className="w-1 h-6 bg-gradient-to-b from-slate-400 to-slate-600 rounded-full"></span>
                                MY EDUCATION
                            </h3>
                            <div className='space-y-6'>
                                {education.map((edu, index) => (
                                    <div key={index} className="relative pl-6 border-l-2 border-slate-700">
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 bg-slate-600 rounded-full border-2 border-slate-800"></div>
                                        <h3 className='text-slate-200 font-medium mb-1'>{edu.institution}</h3>
                                        <p className='text-green-400 font-semibold text-sm mb-1'>{edu.degree}</p>
                                        <p className='text-slate-400 text-sm'>{edu.duration}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.article>
                    </section>
                    {/* Middle Column */}
                    <section className="space-y-6">
                        {/* Background Card */}
                        <motion.article
                            initial={{ opacity: 0, y: 30 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                            className='bg-gradient-to-br from-slate-900/60 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300'
                        >
                            <h3 className='text-xl font-semibold text-white text-start mb-4 flex items-center gap-2'>
                                <span className="w-1 h-6 bg-gradient-to-b from-slate-400 to-slate-600 rounded-full"></span>
                                MY BACKGROUND
                            </h3>
                            <div className='space-y-4 text-slate-300 text-sm leading-relaxed'>
                                <p className='text-start'>
                                    Growing up in a quaint village in India, I was surrounded by an environment brimming
                                    with positivity and motivation. With both my parents being dedicated teachers,
                                    they ensured I excelled in my studies. Although my initial exposure to technology was limited,
                                    my curiosity grew over time, sparking a deep interest in computers.
                                </p>
                                <p className='text-start'>
                                    During my school years, my passion for sports shone brightly. I competed at the state level in Volleyball for the under-14 category,
                                    excelled in Throwball for the under-16 category, and showcased my talent in Cricket at the state level for the under-16 category.
                                </p>
                                <p className='text-start'>
                                    My true interaction with emerging technologies began in college, where I discovered various
                                    tech stacks and the fascinating world of blockchain.
                                    Today, I harness my technical skills to craft user-friendly web applications.
                                </p>
                            </div>
                        </motion.article>

                        {/* Technologies Card */}
                        <motion.article
                            initial={{ opacity: 0, y: 30 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                            className='bg-gradient-to-br from-slate-900/60 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300'
                        >
                            <h3 className='text-xl font-semibold text-white text-start mb-6 flex items-center gap-2'>
                                <span className="w-1 h-6 bg-gradient-to-b from-slate-400 to-slate-600 rounded-full"></span>
                                TECHNOLOGIES
                            </h3>
                            <div className='grid grid-cols-4 gap-4'>
                                {technologies.map((tech, index) => (
                                    <motion.a
                                        key={index}
                                        href={tech.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.15, y: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="group relative flex items-center justify-center"
                                    >
                                        <div className="w-14 h-14 bg-slate-800/50 border border-slate-700/50 rounded-xl p-2.5 flex items-center justify-center transition-all duration-300 group-hover:bg-slate-700/50 group-hover:border-slate-600/50 group-hover:shadow-lg">
                                            <img 
                                                src={tech.src} 
                                                className='w-full h-full object-contain' 
                                                alt={tech.name}
                                            />
                                        </div>
                                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                            <span className="text-xs text-slate-300 bg-slate-800 px-2 py-1 rounded whitespace-nowrap">{tech.name}</span>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.article>

                        {/* Favourite Tunes - Mobile Only */}
                        <motion.article
                            initial={{ opacity: 0, y: 30 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                            className='lg:hidden bg-gradient-to-br from-slate-900/60 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-xl'
                        >
                            <h3 className='text-xl font-semibold text-white text-start mb-4 flex items-center gap-2'>
                                <span className="w-1 h-6 bg-gradient-to-b from-slate-400 to-slate-600 rounded-full"></span>
                                FAVOURITE TUNES
                            </h3>
                            <div className="space-y-3">
                                <div className="rounded-lg overflow-hidden">
                                    <iframe 
                                        src="https://open.spotify.com/embed/track/52AXCViV9CJCayQkIzokkr?utm_source=generator&theme=0" 
                                        width="100%" 
                                        height="102" 
                                        frameBorder="0" 
                                        allowFullScreen="" 
                                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                                        loading="lazy"
                                        className="rounded-lg"
                                    ></iframe>
                                </div>
                                <div className="rounded-lg overflow-hidden">
                                    <iframe 
                                        src="https://open.spotify.com/embed/track/7aMIuIT4db2iH6gMllU8dW?utm_source=generator&theme=0" 
                                        width="100%" 
                                        height="102" 
                                        frameBorder="0" 
                                        allowFullScreen="" 
                                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                                        loading="lazy"
                                        className="rounded-lg"
                                    ></iframe>
                                </div>
                                <div className="rounded-lg overflow-hidden">
                                    <iframe 
                                        src="https://open.spotify.com/embed/track/0ZxIxTxup7AiJIHDwodwCR?utm_source=generator&theme=0" 
                                        width="100%" 
                                        height="102" 
                                        frameBorder="0" 
                                        allowFullScreen="" 
                                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                                        loading="lazy"
                                        className="rounded-lg"
                                    ></iframe>
                                </div>
                            </div>
                        </motion.article>
                    </section>
                    {/* Right Column - Desktop Only */}
                    <section className='lg:block hidden space-y-6'>
                        {/* Education Card */}
                        <motion.article
                            initial={{ opacity: 0, y: 30 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                            className='bg-gradient-to-br from-slate-900/60 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300'
                        >
                            <h3 className='text-xl font-semibold text-white text-start mb-6 flex items-center gap-2'>
                                <span className="w-1 h-6 bg-gradient-to-b from-slate-400 to-slate-600 rounded-full"></span>
                                MY EDUCATION
                            </h3>
                            <div className='space-y-6'>
                                {education.map((edu, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                        className="relative pl-6 border-l-2 border-slate-700 hover:border-slate-600 transition-colors"
                                    >
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 bg-slate-600 rounded-full border-2 border-slate-800 group-hover:bg-slate-500 transition-colors"></div>
                                        <h3 className='text-slate-200 font-medium mb-1 text-sm'>{edu.institution}</h3>
                                        <p className='text-green-400 font-semibold text-sm mb-1'>{edu.degree}</p>
                                        <p className='text-slate-400 text-xs'>{edu.duration}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.article>

                        {/* Favourite Tunes Card */}
                        <motion.article
                            initial={{ opacity: 0, y: 30 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                            className='bg-gradient-to-br from-slate-900/60 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300'
                        >
                            <h3 className='text-xl font-semibold text-white text-start mb-4 flex items-center gap-2'>
                                <span className="w-1 h-6 bg-gradient-to-b from-slate-400 to-slate-600 rounded-full"></span>
                                FAVOURITE TUNES
                            </h3>
                            <div className="space-y-3">
                                <div className="rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                                    <iframe 
                                        src="https://open.spotify.com/embed/track/52AXCViV9CJCayQkIzokkr?utm_source=generator&theme=0" 
                                        width="100%" 
                                        height="102" 
                                        frameBorder="0" 
                                        allowFullScreen="" 
                                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                                        loading="lazy"
                                        className="rounded-lg"
                                    ></iframe>
                                </div>
                                <div className="rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                                    <iframe 
                                        src="https://open.spotify.com/embed/track/7aMIuIT4db2iH6gMllU8dW?utm_source=generator&theme=0" 
                                        width="100%" 
                                        height="102" 
                                        frameBorder="0" 
                                        allowFullScreen="" 
                                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                                        loading="lazy"
                                        className="rounded-lg"
                                    ></iframe>
                                </div>
                                <div className="rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                                    <iframe 
                                        src="https://open.spotify.com/embed/track/0ZxIxTxup7AiJIHDwodwCR?utm_source=generator&theme=0" 
                                        width="100%" 
                                        height="102" 
                                        frameBorder="0" 
                                        allowFullScreen="" 
                                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                                        loading="lazy"
                                        className="rounded-lg"
                                    ></iframe>
                                </div>
                            </div>
                        </motion.article>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default About