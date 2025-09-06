// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import GetInTouchModal from "../Components/GetInTouch";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "BLOG", path: "/blogs" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <>
      {/* Modal */}
      {showModal && <GetInTouchModal onClose={() => setShowModal(false)} />}

      {/* Navbar */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`w-full bg-[#0F1D37] sticky top-0 z-50 shadow-md ${
          showModal ? "backdrop-blur-sm" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-red-600 px-3 py-1 rounded-md"
          >
            <img
              src="https://html.tf.dreamitsolution.net/roadly/assets/images/logo.png"
              alt="Roadly Logo"
              className="h-10"
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `font-medium transition ${
                      isActive
                        ? "text-red-500 border-b-2 border-red-500"
                        : "text-gray-300 hover:text-red-500"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </motion.div>
            ))}
          </div>

          {/* Get In Touch Button (Desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="hidden md:block"
          >
            <button
              onClick={() => setShowModal(true)}
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md font-medium transition"
            >
              Get In Touch ↗
            </button>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden text-white">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Items with Animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="md:hidden bg-white shadow-md"
            >
              <div className="flex flex-col items-center space-y-4 py-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `font-medium transition ${
                          isActive
                            ? "text-red-500 border-b-2 border-red-500"
                            : "text-gray-600 hover:text-red-500"
                        }`
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  </motion.div>
                ))}

                {/* Mobile Get In Touch */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setShowModal(true);
                    }}
                    className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md font-medium transition"
                  >
                    Get In Touch ↗
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
