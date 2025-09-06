import { FiPhoneCall, FiEdit, FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";

const cards = [
  {
    title: "CALL SUPPORT CENTER 24/7",
    icon: <FiPhoneCall className="text-red-500 text-6xl" />,
    lines: ["+1 859 120 3258", "+1 289 243 5694"],
  },
  {
    title: "WRITE TO US",
    icon: <FiEdit className="text-red-500 text-6xl" />,
    lines: ["info@example.com", "support@example.com"],
  },
  {
    title: "VISIT US",
    icon: <FiMapPin className="text-red-500 text-6xl" />,
    lines: [
      "3281 Bangladesh Rd. Rangpur, 85070",
      "2135 Rangpur Rd. Satkura, 25691",
    ],
  },
];

const ContactSection = () => {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-100 rounded-lg shadow-md p-8 flex flex-col items-start space-y-4 hover:shadow-xl transition-shadow duration-300"
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md">
              {card.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-900">{card.title}</h3>

            {/* Lines */}
            <div className="text-gray-600 text-sm space-y-1">
              {card.lines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
