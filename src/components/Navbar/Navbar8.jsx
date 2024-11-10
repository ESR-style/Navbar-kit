// Navbar8.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiGrid,
  FiUser,
  FiBell,
  FiSearch,
  FiMenu,
  FiX,
  FiSettings,
  FiLogOut,
  FiBox
} from 'react-icons/fi';

const Navbar8 = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'about', label: 'About' }
  ];

  const profileMenu = [
    { icon: <FiUser />, label: 'Profile' },
    { icon: <FiSettings />, label: 'Settings' },
    { icon: <FiLogOut />, label: 'Logout' }
  ];

  return (
    <nav className="fixed w-full z-50 px-4 py-3">
      <div className="relative max-w-7xl mx-auto">
        {/* Background layers */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-xl rounded-2xl" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl" />
        
        <div className="relative px-4 py-2">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <FiGrid className="text-2xl text-blue-600" />
              <span className="text-xl font-bold">flux</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className="relative py-2"
                  whileHover={{ y: -2 }}
                >
                  <span className={`${
                    activeTab === item.id ? 'text-blue-600' : 'text-gray-600'
                  }`}>
                    {item.label}
                  </span>
                  {activeTab === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="p-2 hover:bg-gray-100 rounded-xl"
              >
                <FiSearch className="text-xl text-gray-600" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                className="relative p-2 hover:bg-gray-100 rounded-xl"
              >
                <FiBell className="text-xl text-gray-600" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
              </motion.button>

              {/* Profile Dropdown */}
              <div className="relative">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 p-1 rounded-xl hover:bg-gray-100"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
                </motion.button>

                <AnimatePresence>
                  {isProfileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-2"
                    >
                      {profileMenu.map((item, index) => (
                        <motion.button
                          key={index}
                          whileHover={{ x: 4 }}
                          className="flex items-center space-x-2 w-full px-4 py-2 text-gray-600 hover:bg-gray-50"
                        >
                          {item.icon}
                          <span>{item.label}</span>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-xl"
              >
                {isMobileMenuOpen ? (
                  <FiX className="text-xl" />
                ) : (
                  <FiMenu className="text-xl" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-2"
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-xl p-4 space-y-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full px-4 py-2 rounded-lg ${
                    activeTab === item.id 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar8;