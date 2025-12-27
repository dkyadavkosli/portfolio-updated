import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function Intro() {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [inView]);

  return (
    <div className="bg-black text-white relative overflow-hidden py-20 lg:px-10 md:px-6 sm:px-8 px-4">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/5 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Main Content Card */}
          <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300">
            {/* First Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:text-xl md:text-lg text-base text-slate-200 leading-relaxed font-light mb-6"
            >
              I am a proficient software developer, expertly versed in{" "}
              <span className="text-white font-medium">TypeScript</span> and{" "}
              <span className="text-white font-medium">JavaScript</span>, with a
              strong command of frameworks such as{" "}
              <span className="text-white font-medium">React</span>,{" "}
              <span className="text-white font-medium">Node.js</span>, and{" "}
              <span className="text-white font-medium">Next.js</span>. My robust
              problem-solving skills are complemented by an extensive
              understanding of diverse{" "}
              <span className="text-white font-medium">
                Data Structures and Algorithms
              </span>
              . Additionally, I possess the capability to develop cutting-edge{" "}
              <span className="text-white font-medium">
                Decentralized Web Applications (DApps)
              </span>{" "}
              utilizing{" "}
              <span className="text-white font-medium">Smart Contracts</span>,{" "}
              <span className="text-white font-medium">Web3.js</span>, and{" "}
              <span className="text-white font-medium">Ether.js</span>.
            </motion.p>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent my-6"></div>

            {/* Second Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:text-xl md:text-lg text-base text-slate-200 leading-relaxed font-light"
            >
              Beyond my technical expertise, I am a{" "}
              <span className="text-white font-medium">
                state-level cricket and volleyball player
              </span>
              , as well as an{" "}
              <span className="text-white font-medium">esports athlete</span>. I
              have a passion for{" "}
              <span className="text-white font-medium">astronomy</span> and
              enjoy immersing myself in captivating documentaries.
            </motion.p>
          </div>

          {/* Resume Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center"
          >
            <motion.a
              href="https://drive.google.com/file/d/1xTvdZrE2y2IVbjaiea9wfE1dlwzOApnF/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-4 px-6 py-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-slate-600/70 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
            >
              <div className="relative">
                <div className="h-5 w-5 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 group-hover:from-sky-300 group-hover:to-blue-400 transition-all duration-300"></div>
                <div className="absolute inset-0 h-5 w-5 rounded-full bg-sky-400 opacity-0 group-hover:opacity-50 animate-ping"></div>
              </div>
              <span className="font-medium md:text-base text-sm text-slate-200 group-hover:text-white transition-colors">
                MY RESUME
              </span>
              <svg
                className="w-5 h-5 text-slate-400 group-hover:text-slate-200 group-hover:translate-x-1 transition-all duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Intro;
