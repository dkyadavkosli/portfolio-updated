import React from 'react'
import pic1 from "../assets/freelance.png"
import pic2 from "../assets/esports.png"
import pic3 from "../assets/crowd.png"

function RecentProjectCard({title, tech, link, count}) {
    return (
        <a href={link} target='_blank' className='project-card'>
        <div className='h-[500px] bg-[#141414] p-2 rounded-2xl md:hover:scale-105 flex flex-col'>
            <div className='flex justify-between py-3 px-3 rounded-xl bg-[#2e2e2e] hover:bg-gray-900'>
                <h4 className='text-lg'>{tech}</h4>
            </div>
            <div className='h-full mt-2 rounded-2xl relative'>
                <img className='h-full rounded-2xl' src={count===1?pic1: count===2?pic2:pic3} alt="/" />
                <section className='absolute top-0 bg-transparent w-full h-full p-3 pb-10'>
                    <div className='flex flex-col justify-between h-full'>
                        <div className="flex justify-start">
                            <p className="animate-spin text-4xl">☀️</p>
                        </div>
                    </div>
                    <h4 className='lg:text-2xl text-xl text-start'>{title}</h4>
                </section>
            </div>
        </div>
        </a>
    )
}

export default RecentProjectCard