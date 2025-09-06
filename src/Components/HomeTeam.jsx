import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const team = [
  {
    name: "Ronald Richards",
    role: "ASST. ENGINEER",
    img: "https://html.tf.dreamitsolution.net/roadly/assets/images/home_one/team1.png",
  },
  {
    name: "Saifur Rahman",
    role: "ASST. ENGINEER",
    img: "https://html.tf.dreamitsolution.net/roadly/assets/images/home_one/team2.png",
  },
  {
    name: "Al-Amin Hossen",
    role: "ASST. ENGINEER",
    img: "https://html.tf.dreamitsolution.net/roadly/assets/images/home_one/team3.png",
  },
  {
    name: "Apurbo Islam",
    role: "ASST. ENGINEER",
    img: "https://html.tf.dreamitsolution.net/roadly/assets/images/home_one/team4.png",
  },
];

const TeamSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <span className="px-4 py-1 text-sm font-medium text-red-600 bg-red-50 rounded-full">
          OUR TEAM
        </span>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
          Expert Team Member
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {team.map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="group relative bg-gray-50 shadow-md rounded-md overflow-hidden"
          >
            {/* Image */}
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-72 object-cover"
            />

            {/* Content */}
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>

            {/* Social Bar */}
            <div className="relative overflow-hidden h-16">
              {/* Red Background sliding in on hover */}
              <div className="absolute inset-0 rounded-r-full bg-red-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>

              {/* Social Icons */}
              <div className="relative z-10 flex items-center justify-center gap-4 h-full">
                <a
                  href="#"
                  className="w-10 h-10 text-gray-500 flex items-center justify-center transition-all duration-300 group-hover:border-white group-hover:rounded-full group-hover:border group-hover:text-white"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 text-gray-500 flex items-center justify-center transition-all duration-300 group-hover:border-white group-hover:rounded-full group-hover:border group-hover:text-white"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 text-gray-500 flex items-center justify-center transition-all duration-300 group-hover:border-white group-hover:rounded-full group-hover:border group-hover:text-white"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
