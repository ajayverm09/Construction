import React from "react";
import { motion } from "framer-motion";

const HelpBanner = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage:
          "url('https://html.tf.dreamitsolution.net/roadly/assets/images/home_one/sub-bg.png')",
      }}
    >
      {/* Red overlay */}
      <div className="absolute inset-0 bg-red-900/60"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="inline-block bg-white/20 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide mb-4">
              — NEED ANY HELP
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Need Road services
            </h2>
          </motion.div>

          {/* Right Button */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white text-red-600 font-medium text-lg px-6 py-4 rounded-sm hover:bg-[#0F1D37] hover:text-white transition"
            >
              Make Appointment
              <motion.img
                src="https://cdn-icons-png.flaticon.com/128/13554/13554816.png"
                alt="Arrow Icon"
                className="w-4 h-4"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HelpBanner;
