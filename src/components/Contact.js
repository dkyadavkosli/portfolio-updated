import React, { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import {
    SiGithub,
    SiLinkedin,
    SiInstagram,
    SiTwitter,
    SiGmail,
} from "react-icons/si";
import { useInView } from 'react-intersection-observer';
import { toast } from "react-hot-toast"

const Contact = () => {

    const form = useRef();
    
    const [mytoast1, setMytoast1] = useState(0);
    const [mytoast2, setMytoast2] = useState(0);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zc77mqb', 'template_7hywnyj', form.current, 'LUnYIlet7n_mbuXeU')
            .then((result) => {
                console.log(result.text);
                toast.success('Successfully sent the email.')
                setMytoast1(1);
                setTimeout(()=>{
                    setMytoast1(0);
                }, 3000)
                document.getElementById('message').value = '';
                document.getElementById('from_name').value = '';
                document.getElementById('from_name2').value = '';
                document.getElementById('from_email').value = '';
                document.getElementById('from_phone').value = '';
            }, (error) => {
                console.log(error.text);
                toast.error('Failed to send email.')
                setMytoast2(1);
                setTimeout(()=>{
                    setMytoast2(0);
                }, 3000)
                document.getElementById('message').value = '';
                document.getElementById('from_name').value = '';
                document.getElementById('from_name2').value = '';
                document.getElementById('from_email').value = '';
                document.getElementById('from_phone').value = '';
            });
    };

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
        <div id="contact" className=" bg-black py-16 text-white lg:px-14 sm:px-8 px-4 flex flex-col justify-between">
            <div>
                <h2 className='lg:text-6xl md:text-5xl sm:text-4xl text-3xl'>HAVE SOMETHING TO SAY?</h2>
                <div className='flex justify-center py-8'>
                    <div className='h-[3px] w-[100px] bg-slate-700'></div>
                </div>
            </div>
            <section className='flex md:flex-row flex-col gap-[40px] pt-6'>
                <article
                    ref={ref}
                    className={`md:w-1/2 w-full h-full flex flex-col items-stretch justify-stretch ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        } transition-opacity duration-1000 ease-in-out transform-gpu`}
                >
                    <p className="text-start sm:text-lg text-slate-400">
                        Wanna give some suggestions, share some thoughts or have some conversations, feel free to reach out through
                        any of the mentioned social media platforms or just fill out the attached form to send me a mail with your
                        thoughts.
                    </p>
                    <div className="text-white text-2xl flex sm:justify-start justify-center gap-7 mt-6">
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
                            href="https://www.instagram.com/dipesh_k.27/"
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
                    <div className="mt-6">
                        <p className="text-start sm:text-lg text-slate-400">Wanna drop a mail directly? Use the below given email address.</p>
                        <p className="text-start text-lg text-slate-100">dipesh23062003@gmail.com</p>
                    </div>
                    <div className="py-10 lg:flex hidden justify-start">
                        <p className="animate-spin text-8xl">☀️</p>
                    </div>
                </article>
                <article className='md:w-1/2 w-full flex flex-col justify-center'>
                    <form ref={form} onSubmit={sendEmail} className="">
                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-[10px]">
                            <input name="from_name" id="from_name"
                                className="bg-[#020b0e] border-[1px] border-slate-300 text-slate-200 placeholder:text-slate-400 p-3 rounded-[15px] w-full md:h-[60px] sm:h-[50px] h-[45px]"
                                placeholder="First name"
                                type="text"
                            />
                            <input name="from_name2" id="from_name2"
                                className="bg-[#020b0e] border-[1px] border-slate-300 text-slate-200 placeholder:text-slate-400 p-3 rounded-[15px] w-full md:h-[60px] sm:h-[50px] h-[45px]"
                                placeholder="Last Name"
                                type="text"
                            />
                        </div>
                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-[10px] mt-3">
                            <input name="from_email" id="from_email"
                                className="bg-[#020b0e] border-[1px] border-slate-300 text-slate-200 placeholder:text-slate-400 p-3 rounded-[15px] w-full md:h-[60px] sm:h-[50px] h-[45px]"
                                placeholder="Email Address"
                                type="email"
                            />
                            <input name="from_phone" id="from_phone"
                                className="bg-[#020b0e] border-[1px] border-slate-300 text-slate-200 placeholder:text-slate-400 p-3 rounded-[15px] w-full md:h-[60px] sm:h-[50px] h-[45px]"
                                placeholder="Phone No."
                                type="text"
                            />
                        </div>
                        <textarea name="message" id="message"
                            rows={10}
                            className="bg-[#020b0e] border-[1px] border-slate-300 text-slate-200 placeholder:text-slate-400 p-2 rounded-[15px] w-full mt-3"
                            placeholder="Elaborate your concern"
                        />
                        <button type="submit" className="w-24 pt-2 pb-2 bg-slate-700 text-white hover:bg-slate-300 hover:text-slate-800 text-center rounded-md mt-2 border-[1px] border-slate-300 cursor-pointer">
                            Send
                        </button>
                        <div className={`mt-[20px] px-3 py-2 bg-green-600 rounded-lg text-white ${mytoast1===1?'':'hidden'}`}>Succes</div>
                        <div className={`mt-[20px] px-3 py-2 bg-red-600 rounded-lg text-white ${mytoast2===1?'':'hidden'}`}>Succes</div>
                    </form>
                </article>
            </section>
        </div>
    );
};

export default Contact;
