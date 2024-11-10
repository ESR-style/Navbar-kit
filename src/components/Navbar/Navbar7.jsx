// Navbar7.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  RiLayoutGridLine, 
  RiNotification3Line,
  RiSearchLine,
  RiArrowRightUpLine,
  RiMenuFoldLine,
  RiShieldStarLine,
  RiRocketLine,
  RiTeamLine
} from 'react-icons/ri';

const Navbar7 = () => {
  const [activeSection, setActiveSection] = useState('discover');
  const [isOpen, setIsOpen] = useState(false);

  const navSections = [
    { id: 'discover', icon: <RiLayoutGridLine />, label: 'Discover' },
    { id: 'teams', icon: <RiTeamLine />, label: 'Teams' },
    { id: 'projects', icon: <RiRocketLine />, label: 'Projects' },
    { id: 'rewards', icon: <RiShieldStarLine />, label: 'Rewards' }
  ];

  return (
    <div className="fixed w-full top-0 left-0 z-50">
      {/* Main Navbar */}
      <div className="bg-white/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between px-4 py-3">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 p-0.5">
                <div className="h-full w-full bg-white rounded-lg grid place-items-center">
                  <RiLayoutGridLine className="text-xl text-indigo-600" />
                </div>
              </div>
              <span className="text-xl font-bold">nexus</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navSections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`
                    relative px-4 py-2 rounded-xl
                    ${activeSection === section.id 
                      ? 'text-indigo-600' 
                      : 'text-gray-600 hover:text-gray-900'
                    }
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    {section.icon}
                    <span>{section.label}</span>
                  </span>
                  {activeSection === section.id && (
                    <motion.div
                      layoutId="activeBackground"
                      className="absolute inset-0 bg-indigo-50 rounded-xl"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-xl text-gray-600">
                <RiSearchLine className="text-xl" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-xl text-gray-600">
                <RiNotification3Line className="text-xl" />
              </button>
              <button className="hidden md:flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700">
                <span>Launch</span>
                <RiArrowRightUpLine />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 md:hidden">
        <div className="bg-white rounded-2xl shadow-lg shadow-black/5 p-2">
          <div className="flex items-center justify-around space-x-6 px-4">
            {navSections.map((section) => (
              <div key={section.id} className="relative">
                <motion.button
                  onClick={() => setActiveSection(section.id)}
                  whileTap={{ scale: 0.9 }}
                  className={`
                    p-3 rounded-xl relative
                    ${activeSection === section.id 
                      ? 'text-indigo-600 bg-indigo-50' 
                      : 'text-gray-600'
                    }
                  `}
                >
                  {section.icon}
                </motion.button>
                {activeSection === section.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md whitespace-nowrap"
                  >
                    {section.label}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar7;