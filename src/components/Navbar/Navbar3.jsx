// Navbar3.jsx - 3D Floating Cards Navbar
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShoppingBag, FiHeart, FiUser, FiMenu, FiX } from 'react-icons/fi';
import { HiOutlineCube } from 'react-icons/hi';

const Navbar3 = () => {
  // State management for mobile menu and hover effects
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Navigation items configuration - centralized for easy updates
  const navItems = [
    { icon: <FiShoppingBag />, label: 'Shop', count: 5 },
    { icon: <FiHeart />, label: 'Wishlist', count: 2 },
    { icon: <FiUser />, label: 'Profile' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 py-3">
      {/* Main navbar container with glassmorphism effect */}
      <div className="max-w-7xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl">
        <div className="flex items-center justify-between p-4">
          {/* Logo section */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <HiOutlineCube className="text-3xl text-emerald-500" />
            <span className="text-xl font-bold">3DStore</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ y: -5 }}
                className="relative"
              >
                <div className={`
                  p-3 rounded-xl transition-all duration-300
                  ${hoveredCard === index ? 'bg-emerald-500 text-white' : 'bg-white/5'}
                `}>
                  <div className="flex items-center space-x-2">
                    {item.icon}
                    <span>{item.label}</span>
                    {item.count && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {item.count}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/10"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button className="w-full flex items-center space-x-3 p-4 hover:bg-emerald-500/10 transition-colors relative">
                    <span className="text-xl">{item.icon}</span>
                    <span>{item.label}</span>
                    {item.count && (
                      <span className="absolute right-4 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {item.count}
                      </span>
                    )}
                  </button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar3;