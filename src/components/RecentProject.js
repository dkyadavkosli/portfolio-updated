import React from 'react'
import RecentProjectCard from './RecentProjectCard'

function RecentProject() {
    return (
        <div id='projects' className='bg-black lg:py-28 sm:py-20 py-16 lg:px-10 md:px-6 sm:px-8 px-4 text-white relative overflow-hidden'>
            {/* Subtle background gradient effects */}
            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/3 to-transparent pointer-events-none'></div>
            
            <div className='relative z-10'>
                {/* Title Section - Kept exactly the same as requested */}
                <div>
                    <h2 className='lg:text-6xl md:text-5xl sm:text-4xl text-3xl animate-pulse'>RECENT PROJECTS</h2>
                    <div className='flex justify-center py-8'>
                        <div className='h-[3px] w-[100px] bg-slate-700'></div>
                    </div>
                </div>
                
                {/* Enhanced Grid Layout with perfect stacking and spacing */}
                <section className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-8 gap-6 pt-10 max-w-7xl mx-auto'>
                    {/* Card 1 */}
                    <div className='lg:col-span-1 md:col-span-1 col-span-1 h-full'>
                        <RecentProjectCard 
                            title={'Freebee'} 
                            tech={'Blockchain'} 
                            link="https://www.youtube.com/watch?v=eyKn1011e20" 
                            count={1}
                        />
                    </div>
                    
                    {/* Card 2 */}
                    <div className='lg:col-span-1 md:col-span-1 col-span-1 h-full'>
                        <RecentProjectCard 
                            title={'Esports Empire'} 
                            tech={'MERN Stack'} 
                            link="https://myesportsempire.vercel.app/" 
                            count={2}
                        />
                    </div>
                    
                    {/* Card 3 - Responsive column span */}
                    <div className='lg:col-span-1 md:col-span-2 lg:col-span-1 col-span-1 h-full'>
                        <RecentProjectCard 
                            title={'FundChain'} 
                            tech={'Blockchain'} 
                            link="https://www.youtube.com/watch?v=LD21OxGZXqo" 
                            count={3}
                        />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default RecentProject