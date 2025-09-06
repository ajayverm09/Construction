import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const cards = [
    {
      title: "Parking Lots",
      desc: "Fantastic shop! Great selection prices service friendly creatives agency recend from selection, prices...",
      img: "https://html.tf.dreamitsolution.net/roadly/assets/images/home_one/service-thumb.png",
      icon: "https://html.tf.dreamitsolution.net/roadly/assets/images/home_one/service-icon.png",
    },
    {
      title: "Seal Coating",
      desc: "Fantastic shop! Great selection prices service friendly creatives agency recend from selection, prices...",
      img: "https://html.tf.dreamitsolution.net/roadly/assets/images/home_one/service-thumb2.png",
      icon: "https://html.tf.dreamitsolution.net/roadly/assets/images/home_one/service-icon2.png",
    },
    {
      title: "Concrete Services",
      desc: "Fantastic shop! Great selection prices service friendly creatives agency recend from selection, prices...",
      img: "https://html.tf.dreamitsolution.net/roadly/assets/images/home_one/service-thumb2.png",
      icon: "https://html.tf.dreamitsolution.net/roadly/assets/images/home_one/service-icon3.png",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white shadow-md p-6 rounded-lg flex flex-col justify-between group overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2"
          >
            {/* Title + Description */}
            <h3 className="text-xl font-bold mb-2 text-gray-900 transition-colors duration-300 group-hover:text-red-600">
              {card.title}
            </h3>
            <p className="text-gray-600 mb-4 transition-colors duration-300 group-hover:text-red-500">
              {card.desc}
            </p>

            {/* Read More */}
            <a
              href="#"
              className="text-sm font-medium flex items-center gap-1 hover:text-red-600 transition hover:underline"
            >
              <span>Read More</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                ↗
              </motion.span>
            </a>

            {/* Image Section */}
            <div className="relative mt-6">
              {/* Hover Ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border-[6px] border-red-200 opacity-0 scale-75 group-hover:opacity-70 group-hover:scale-100 transition duration-500" />
              </div>

              {/* Image */}
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                src={card.img}
                alt={card.title}
                className="w-full h-48 object-cover rounded-md relative z-10"
              />

              {/* Icon Box */}
              <motion.div
                whileHover={{ rotate: 6, scale: 1.1 }}
                className="absolute top-0 right-0 bg-[#E53925] p-3 rounded-bl-lg z-20 transition-transform duration-300"
              >
                <img
                  src={card.icon}
                  alt={`${card.title} icon`}
                  className="w-6 h-6 invert"
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
