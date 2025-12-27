import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SiLinkedin } from 'react-icons/si';

function WorkingExperience() {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const experiences = [
    {
      title: 'Software Development Engineer',
      company: 'GoodScore',
      companyAlt: 'Formerly Rupicard',
      location: 'Bengaluru',
      period: '09/2024 - Present',
      linkedin: 'https://www.linkedin.com/company/goodscoreapp/',
      achievements: [
        'Integrated third-party payment gateways (Razorpay, PayU) across frontend and backend systems to support secure, high-volume financial transactions.',
        'Led the redesign of the subscription acquisition flow, significantly improving user experience and reducing drop-offs during payment.',
        'Developed complete Personal Loan flow, allowing users to view eligible loan partners, compare options, and complete the loan journey seamlessly.',
        'Implemented custom React Native notifications and configured event-based triggers using CleverTap, improving user engagement through targeted and real-time mobile notifications.',
      ],
      isCurrent: true,
    },
    {
      title: 'Web Developer Intern',
      company: 'Gemsyn',
      location: 'Remote',
      period: '01/2024 - 07/2024',
      achievements: [
        'Developed a responsive dashboard for companies to track and manage employee spending, focusing on clear data visualization and ease of use.',
        'Developed spend management features such as transaction views, summaries, and filters, improving performance and maintainability.',
        'Collaborated with product, design, and backend teams to implement business workflows, ensuring accurate and efficient spend management.',
      ],
      isCurrent: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div
      ref={ref}
      id="experience"
      className="bg-black text-white relative overflow-hidden py-20 lg:px-10 md:px-6 sm:px-8 px-4"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/5 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl mb-8">
            WORKING EXPERIENCE
          </h2>
          <div className="flex justify-center">
            <div className="h-[3px] w-[100px] bg-slate-700"></div>
          </div>
        </motion.div>

        {/* Experiences Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-slate-700/50 hidden md:block"></div>
              )}

              {/* Experience Card */}
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                className="bg-gradient-to-br from-slate-900/60 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-500 relative overflow-hidden group"
              >
                {/* Animated Hover Glow Effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-slate-700/0 via-slate-600/0 to-slate-500/0 group-hover:from-slate-700/15 group-hover:via-slate-600/8 group-hover:to-slate-500/15 transition-all duration-500 rounded-2xl pointer-events-none"
                ></motion.div>
                
                {/* Animated Border Glow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 rounded-2xl border-2 border-slate-500/0 group-hover:border-slate-500/30 transition-all duration-500 pointer-events-none"
                ></motion.div>

                <div className="relative z-10">
                  {/* Header Section */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="flex-1 text-left">
                      {/* Timeline Dot */}
                      <div className="flex items-start gap-4">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={isVisible ? { scale: 1 } : { scale: 0 }}
                          transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}
                          className="relative mt-1"
                        >
                          <motion.div
                            whileHover={{ scale: 1.3 }}
                            className="w-5 h-5 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 border-2 border-slate-800 group-hover:from-slate-500 group-hover:to-slate-600 transition-all duration-300 shadow-lg"
                          ></motion.div>
                          {exp.isCurrent && (
                            <>
                              <motion.div
                                animate={{ scale: [1, 1.5, 1], opacity: [0.75, 0, 0.75] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute inset-0 w-5 h-5 rounded-full bg-green-500"
                              ></motion.div>
                              <motion.div
                                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                className="absolute inset-0 w-5 h-5 rounded-full bg-green-500"
                              ></motion.div>
                            </>
                          )}
                        </motion.div>

                        <div className="flex-1 text-left">
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                            className="flex flex-wrap items-center gap-3 mb-3"
                          >
                            <h3 className="text-2xl font-semibold text-white group-hover:text-slate-100 transition-colors">
                              {exp.title}
                            </h3>
                            {exp.isCurrent && (
                              <motion.span
                                initial={{ scale: 0, rotate: -180 }}
                                animate={isVisible ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                                transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                                className="px-3 py-1 bg-green-500/20 border border-green-500/50 rounded-full text-xs font-medium text-green-400 shadow-lg shadow-green-500/20"
                              >
                                Current
                              </motion.span>
                            )}
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                            className="flex flex-wrap items-center gap-2 mb-3 text-left"
                          >
                            <h4 className="text-xl font-medium text-slate-200 group-hover:text-white transition-colors">
                              {exp.company}
                            </h4>
                            {exp.companyAlt && (
                              <span className="text-sm text-slate-400">
                                ({exp.companyAlt})
                              </span>
                            )}
                            {exp.linkedin && (
                              <motion.a
                                href={exp.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/50 text-blue-400 hover:bg-blue-500/30 hover:text-blue-300 transition-all duration-300 ml-2"
                                aria-label="LinkedIn"
                              >
                                <SiLinkedin className="text-base" />
                              </motion.a>
                            )}
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                            className="flex flex-wrap items-center gap-4 text-sm text-slate-400 text-left"
                          >
                            <motion.span
                              whileHover={{ scale: 1.05, x: 3 }}
                              className="flex items-center gap-2"
                            >
                              <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                              >
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  />
                                </svg>
                              </motion.div>
                              <span>{exp.period}</span>
                            </motion.span>
                            <motion.span
                              whileHover={{ scale: 1.05, x: 3 }}
                              className="flex items-center gap-2"
                            >
                              <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                              >
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                </svg>
                              </motion.div>
                              <span>{exp.location}</span>
                            </motion.span>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Achievements List */}
                  <div className="ml-9 md:ml-10 space-y-4 text-left">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.div
                        key={achIndex}
                        initial={{ opacity: 0, x: -30, scale: 0.95 }}
                        animate={
                          isVisible
                            ? { opacity: 1, x: 0, scale: 1 }
                            : { opacity: 0, x: -30, scale: 0.95 }
                        }
                        transition={{
                          duration: 0.5,
                          delay: 0.6 + index * 0.2 + achIndex * 0.15,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-4 group/achievement"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={isVisible ? { scale: 1 } : { scale: 0 }}
                          transition={{ delay: 0.7 + index * 0.2 + achIndex * 0.15, type: "spring" }}
                          className="mt-2.5 flex-shrink-0"
                        >
                          <motion.div
                            whileHover={{ scale: 1.5 }}
                            className="w-2 h-2 rounded-full bg-gradient-to-br from-slate-400 to-slate-600 group-hover/achievement:from-blue-400 group-hover/achievement:to-blue-600 transition-all duration-300 shadow-md"
                          ></motion.div>
                        </motion.div>
                        <motion.p
                          whileHover={{ x: 3 }}
                          className="text-slate-300 leading-relaxed text-sm md:text-base group-hover/achievement:text-slate-200 transition-colors flex-1 text-left"
                        >
                          {achievement}
                        </motion.p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default WorkingExperience;

