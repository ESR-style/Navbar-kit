// Navbar4.jsx - Vertical Timeline/Mobile Bottom Tabs Navbar
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BsCircleFill } from 'react-icons/bs';
import { FiHome, FiBook, FiAward, FiMail } from 'react-icons/fi';

const Navbar4 = () => {
  // State for active section
  const [activeSection, setActiveSection] = useState(0);

  // Navigation items configuration
  const navItems = [
    { icon: <FiHome />, label: 'Home' },
    { icon: <FiBook />, label: 'Portfolio' },
    { icon: <FiAward />, label: 'Awards' },
    { icon: <FiMail />, label: 'Contact' },
  ];

  return (
    <>
      {/* Desktop Vertical Timeline Navigation */}
      <nav className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="absolute left-3 top-0 w-0.5 h-full bg-gray-200" />
        <div className="relative space-y-8">
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ x: 10 }}
              className="relative"
            >
              {/* Timeline dot */}
              <motion.div
                animate={{
                  scale: activeSection === index ? 1.2 : 1,
                  backgroundColor: activeSection === index ? '#8B5CF6' : '#E5E7EB',
                }}
                className="absolute left-2.5 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
              >
                <BsCircleFill />
              </motion.div>

              {/* Navigation item */}
              <button
                onClick={() => setActiveSection(index)}
                className={`
                  ml-8 flex items-center space-x-3 p-2 rounded-lg transition-colors
                  ${activeSection === index ? 'text-purple-600' : 'text-gray-600'}
                  hover:bg-purple-50
                `}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </button>
            </motion.div>
          ))}
        </div>
      </nav>

      {/* Mobile Bottom Tab Navigation */}
      <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-50 lg:hidden">
        <div className="max-w-md mx-auto px-4">
          <div className="flex justify-around">
            {navItems.map((item, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveSection(index)}
                whileTap={{ scale: 0.95 }}
                className={`
                  flex flex-col items-center py-3 px-4 relative
                  ${activeSection === index ? 'text-purple-600' : 'text-gray-600'}
                `}
              >
                {/* Active indicator pill */}
                {activeSection === index && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -top-1 w-12 h-1 bg-purple-600 rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}

                <span className="text-xl mb-1">{item.icon}</span>
                <span className="text-xs">{item.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </nav>

      {/* Optional: Add tablet-specific navigation if needed */}
      <nav className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden md:block lg:hidden">
        <div className="bg-white rounded-full shadow-lg p-2">
          {navItems.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveSection(index)}
              whileHover={{ scale: 1.1 }}
              className={`
                block p-3 rounded-full transition-colors
                ${activeSection === index ? 'text-purple-600 bg-purple-50' : 'text-gray-600'}
              `}
            >
              <span className="text-xl">{item.icon}</span>
            </motion.button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar4;