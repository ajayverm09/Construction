// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const socialIcons = [FaFacebook, FaLinkedin, FaInstagram, FaPinterest];

  // Quick Links with route paths
  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Blogs", path: "/blogs" },
    { name: "Get in Touch", path: "/get-in-touch" },
  ];

  return (
    <footer className="relative bg-[#0F1D37] text-gray-300 overflow-hidden">
      {/* Moving Line Background */}
      <div
        className="moving-line absolute bottom-[56px] left-0 w-full h-14 bg-no-repeat bg-bottom z-0"
        style={{
          backgroundImage:
            "url('https://html.tf.dreamitsolution.net/roadly/assets/images/home_one/footer-shape.png')",
          backgroundSize: "auto 60px",
        }}
      />

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-28 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Logo & About */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 mb-4">
            <img
              src="https://html.tf.dreamitsolution.net/roadly/assets/images/footer-logo.png"
              alt="Roadly"
              className="h-10"
            />
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Evolve professional intellectual capital from fantastic shop! Great
            selection fair profesio need and clean develop
          </p>
          <div className="flex space-x-4">
            {socialIcons.map((Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ scale: 1.2, rotate: 8 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 border border-gray-500 rounded-full hover:bg-red-600 hover:text-white transition"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link, i) => (
              <li key={i}>
                <motion.div
                  whileHover={{ x: 5, color: "#ef4444" }}
                  transition={{ type: "tween" }}
                  className="inline-block transition"
                >
                  <Link to={link.path}>› {link.name}</Link>
                </motion.div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Recent News */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-white text-lg font-semibold mb-4">Recent News</h3>
          <div className="space-y-4">
            {[
              {
                img: "https://html.tf.dreamitsolution.net/roadly/assets/images/home_one/footer-thumb1.png",
                title: "How to add battery backup...",
                date: "May 10, 2024",
              },
              {
                img: "https://html.tf.dreamitsolution.net/roadly/assets/images/home_one/footer-thumb2.png",
                title: "How to add battery Low...",
                date: "May 11, 2024",
              },
            ].map((news, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="flex space-x-3"
              >
                <img
                  src={news.img}
                  alt="news"
                  className="h-14 w-14 object-cover rounded"
                />
                <div>
                  <a
                    href="#"
                    className="text-sm hover:text-red-500 transition block"
                  >
                    {news.title}
                  </a>
                  <p className="text-xs text-gray-400">Date : {news.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-white text-lg font-semibold mb-4">
            Contact Info
          </h3>
          <p className="text-sm mb-4">
            Subscribe to our newsletter to get the latest updates & news.
          </p>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 text-gray-200 rounded border border-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md font-medium transition"
            >
              Subscribe Now
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="z-10 border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © 2024 <span className="text-red-500">Roadly</span>. All Rights Reserved.
      </div>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes moveBg {
          from { background-position-x: 100%; }
          to { background-position-x: 0%; }
        }
        .moving-line {
          animation: moveBg 20s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
