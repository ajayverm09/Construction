// src/components/GetInTouchModal.jsx
import React from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9, y: -50 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.9, y: 50, transition: { duration: 0.3 } },
};

const GetInTouchModal = ({ onClose, isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
        >
          <motion.div
            className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 relative"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-600 transition"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
              Get in Touch
            </h2>

            {/* Form */}
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-red-600"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-red-600"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-red-600"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-red-600"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows="4"
                className="border border-gray-300 px-4 py-2 rounded-md w-full resize-none focus:outline-red-600"
              ></textarea>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-700 transition w-full sm:w-auto"
              >
                Submit Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GetInTouchModal;
