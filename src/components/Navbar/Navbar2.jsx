// Navbar2.jsx - Floating Island Navbar
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineSparkles } from 'react-icons/hi';
import { BiPlanet, BiRocket, BiAtom } from 'react-icons/bi';

const Navbar2 = () => {
  const [activeItem, setActiveItem] = useState('home');

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <motion.nav 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="bg-black/80 backdrop-blur-xl rounded-full p-2 shadow-lg shadow-purple-500/20"
      >
        <ul className="flex items-center space-x-2">
          <NavItem 
            icon={<BiPlanet />} 
            isActive={activeItem === 'home'}
            onClick={() => setActiveItem('home')}
          />
          <NavItem 
            icon={<BiRocket />} 
            isActive={activeItem === 'projects'}
            onClick={() => setActiveItem('projects')}
          />
          <NavItem 
            icon={<HiOutlineSparkles />} 
            isActive={activeItem === 'features'}
            onClick={() => setActiveItem('features')}
          />
          <NavItem 
            icon={<BiAtom />} 
            isActive={activeItem === 'about'}
            onClick={() => setActiveItem('about')}
          />
        </ul>
      </motion.nav>
    </div>
  );
};

const NavItem = ({ icon, isActive, onClick }) => (
  <motion.li
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <button
      onClick={onClick}
      className={`p-3 rounded-full transition-all duration-300 ${
        isActive 
          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
          : 'text-gray-400 hover:text-white'
      }`}
    >
      <span className="text-xl">{icon}</span>
    </button>
  </motion.li>
);

export default Navbar2;