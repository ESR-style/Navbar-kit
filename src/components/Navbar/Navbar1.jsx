// Navbar1.jsx - Glassmorphic Gradient Navbar
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiMenu, FiX } from 'react-icons/fi';
import { RiFlutterFill, RiReactjsLine } from 'react-icons/ri';

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50">
      <div className="backdrop-blur-md bg-white/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <FiCode className="h-8 w-8 text-purple-500" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                DevSpace
              </span>
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink icon={<RiReactjsLine />} text="React" />
              <NavLink icon={<RiFlutterFill />} text="Flutter" />
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white"
              >
                Connect
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden backdrop-blur-lg bg-white/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MobileNavLink text="React" />
              <MobileNavLink text="Flutter" />
              <button className="w-full text-left px-3 py-2 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                Connect
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ icon, text }) => (
  <motion.a
    whileHover={{ scale: 1.1 }}
    className="flex items-center space-x-2 text-gray-800 hover:text-purple-500"
    href="#"
  >
    {icon}
    <span>{text}</span>
  </motion.a>
);

const MobileNavLink = ({ text }) => (
  <a
    href="#"
    className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-purple-500 hover:text-white"
  >
    {text}
  </a>
);

export default Navbar1;
