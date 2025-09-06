import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  { id: 1, end: 26, suffix: "k", label: "PROJECT COMPLETED" },
  { id: 2, end: 24, suffix: "k", label: "SATISFIED CLIENTS" },
  { id: 3, end: 47, suffix: "+", label: "YEARS OF EXPERIENCE" },
  { id: 4, end: 56, suffix: "k", label: "TOTAL BRANCHES" },
];

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

const StatsSection = () => {
  return (
    <section className="w-full bg-red-600 text-white flex flex-wrap">
      {stats.map(({ id, end, suffix, label }, i) => (
        <motion.div
          key={id}
          custom={i}
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
          viewport={{ once: true }}
          className="flex-1 min-w-[150px] sm:min-w-[200px] py-10 text-center border-r border-red-500 last:border-r-0"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-2">
            <CountUp end={end} duration={3} separator="," />{suffix}
          </h2>
          <p className="uppercase text-xs sm:text-sm tracking-widest">
            {label}
          </p>
        </motion.div>
      ))}
    </section>
  );
};

export default StatsSection;
