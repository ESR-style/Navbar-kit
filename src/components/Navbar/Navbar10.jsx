// Navbar10.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiZap,
  FiGrid,
  FiLayers,
  FiUser,
  FiBell,
  FiSearch,
  FiMenu,
  FiX
} from 'react-icons/fi';

const Navbar10 = () => {
  const [activeSection, setActiveSection] = useState('discover');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'discover', icon: <FiGrid />, label: 'Discover' },
    { id: 'collections', icon: <FiLayers />, label: 'Collections' }
  ];

  const notifications = [
    { id: 1, title: 'New Message', time: '2m ago' },
    { id: 2, title: 'Update Available', time: '1h ago' },
    { id: 3, title: 'Welcome!', time: '2h ago' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto">
        {/* Main Navigation Bar */}
        <div className="relative bg-white/60 backdrop-blur-2xl rounded-2xl shadow-lg border border-white/20 p-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-pink-500 rounded-xl rotate-6" />
                <div className="absolute inset-0 bg-gradient-to-bl from-purple-500 to-blue-500 rounded-xl -rotate-6" />
                <div className="relative bg-white rounded-xl p-2">
                  <FiZap className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500" />
                </div>
              </div>
              <span className="text-xl font-bold">prism</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`
                    relative px-6 py-2 rounded-xl group
                    ${activeSection === item.id ? 'text-purple-600' : 'text-gray-600'}
                  `}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-center space-x-2">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-purple-100 rounded-xl -z-10"
                      transition={{ type: "spring", bounce: 0.2 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-3">
              {/* Search */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSearchOpen(true)}
                className="p-2 hover:bg-gray-100 rounded-xl"
              >
                <FiSearch className="text-xl text-gray-600" />
              </motion.button>

              {/* Notifications */}
              <div className="relative">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                  className="relative p-2 hover:bg-gray-100 rounded-xl"
                >
                  <FiBell className="text-xl text-gray-600" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                </motion.button>

                <AnimatePresence>
                  {isNotificationOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl py-2 max-h-[80vh] overflow-y-auto"
                      style={{
                        maxWidth: 'calc(100vw - 2rem)',
                        right: '-1rem'
                      }}
                    >
                      {notifications.map((notification) => (
                        <motion.div
                          key={notification.id}
                          whileHover={{ x: 4 }}
                          className="px-4 py-3 hover:bg-gray-50"
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{notification.title}</span>
                            <span className="text-xs text-gray-500">{notification.time}</span>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Profile */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl"
              >
                <FiUser />
                <span>Profile</span>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-xl"
              >
                {isMobileMenuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden mt-4 overflow-hidden"
              >
                <div className="space-y-2 pt-2 border-t">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.id}
                      onClick={() => {
                        setActiveSection(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`
                        w-full flex items-center space-x-2 px-4 py-2 rounded-xl
                        ${activeSection === item.id 
                          ? 'bg-purple-100 text-purple-600' 
                          : 'text-gray-600 hover:bg-gray-50'
                        }
                      `}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </motion.button>
                  ))}
                  {/* Mobile Profile Button */}
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="w-full flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl"
                  >
                    <FiUser />
                    <span>Profile</span>
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Search Modal */}
        <AnimatePresence>
          {isSearchOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsSearchOpen(false)}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
              />
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed top-4 inset-x-4 max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-4 z-50"
              >
                <div className="flex items-center space-x-4">
                  <FiSearch className="text-xl text-gray-400" />
                  <input
                    autoFocus
                    type="text"
                    placeholder="Search..."
                    className="flex-1 outline-none"
                  />
                  <button
                    onClick={() => setIsSearchOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    Cancel
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar10;