import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiTwitter,
  SiGmail,
} from "react-icons/si";
import { useInView } from "react-intersection-observer";
import { toast } from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const [mytoast1, setMytoast1] = useState(0);
  const [mytoast2, setMytoast2] = useState(0);
  const [focusedField, setFocusedField] = useState(null);
  const [fieldValues, setFieldValues] = useState({
    from_name: "",
    from_name2: "",
    from_email: "",
    from_phone: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(form.current);

    emailjs
      .sendForm(
        "service_r61kmn8",
        "template_5gxoita",
        form.current,
        "0J3p5PmdR7bRXKFCv"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Successfully sent the email.");
          setMytoast1(1);
          setTimeout(() => {
            setMytoast1(0);
          }, 3000);
          setFieldValues({
            from_name: "",
            from_name2: "",
            from_email: "",
            from_phone: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send email.");
          setMytoast2(1);
          setTimeout(() => {
            setMytoast2(0);
          }, 3000);
          setFieldValues({
            from_name: "",
            from_name2: "",
            from_email: "",
            from_phone: "",
            message: "",
          });
        }
      );
  };

  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.02, // Trigger when at least 2% is visible (disappear when 98% is out)
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [inView]);

  const socialLinks = [
    {
      icon: SiGithub,
      href: "https://github.com/dkyadavkosli",
      label: "GitHub",
      color: "hover:text-gray-300 hover:bg-gray-800",
    },
    {
      icon: SiLinkedin,
      href: "https://www.linkedin.com/in/dipesh-kumar-b8580020b/",
      label: "LinkedIn",
      color: "hover:text-blue-400 hover:bg-blue-900/20",
    },
    {
      icon: SiInstagram,
      href: "https://www.instagram.com/kal.se_padhai.shuru/",
      label: "Instagram",
      color: "hover:text-pink-400 hover:bg-pink-900/20",
    },
    {
      icon: SiTwitter,
      href: "https://twitter.com/DipeshK71331890",
      label: "Twitter",
      color: "hover:text-sky-400 hover:bg-sky-900/20",
    },
  ];

  return (
    <div
      id="contact"
      className="bg-black py-20 text-white lg:px-14 sm:px-8 px-4 relative overflow-hidden"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/5 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title Section - Kept exactly the same as requested */}
        <div>
          <h2 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
            HAVE SOMETHING TO SAY?
          </h2>
          <div className="flex justify-center py-8">
            <div className="h-[3px] w-[100px] bg-slate-700"></div>
          </div>
        </div>

        <section className="flex md:flex-row flex-col gap-12 pt-8">
          {/* Left Side - Contact Info & Social Media */}
          <motion.article
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-1/2 w-full flex flex-col gap-8"
          >
            {/* Description Card */}
            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-xl">
              <p className="text-center text-base leading-relaxed text-slate-300 font-light">
                Wanna give some suggestions, share some thoughts or have some
                conversations? Feel free to reach out through any of the
                mentioned social media platforms or just fill out the attached
                form to send me a mail with your thoughts.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-200 mb-4 text-center">
                Connect with me
              </h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`group relative flex items-center justify-center w-14 h-14 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-400 transition-all duration-300 ${social.color} backdrop-blur-sm`}
                      aria-label={social.label}
                    >
                      <Icon className="text-2xl transition-transform duration-300 group-hover:scale-110" />
                      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <span className="text-xs text-slate-300 bg-slate-800 px-2 py-1 rounded whitespace-nowrap">
                          {social.label}
                        </span>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Email Section */}
            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-xl">
              <p className="text-center text-sm text-slate-400 mb-3 font-medium">
                Wanna drop a mail directly?
              </p>
              <div className="flex items-center justify-center gap-3 group cursor-pointer">
                <SiGmail className="text-2xl text-slate-400 group-hover:text-red-400 transition-colors" />
                <a
                  href="mailto:dipesh23062003@gmail.com"
                  className="text-lg text-slate-200 font-medium group-hover:text-white transition-colors break-all"
                >
                  dipesh23062003@gmail.com
                </a>
              </div>
            </div>

            {/* Animated Icon - Desktop Only */}
            <div className="py-6 lg:flex hidden justify-start">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <p className="text-8xl">☀️</p>
              </motion.div>
            </div>
          </motion.article>

          {/* Right Side - Contact Form */}
          <motion.article
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="md:w-1/2 w-full"
          >
            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-slate-200 mb-6">
                Send me a message
              </h3>

              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                {/* Name Fields */}
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                  <div className="relative group">
                    <label
                      htmlFor="from_name"
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === "from_name" || fieldValues.from_name
                          ? "top-2 text-xs text-slate-400"
                          : "top-4 text-sm text-slate-500"
                      }`}
                    >
                      First Name
                    </label>
                    <input
                      name="from_name"
                      id="from_name"
                      value={fieldValues.from_name}
                      onChange={(e) =>
                        setFieldValues({
                          ...fieldValues,
                          from_name: e.target.value,
                        })
                      }
                      onFocus={() => setFocusedField("from_name")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-slate-900/50 border border-slate-600/50 text-slate-200 placeholder-transparent p-4 pt-6 rounded-xl focus:outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-400/20 transition-all duration-300"
                      type="text"
                      required
                    />
                  </div>
                  <div className="relative group">
                    <label
                      htmlFor="from_name2"
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === "from_name2" || fieldValues.from_name2
                          ? "top-2 text-xs text-slate-400"
                          : "top-4 text-sm text-slate-500"
                      }`}
                    >
                      Last Name
                    </label>
                    <input
                      name="from_name2"
                      id="from_name2"
                      value={fieldValues.from_name2}
                      onChange={(e) =>
                        setFieldValues({
                          ...fieldValues,
                          from_name2: e.target.value,
                        })
                      }
                      onFocus={() => setFocusedField("from_name2")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-slate-900/50 border border-slate-600/50 text-slate-200 placeholder-transparent p-4 pt-6 rounded-xl focus:outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-400/20 transition-all duration-300"
                      type="text"
                      required
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                  <div className="relative group">
                    <label
                      htmlFor="from_email"
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === "from_email" || fieldValues.from_email
                          ? "top-2 text-xs text-slate-400"
                          : "top-4 text-sm text-slate-500"
                      }`}
                    >
                      Email Address
                    </label>
                    <input
                      name="from_email"
                      id="from_email"
                      value={fieldValues.from_email}
                      onChange={(e) =>
                        setFieldValues({
                          ...fieldValues,
                          from_email: e.target.value,
                        })
                      }
                      onFocus={() => setFocusedField("from_email")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-slate-900/50 border border-slate-600/50 text-slate-200 placeholder-transparent p-4 pt-6 rounded-xl focus:outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-400/20 transition-all duration-300"
                      type="email"
                      required
                    />
                  </div>
                  <div className="relative group">
                    <label
                      htmlFor="from_phone"
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === "from_phone" || fieldValues.from_phone
                          ? "top-2 text-xs text-slate-400"
                          : "top-4 text-sm text-slate-500"
                      }`}
                    >
                      Phone No.
                    </label>
                    <input
                      name="from_phone"
                      id="from_phone"
                      value={fieldValues.from_phone}
                      onChange={(e) =>
                        setFieldValues({
                          ...fieldValues,
                          from_phone: e.target.value,
                        })
                      }
                      onFocus={() => setFocusedField("from_phone")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-slate-900/50 border border-slate-600/50 text-slate-200 placeholder-transparent p-4 pt-6 rounded-xl focus:outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-400/20 transition-all duration-300"
                      type="tel"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <label
                    htmlFor="message"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === "message" || fieldValues.message
                        ? "top-3 text-xs text-slate-400"
                        : "top-4 text-sm text-slate-500"
                    }`}
                  >
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={fieldValues.message}
                    onChange={(e) =>
                      setFieldValues({
                        ...fieldValues,
                        message: e.target.value,
                      })
                    }
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    rows={6}
                    className="w-full bg-slate-900/50 border border-slate-600/50 text-slate-200 placeholder-transparent p-4 pt-8 rounded-xl focus:outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-400/20 transition-all duration-300 resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white font-semibold rounded-xl border border-slate-500/50 shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>Send Message</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </motion.button>

                {/* Toast Messages */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={
                    mytoast1 === 1
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: -20 }
                  }
                  className={`mt-4 px-4 py-3 bg-gradient-to-r from-green-600 to-green-500 rounded-lg text-white text-sm font-medium shadow-lg ${
                    mytoast1 === 1 ? "" : "hidden"
                  }`}
                >
                  ✓ Message sent successfully!
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={
                    mytoast2 === 1
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: -20 }
                  }
                  className={`mt-4 px-4 py-3 bg-gradient-to-r from-red-600 to-red-500 rounded-lg text-white text-sm font-medium shadow-lg ${
                    mytoast2 === 1 ? "" : "hidden"
                  }`}
                >
                  ✗ Failed to send message. Please try again.
                </motion.div>
              </form>
            </div>
          </motion.article>
        </section>
      </div>
    </div>
  );
};

export default Contact;
