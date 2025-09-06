import React, { useState, useEffect } from "react";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    img: "https://html.tf.dreamitsolution.net/roadly/assets/images/home_one/case2.png",
    label: "COMPANY",
    title: "Road Construction",
  },
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    label: "COMPANY",
    title: "Highway Project",
  },
  {
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    label: "COMPANY",
    title: "Bridge Build",
  },
  {
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
    label: "COMPANY",
    title: "City Road",
  },
  {
    img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
    label: "COMPANY",
    title: "Countryside",
  },
];

const NewestProjects = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + 1 >= projects.length - visibleCount + 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev - 1 < 0 ? projects.length - visibleCount : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const visibleProjects = projects.slice(startIndex, startIndex + visibleCount);

  return (
    <section className="bg-[#0c1832] py-16 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-screen-xl mx-auto text-white">
        {/* Header */}
        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#1a2947] rounded-full uppercase text-xs font-semibold tracking-wide border border-white border-opacity-10">
              <span className="w-3 h-[1px] bg-white"></span>
              Recent Project
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 leading-snug">
              Newest Project Overview
            </h2>
          </motion.div>

          {/* Arrows */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white text-red-600 flex items-center justify-center hover:bg-red-700 hover:text-white transition"
              aria-label="Previous"
            >
              <FiArrowLeft />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-white hover:text-red-700 transition"
              aria-label="Next"
            >
              <FiArrowRight />
            </button>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-b border-white border-opacity-10 mb-10"></div>

        {/* Project Grid with Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <AnimatePresence>
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group overflow-hidden rounded-md shadow-lg bg-[#1a2947]"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-[250px] sm:h-[280px] object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Diagonal Overlay */}
                <div className="absolute inset-x-0 bottom-0 transform translate-y-full group-hover:translate-y-0 transition-all duration-500">
                  <div className="relative bg-red-600 text-white pt-10 pb-6 px-5 clip-diagonal">
                    <div className="mb-2">
                      <span className="text-xs bg-white text-red-600 px-3 py-1 rounded-full font-semibold uppercase">
                        {project.label}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                  </div>
                </div>

                {/* Arrow Button */}
                <div className="absolute right-4 bottom-4 transform translate-x-16 group-hover:translate-x-0 transition-all duration-500">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center border-2 border-white hover:bg-white hover:text-red-600 transition"
                    aria-label="View project"
                  >
                    <FiArrowUpRight />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Custom Clip Path */}
      <style jsx>{`
        .clip-diagonal {
          clip-path: polygon(0 20%, 100% 0, 100% 100%, 0% 100%);
        }
      `}</style>
    </section>
  );
};

export default NewestProjects;
