import React, { useState, useEffect } from "react";
import c from "../assets/c.png";
import cpp from "../assets/cpp.png";
import css from "../assets/css.png";
import html from "../assets/html.png";
import js from "../assets/js.png";
import mongodb from "../assets/mongodb.png";
import mysql from "../assets/mysql.png";
import next from "../assets/next.png";
import nodejs from "../assets/nodejs.png";
import postman from "../assets/postman.png";
import python from "../assets/python.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import solidity from "../assets/solidity.png";
import tailwind from "../assets/tailwind.svg";
import typescript from "../assets/typescript.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const skills = [
    { name: "C", icon: c, category: "Language" },
    { name: "C++", icon: cpp, category: "Language" },
    { name: "HTML", icon: html, category: "Frontend" },
    { name: "CSS", icon: css, category: "Frontend" },
    { name: "JavaScript", icon: js, category: "Frontend" },
    { name: "TypeScript", icon: typescript, category: "Frontend" },
    { name: "Tailwind CSS", icon: tailwind, category: "Frontend" },
    { name: "Python", icon: python, category: "Language" },
    { name: "React", icon: react, category: "Frontend" },
    { name: "Redux", icon: redux, category: "Frontend" },
    { name: "Next.js", icon: next, category: "Frontend" },
    { name: "Solidity", icon: solidity, category: "Blockchain" },
    { name: "Node.js", icon: nodejs, category: "Backend" },
    { name: "MongoDB", icon: mongodb, category: "Database" },
    { name: "Postman", icon: postman, category: "Tools" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      ref={ref}
      id="skills"
      className="bg-black text-white relative overflow-hidden py-20 lg:px-10 md:px-6 sm:px-8 px-4"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/5 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl mb-8">
            TECHNICAL SKILLS
          </h2>
          <div className="flex justify-center">
            <div className="h-[3px] w-[100px] bg-slate-700"></div>
          </div>
          <p className="text-slate-400 mt-6 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing digital experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -8,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:border-slate-600/70 transition-all duration-300 h-full flex flex-col items-center justify-center cursor-pointer">
                {/* Icon Container */}
                <div className="relative mb-4 w-20 h-20 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-700/30 to-slate-800/30 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                  <div className="relative w-full h-full bg-slate-800/50 border border-slate-700/50 rounded-xl p-3 flex items-center justify-center group-hover:bg-slate-700/50 group-hover:border-slate-600/50 transition-all duration-300">
                    {skill.name === "Next.js" ? (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-full h-full object-contain bg-white rounded-lg p-1"
                      />
                    ) : (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>
                </div>

                {/* Skill Name */}
                <h3 className="text-slate-200 font-semibold text-center text-sm mb-1 group-hover:text-white transition-colors">
                  {skill.name}
                </h3>

                {/* Category Badge */}
                <span className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                  {skill.category}
                </span>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-600/0 via-slate-500/0 to-slate-600/0 group-hover:from-slate-600/10 group-hover:via-slate-500/5 group-hover:to-slate-600/10 transition-all duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-slate-900/60 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-full">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-slate-300 text-sm">
              Continuously learning and exploring new technologies
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
