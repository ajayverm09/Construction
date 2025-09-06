import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const RoadConstruction = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* LEFT CONTENT */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Tag */}
          <div className="mb-4">
            <span className="bg-red-100 text-red-500 font-semibold px-4 py-1 rounded-full text-sm">
              ABOUT ROADLY
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
            How Road Construction <br />
            Shapes <span className="text-red-500">Our Cities</span>
          </h2>

          {/* Paragraph */}
          <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
            Fantastic shop! Great selection fair prices and friendly greate
            selection you your recommend in quality of the products is
            exceptional, and for prices are reasonable shop selection selection
            prices.
          </p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-gray-50 p-6 border-l-4 border-red-500 rounded-lg mb-6"
          >
            <ul className="space-y-2 text-sm font-medium text-gray-700">
              <li>➤ Quality material</li>
              <li>➤ Professional Worker</li>
              <li>➤ 120 Expert Engineer</li>
            </ul>
            <ul className="space-y-2 text-sm font-medium text-gray-700">
              <li>➤ High Quality material</li>
              <li>➤ Freeze product Shipping</li>
              <li>➤ 120 Expert Engineer</li>
            </ul>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-600 transition duration-300"
          >
            Discover More →
          </motion.button>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          className="flex-1 relative w-full flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Background Image (Road Roller) */}
          <motion.img
            src="https://html.tf.dreamitsolution.net/roadly/assets/images/home_one/about-thumb.png"
            alt="Road Roller"
            className="w-full h-auto max-w-md rounded-md shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />

          {/* Overlay Image (Dump Truck) */}
          <motion.img
            src="https://html.tf.dreamitsolution.net/roadly/assets/images/home_one/about-shape.png"
            alt="Dump Truck"
            className="absolute bottom-[-40px] left-6 w-40 sm:w-48 h-auto rounded-md shadow-xl border-4 border-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          />

          {/* Experience Badge */}
          <motion.div
            className="absolute bottom-[-20px] right-6 bg-red-600 text-white text-center px-5 py-4 rounded-tl-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl font-bold leading-tight">
              <CountUp end={55} duration={3} />
            </div>
            <div className="text-xs font-medium uppercase tracking-wide">
              Years of Experience
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RoadConstruction;
