import { FaFacebookF, FaTimes, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactFormSection = () => {
  return (
    <div className="w-full bg-white p-0 m-0">
      {/* Form + Image Section */}
      <div className="flex flex-col lg:flex-row w-full">
        {/* Left Form Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-gray-100 w-full lg:w-2/3 p-8 lg:p-12"
        >
          <form className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {["Your Name", "Your Email", "Your Phone", "Your Subject"].map(
                (placeholder, i) => (
                  <input
                    key={i}
                    type="text"
                    placeholder={placeholder}
                    className="bg-transparent border-b border-gray-300 focus:border-red-600 transition-colors duration-300 py-2 px-1 w-full"
                  />
                )
              )}
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full bg-transparent border-b border-gray-300 focus:border-red-600 transition-colors duration-300 py-2 px-1 resize-none"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-red-600 text-white font-bold py-4 px-8 mt-2 rounded-md hover:bg-red-700 transition"
            >
              Submit Now
            </motion.button>
          </form>
        </motion.div>

        {/* Right Image & Social Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full lg:w-1/3 h-[400px] lg:h-auto"
        >
          <img
            src="https://html.tf.dreamitsolution.net/roadly/assets/images/inner-img/contact-thumb.png"
            alt="Person"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-red-600 to-transparent text-white flex flex-col items-center py-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex space-x-4 mb-2"
            >
              {[FaFacebookF, FaTimes, FaLinkedinIn].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="p-2 border border-white rounded-full hover:bg-white hover:text-red-600 transition"
                >
                  <Icon />
                </a>
              ))}
            </motion.div>
            <p className="uppercase text-sm tracking-wide">Follow Us</p>
          </div>
        </motion.div>
      </div>

      {/* Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="w-full h-[300px] sm:h-[400px] mt-0"
      >
        <iframe
          title="Google Map"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.346763189692!2d90.3671079753899!3d23.806324886778295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7e47a7ef9c7%3A0xcfc06144ab7f85d5!2sDhaka!5e0!3m2!1sen!2sbd!4v1694011120550!5m2!1sen!2sbd"
        ></iframe>
      </motion.div>
    </div>
  );
};

export default ContactFormSection;
