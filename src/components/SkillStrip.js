import React from 'react';

const texts = [
  'C++',
  'HTML5',
  'CSS',
  'Tailwind',
  'Javascript',
  'React Js',
  'Node Js',
  'MongoDB',
  'DSA',
  'OOPS',
  'Solidity',
  'Blockchain',
  'Ether.js',
  'Web3.js',
  'Express Js'
];

const SkillStrip = () => {
  return (
    <div className='bg-black border-y-[1px] border-slate-400'>
    <div className="strip-container overflow-hidden text-white py-2 bg-transparent">
      <div className="strip-content">
        {texts.map((text, index) => (
          <span key={index} className="inline-block px-6 py-4 sm:text-2xl text-lg tracking-wider">
            {text}
          </span>
        ))}
      </div>
    </div>
    </div>
  );
};

export default SkillStrip;

