import logo from './logo.svg';
import './App.css';
import EntryPage from './components/EntryPage';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import { motion } from "framer-motion"
import { useState, useRef, useEffect } from 'react';
import Contact from './components/Contact';
import SkillStrip from './components/SkillStrip';
import Intro from './components/Intro';
import IntroStrip from './components/IntroStrip';
import About from './components/About';
import ContactStrip from './components/ContactStrip';
import ProjectStrip from './components/ProjectStrip';
import RecentProject from './components/RecentProject';
import Footer from './components/Footer';
import MySkills from './components/MySkills';
import SkillStatementStrip from './components/SkillStatementStrip';

function App() {

  const [visible, setVisible] = useState(0)

  setTimeout(() => setVisible(1), 12000)

  const cursorRef = useRef(null);
  const cursor2Ref = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current && cursor2Ref.current) {
        const style = `left: ${e.clientX}px; top: ${e.clientY}px;`;
        cursorRef.current.style.cssText = style;
        cursor2Ref.current.style.cssText = style;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="App bg-black z-30">
      <div className={`${visible === 1 ? 'hidden' : ''}`}>
        <EntryPage />
      </div>
      <motion.div className={`${visible === 0 ? 'hidden' : ''}`} initial={{ y: "100vh" }} animate={{ y: visible === 1 ? 0 : "100vh" }} transition={{ duration: 2 }}>
        <HeroSection />
        <IntroStrip />
        <Intro />
        <SkillStrip />
        <About />
        <ProjectStrip />
        <RecentProject />
        <SkillStatementStrip />
        {/* <MySkills /> */}
        <Skills />
        <ContactStrip />
        <Contact />
        <Footer />
      </motion.div>
      <div
        ref={cursorRef}
        className="cursor"
        style={{
          position: 'absolute',
          width: '10px',
          height: '10px',
          backgroundColor: 'black',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 1000,
        }}
      ></div>
      <div
        ref={cursor2Ref}
        className="cursor2"
        style={{
          position: 'absolute',
          width: '10px',
          height: '10px',
          backgroundColor: 'red',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 1000,
        }}
      ></div>
    </div>
  );
}

export default App;

