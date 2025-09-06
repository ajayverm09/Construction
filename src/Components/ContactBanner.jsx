import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ContactBanner = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white w-full"
      style={{
        backgroundImage:
          "url('https://html.tf.dreamitsolution.net/roadly/assets/images/inner-img/breadcumb-bg.png')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0B1A36]/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl font-bold mb-4"
        >
          Contact Us
        </motion.h1>

        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex items-center gap-2 text-red-500 font-medium text-lg"
        >
          <div className="h-px w-6 bg-red-500" />
          <Link to="/">
            <span className="hover:underline">Home</span>
          </Link>
          <span>/</span>
          <span>Contact Us</span>
          <div className="h-px w-6 bg-red-500" />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactBanner;
