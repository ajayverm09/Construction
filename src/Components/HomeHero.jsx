import React from "react";
import { motion } from "framer-motion";

const RoadWorkerSection = () => {
  return (
    <section className="w-full flex flex-col md:flex-row relative bg-black min-h-[auto] md:min-h-screen">
      {/* Background image - hidden on mobile, shown on desktop */}
      <div 
        className="hidden md:block absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://html.tf.dreamitsolution.net/roadly/assets/images/home_one/hero-bg.png')",
        }}
      />
      
      {/* Dark overlay - hidden on mobile, shown on desktop */}
      <div className="hidden md:block absolute inset-0 bg-black/40"></div>

      {/* Text content - adjusted for mobile */}
      <div className="relative z-10 w-full md:w-1/2 px-6 sm:px-12 md:px-20 py-12 md:py-20 flex flex-col justify-center min-h-[auto]">
        <motion.h1
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 max-w-xl"
        >
          How Road Workers{" "}
          <span className="text-[#E13C21]">Our Daily</span> Shape Commute
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-gray-300 max-w-lg mb-8"
        >
          We face each project as a new challenge and with our ability to build
          and innovate we overcome all barriers to using content.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-[#E13C21] text-white px-6 py-3 font-semibold rounded-md hover:bg-[#bf3218] transition w-max"
        >
          Explore More <span className="inline-block ml-2">↗</span>
        </motion.button>
      </div>

      {/* Right side spacer - only visible on desktop */}
      <div className="hidden md:block md:w-1/2" />
    </section>
  );
};

export default RoadWorkerSection;