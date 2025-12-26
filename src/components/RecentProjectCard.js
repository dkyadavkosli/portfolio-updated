import React, { useState } from 'react'
import pic1 from "../assets/freelance.png"
import pic2 from "../assets/crowd.png"
import pic3 from "../assets/esports.png"

function RecentProjectCard({title, tech, link, count}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a 
            href={link} 
            target='_blank' 
            rel="noopener noreferrer"
            className='project-card group block h-full min-h-[600px]'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className='h-full bg-gradient-to-br from-[#0a0a0a] via-[#141414] to-[#1a1a1a] rounded-3xl overflow-hidden border border-slate-800/50 shadow-2xl transition-all duration-500 hover:border-slate-500/60 hover:shadow-[0_25px_70px_rgba(0,0,0,0.6)] hover:-translate-y-3 flex flex-col relative'>
                {/* Glow effect on hover */}
                <div className='absolute inset-0 bg-gradient-to-br from-slate-700/0 via-slate-600/0 to-slate-500/0 group-hover:from-slate-700/10 group-hover:via-slate-600/5 group-hover:to-slate-500/10 transition-all duration-500 rounded-3xl pointer-events-none z-0'></div>
                
                {/* Image Container with Overlay */}
                <div className='relative h-[60%] overflow-hidden z-10'>
                    {/* Gradient overlay that intensifies on hover */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20 z-10 transition-opacity duration-500 group-hover:from-black/98 group-hover:via-black/70'></div>
                    
                    <img 
                        className='h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110' 
                        src={count===1?pic1: count===2?pic2:pic3} 
                        alt={title}
                        loading='lazy'
                    />
                    
                    {/* Tech Badge - Top Right with improved styling */}
                    <div className='absolute top-5 right-5 z-20 transform transition-all duration-300 group-hover:scale-105'>
                        <div className='px-5 py-2.5 bg-black/90 backdrop-blur-md rounded-full border border-slate-600/60 shadow-xl'>
                            <span className='text-xs font-semibold text-slate-200 tracking-wider uppercase'>{tech}</span>
                        </div>
                    </div>

                    {/* Animated Icon - Top Left */}
                    <div className='absolute top-5 left-5 z-20'>
                        <div className={`transition-all duration-500 ${isHovered ? 'rotate-[360deg] scale-125' : 'rotate-0 scale-100'}`}>
                            <p className="text-4xl drop-shadow-lg">☀️</p>
                        </div>
                    </div>

                    {/* Title Overlay - Bottom with better animation */}
                    <div className='absolute bottom-0 left-0 right-0 z-20 p-6 pb-8'>
                        <h3 className='text-3xl lg:text-4xl font-bold text-white mb-3 transform transition-all duration-500 group-hover:translate-y-0 translate-y-3 drop-shadow-2xl'>
                            {title}
                        </h3>
                        <div className='h-1.5 w-0 bg-gradient-to-r from-slate-400 via-slate-500 to-slate-600 transition-all duration-700 group-hover:w-24 rounded-full'></div>
                    </div>
                </div>

                {/* Content Section with improved styling */}
                <div className='flex-1 p-6 flex flex-col justify-between bg-gradient-to-b from-[#141414] to-[#0a0a0a] relative z-10'>
                    <div className='space-y-4'>
                        {/* Status indicator */}
                        <div className='flex items-center gap-2.5'>
                            <div className='relative'>
                                <div className='h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse'></div>
                                <div className='absolute inset-0 h-2.5 w-2.5 rounded-full bg-green-500 animate-ping opacity-75'></div>
                            </div>
                            <span className='text-xs text-slate-400 font-medium tracking-wide uppercase'>Live Project</span>
                        </div>
                        
                        {/* Description */}
                        <p className='text-slate-300 text-sm leading-relaxed font-light'>
                            {tech === 'Blockchain' 
                                ? 'A decentralized application built with smart contracts and Web3 integration, featuring secure transactions and transparent operations.'
                                : 'A full-stack web application with modern UI/UX, robust functionality, and seamless user experience across all devices.'
                            }
                        </p>
                    </div>
                    
                    {/* CTA Button with enhanced hover effect */}
                    <div className='mt-6 pt-5 border-t border-slate-800/80 group-hover:border-slate-700/80 transition-colors'>
                        <div className='flex items-center justify-between group-hover:gap-3 transition-all duration-300'>
                            <span className='text-slate-400 text-sm font-semibold group-hover:text-white transition-colors tracking-wide'>
                                View Project
                            </span>
                            <div className='relative'>
                                <svg 
                                    className='w-5 h-5 text-slate-400 group-hover:text-white group-hover:translate-x-2 transition-all duration-300' 
                                    fill='none' 
                                    stroke='currentColor' 
                                    viewBox='0 0 24 24'
                                >
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default RecentProjectCard