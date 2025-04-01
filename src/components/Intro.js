import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer';

function Intro() {

    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0.5, // Trigger when 50% of the component is in view
    });

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [inView]);

    return (
        <div className='bg-black text-white flex flex-col justify-center md:px-12 sm:px-8 px-5 lg:py-28 md:py-20 sm:py-14 py-12'>
            <div ref={ref} className={`lg:w-3/4 w-full flex flex-col justify-center md:gap-[30px] gap-[10px] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } transition-opacity duration-1000 ease-in-out transform-gpu`}>
                <p className='lg:text-2xl md:text-lg text-start tracking-wider'>I am a proficient software developer, expertly versed in TypeScript and JavaScript,
                    with a strong command of frameworks such as React, Node.js, and Next.js.
                    My robust problem-solving skills are complemented by an extensive understanding
                    of diverse Data Structures and Algorithms. Additionally, I possess the capability
                    to develop cutting-edge Decentralized Web Applications (DApps) utilizing Smart Contracts, Web3.js, and Ether.js.
                </p>
                <p className='lg:text-2xl md:text-lg text-start tracking-wider'>Beyond my technical expertise, I am a state-level cricket and volleyball player, as well as an esports athlete.
                    I have a passion for astronomy and enjoy immersing myself in captivating documentaries.</p>
                <div className='flex justify-start'>
                    <a href='/' className='mt-3 flex justify-start gap-[20px] px-4 py-4 border-[1px] border-slate-400 hover:animate-bg-fade-in hover:text-slate-900 rounded-3xl'>
                        <div className='flex flex-col justify-center'>
                            <div className='h-[20px] w-[20px] rounded-full bg-sky-400'></div>
                        </div>
                        <a href='https://drive.google.com/file/d/1EIOcWyh8vcbz4nAaylOymrGdjdC_4x7z/view?usp=sharing' target='_blank' className='font-light md:text-base text-sm'>MY RESUME</a>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Intro