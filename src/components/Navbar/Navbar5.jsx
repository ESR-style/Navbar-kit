// Navbar5.jsx - Magnetic Hover Navbar with Mobile Responsiveness
import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { RiPlanetLine, RiStarLine, RiCompassLine, RiSpaceShipLine, RiMenuLine, RiCloseLine } from 'react-icons/ri';

const Navbar5 = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();

  // Navigation items configuration
  const navItems = [
    { icon: <RiPlanetLine />, label: 'Explore', color: '#9333EA' },
    { icon: <RiStarLine />, label: 'Favorites', color: '#EC4899' },
    { icon: <RiCompassLine />, label: 'Discover', color: '#3B82F6' },
    { icon: <RiSpaceShipLine />, label: 'Launch', color: '#10B981' },
  ];

  // Mouse movement effect for desktop
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.innerWidth > 768) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6">
        <div className="max-w-4xl mx-auto bg-black/80 backdrop-blur-xl rounded-2xl p-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-white font-bold text-xl"
            >
              Stellar
            </motion.div>

            {/* Desktop Menu Items */}
            <div className="hidden md:flex items-center justify-around space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  className="relative group"
                  onMouseEnter={() => controls.start({ scale: 1.1 })}
                  onMouseLeave={() => controls.start({ scale: 1 })}
                >
                  {/* Magnetic glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full blur-xl opacity-50"
                    style={{ backgroundColor: item.color }}
                    animate={{
                      x: (mousePosition.x - window.innerWidth / 2) * 0.02,
                      y: (mousePosition.y - window.innerHeight / 2) * 0.02,
                    }}
                  />

                  {/* Icon and label */}
                  <div className="relative flex flex-col items-center space-y-1">
                    <span className="text-2xl text-white group-hover:text-purple-400">
                      {item.icon}
                    </span>
                    <span className="text-sm text-gray-300 group-hover:text-white">
                      {item.label}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2"
            >
              {isOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-lg">
              <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
                {navItems.map((item, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4 text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-4 rounded-xl"
                      style={{ backgroundColor: `${item.color}30` }}
                    >
                      <span className="text-3xl">{item.icon}</span>
                    </motion.div>
                    <span className="text-xl font-medium">{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar5;