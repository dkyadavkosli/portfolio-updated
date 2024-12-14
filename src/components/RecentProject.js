import React from 'react'
import RecentProjectCard from './RecentProjectCard'

function RecentProject() {
    return (
        <div id='projects' className='bg-black lg:py-20 sm:py-10 py-10 lg:px-10 md:px-6 sm:px-8 px-3 text-white'>
            <div>
                <h2 className='lg:text-6xl md:text-5xl sm:text-4xl text-3xl animate-pulse'>RECENT PROJECTS</h2>
                <div className='flex justify-center py-8'>
                    <div className='h-[3px] w-[100px] bg-slate-700'></div>
                </div>
            </div>
            <section className='grid md:grid-cols-3 grid-cols-1 lg:gap-[20px] gap-[12px] pt-6'>
               <RecentProjectCard title={'Freebee'} tech={'Blockchain'} link="https://www.youtube.com/watch?v=eyKn1011e20" count={1}/>
               <RecentProjectCard title={'Esports Empire'} tech={'MERN Stack'} link="https://myesportsempire.vercel.app/" count={2}/>
               <RecentProjectCard title={'FundChain'} tech={'Blockchain'} link="https://www.youtube.com/watch?v=LD21OxGZXqo" count={3}/>
            </section>
        </div>
    )
}

export default RecentProject