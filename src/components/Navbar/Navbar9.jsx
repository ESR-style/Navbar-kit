// Navbar9.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiHome,
  FiCompass,
  FiStar,
  FiSettings,
  FiPlus,
  FiX
} from 'react-icons/fi';

const Navbar9 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('home');

  const menuItems = [
    { id: 'home', icon: <FiHome size={20} />, label: 'Home', color: '#EC4899' },
    { id: 'explore', icon: <FiCompass size={20} />, label: 'Explore', color: '#8B5CF6' },
    { id: 'favorites', icon: <FiStar size={20} />, label: 'Favorites', color: '#10B981' },
    { id: 'settings', icon: <FiSettings size={20} />, label: 'Settings', color: '#3B82F6' }
  ];

  // Animation variants for menu items
  const menuItemVariants = {
    closed: { 
      opacity: 0,
      y: 20,
      scale: 0.8,
      transition: { duration: 0.2 }
    },
    open: i => ({ 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    })
  };

  // Animation variants for the main button
  const mainButtonVariants = {
    closed: { 
      rotate: 0,
      scale: 1
    },
    open: { 
      rotate: 45,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 30
      }
    }
  };

  return (
    <>
      {/* Background Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* Navigation Menu */}
      <nav className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Menu Items */}
          <AnimatePresence>
            {isOpen && (
              <div className="absolute bottom-20 right-0 flex flex-col-reverse items-end gap-4">
                {menuItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    custom={i}
                    variants={menuItemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    onClick={() => {
                      setActiveItem(item.id);
                      setIsOpen(false);
                    }}
                    className="group flex items-center gap-3"
                  >
                    {/* Label */}
                    <div className={`
                      px-4 py-2 rounded-full bg-white shadow-md
                      transition-all duration-200
                      ${activeItem === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                    `}>
                      <span className="text-sm font-medium text-gray-700">
                        {item.label}
                      </span>
                    </div>
                    
                    {/* Icon Button */}
                    <div
                      className={`
                        w-12 h-12 rounded-full flex items-center justify-center
                        shadow-lg transition-colors duration-200
                        ${activeItem === item.id 
                          ? 'bg-white'
                          : 'bg-white hover:bg-opacity-100'
                        }
                      `}
                      style={{
                        color: item.color,
                        backgroundColor: activeItem === item.id ? 'white' : '#ffffff'
                      }}
                    >
                      {item.icon}
                    </div>
                  </motion.button>
                ))}
              </div>
            )}
          </AnimatePresence>

          {/* Main Toggle Button */}
          <motion.button
            variants={mainButtonVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            onClick={() => setIsOpen(!isOpen)}
            className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 
                     shadow-lg flex items-center justify-center text-white"
          >
            {isOpen ? <FiX size={24} /> : <FiPlus size={24} />}
          </motion.button>
        </div>
      </nav>
    </>
  );
};

export default Navbar9;