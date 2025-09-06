import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const DetailsBanner = () => {
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

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 flex flex-col items-center text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight"
        >
          Blog Details
        </motion.h1>

        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex items-center gap-2 text-red-500 font-medium text-sm sm:text-base md:text-lg flex-wrap justify-center"
        >
          <div className="h-px w-6 bg-red-500" />
          <Link to="/">
            <span className="hover:underline transition">Home</span>
          </Link>
          <span>/</span>
          <span className="text-gray-200">Blog Details</span>
          <div className="h-px w-6 bg-red-500" />
        </motion.div>
      </div>
    </section>
  );
};

export default DetailsBanner;
