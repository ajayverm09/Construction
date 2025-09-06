import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

// Testimonials Data
const testimonials = [
  {
    name: "Alva Edison",
    role: "REGULAR CUSTOMER",
    text: "Vestibulum mauris morbi porttitor sagittis aptent hendrerit for gravida senectus venenatis conubia mattis vestibulum. Proin vel vulputate clien cursus massa elementum diam varius torquent.",
    rating: 4,
  },
  {
    name: "Sophia Turner",
    role: "PROJECT MANAGER",
    text: "Excellent work and timely completion. Their team exceeded expectations with professionalism and dedication.",
    rating: 5,
  },
  {
    name: "Michael Lee",
    role: "ARCHITECT",
    text: "Very smooth process from start to finish. I highly recommend them for quality and reliability.",
    rating: 5,
  },
  {
    name: "Emma Watson",
    role: "DESIGNER",
    text: "They transformed our vision into reality. Attention to detail was amazing.",
    rating: 4,
  },
  {
    name: "David Brown",
    role: "SITE ENGINEER",
    text: "The team was fantastic. Communication was clear and the final result was beyond expectations.",
    rating: 5,
  },
  {
    name: "Isabella Green",
    role: "CLIENT",
    text: "I’m extremely happy with the outcome. Professional, reliable, and efficient!",
    rating: 5,
  },
];

const TestimonialSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-[#0B1A36] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <img
              src="https://html.tf.dreamitsolution.net/roadly/assets/images/home_one/testi-thumb.png"
              alt="Client"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Right - Swiper */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-white w-full relative"
          >
            <Swiper
              modules={[Navigation]}
              loop
              spaceBetween={30}
              slidesPerView={1}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              className="w-full"
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="w-full"
                  >
                    <span className="inline-block px-4 py-1 bg-[#14284A] text-sm font-medium rounded-full">
                      CLIENT FEEDBACK
                    </span>
                    <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                      What Clients Say About Us
                    </h2>
                    <p className="mt-6 text-gray-300 leading-relaxed max-w-xl">
                      "{item.text}"
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <span className="text-gray-400 text-sm">— {item.role}</span>
                    </div>
                    <div className="mt-4 flex gap-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar
                          key={i}
                          className={`w-5 h-5 ${
                            i < item.rating ? "text-red-500" : "text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-10">
              <motion.button
                ref={prevRef}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 sm:w-12 sm:h-12 text-xl rounded-full bg-red-600 flex items-center justify-center text-white shadow-md hover:bg-white hover:text-red-600 transition"
              >
                ←
              </motion.button>
              <motion.button
                ref={nextRef}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 sm:w-12 sm:h-12 text-xl rounded-full bg-white text-red-600 flex items-center justify-center shadow-md hover:bg-red-600 hover:text-white transition"
              >
                →
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
