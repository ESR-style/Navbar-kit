// Navbar6.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiSearch, 
  FiMenu, 
  FiX, 
  FiHome,
  FiCompass,
  FiBookmark,
  FiMessageSquare,
  FiSettings 
} from 'react-icons/fi';

const Navbar6 = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const menuItems = [
    { icon: <FiHome size={20} />, label: 'Home' },
    { icon: <FiCompass size={20} />, label: 'Explore' },
    { icon: <FiBookmark size={20} />, label: 'Saved' },
    { icon: <FiMessageSquare size={20} />, label: 'Messages' },
    { icon: <FiSettings size={20} />, label: 'Settings' }
  ];

  return (
    <header className="fixed w-full top-0 left-0 z-50">
      {/* Main Navbar */}
      <div className="bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
                nova
              </span>
            </div>

            {/* Desktop Search */}
            <div className="hidden md:flex items-center flex-1 max-w-lg mx-8">
              <div className="w-full relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                />
                <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-6">
              {menuItems.map((item, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 text-gray-600 hover:text-purple-500"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </motion.button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 md:hidden rounded-lg hover:bg-gray-100"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <div 
        className={`
          fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          w-64 bg-white shadow-lg transition-transform duration-200 ease-in-out md:hidden
        `}
      >
        <div className="p-6">
          {/* Mobile Search */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-lg bg-gray-100 focus:outline-none"
            />
            <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          {/* Mobile Menu Items */}
          <nav className="space-y-4">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => setIsOpen(false)}
                className="flex items-center w-full space-x-3 p-2 rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-500"
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

     
    </header>
  );
};

export default Navbar6;