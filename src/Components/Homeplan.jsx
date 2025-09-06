import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Patching Planning",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        strokeWidth="1.5" className="w-10 h-10 stroke-current">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
        <rect x="2" y="4" width="20" height="16" rx="2" ry="2"
          stroke="currentColor" strokeDasharray="4 2" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Detailed Proposal",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        strokeWidth="1.5" className="w-10 h-10 stroke-current">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M12 14l6.16-3.422a12.083 12.083 0 01.843 5.852M12 14v7.5" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Road Installation",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        strokeWidth="1.5" className="w-10 h-10 stroke-current">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M14.25 9.75l-2.5 2.5m0 0l-2.5 2.5m2.5-2.5v5.5m-7-7l7-7m0 0L21 7.5m-7-7v5.5" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Finished Road",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        strokeWidth="1.5" className="w-10 h-10 stroke-current">
        <rect x="9" y="3" width="6" height="18" rx="1" ry="1" stroke="currentColor" />
      </svg>
    ),
  },
];

const Arrow = () => (
  <motion.img
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    src="https://html.tf.dreamitsolution.net/roadly/assets/images/home_one/arrow.png"
    alt="arrow"
    className="w-16 sm:w-20 md:w-24 h-6 sm:h-8 mx-3 flex-shrink-0"
  />
);

const Step = ({ id, title, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="group flex flex-col items-center text-center relative cursor-pointer"
  >
    <div className="relative flex items-center justify-center w-24 h-24">
      {/* Rotating dashed circle on hover */}
      <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-300 group-hover:border-red-600 group-hover:[animation:spin_5s_linear_infinite]"></div>

      {/* Icon container */}
      <div className="bg-white rounded-full p-5 shadow-md relative z-10 transition-transform duration-500 group-hover:scale-110">
        {React.cloneElement(icon, {
          className:
            "w-10 h-10 stroke-current text-gray-500 group-hover:text-red-600 transition-colors duration-300",
        })}
        {/* Badge */}
        <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-semibold shadow-md">
          {id}
        </div>
      </div>
    </div>

    <h3 className="mt-4 font-semibold text-gray-900 max-w-[150px] group-hover:text-red-600 transition-colors duration-300">
      {title}
    </h3>
  </motion.div>
);

const RoadSteps = () => {
  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="flex flex-row flex-nowrap items-center justify-center gap-6 sm:gap-8 md:gap-10 max-w-full overflow-x-auto scrollbar-hide">
        {steps.map((step, idx) => (
          <React.Fragment key={step.id}>
            <Step {...step} />
            {idx < steps.length - 1 && <Arrow />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default RoadSteps;
