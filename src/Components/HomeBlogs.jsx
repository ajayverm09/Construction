import React from "react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "10 Tips to Find Best Backhoe",
    image:
      "https://html.tf.dreamitsolution.net/roadly/assets/images/home_one/blog1.png",
    description:
      "Fantastic shop! Great selection prices service read our news recend from.",
  },
  {
    title: "We’ll Restore Your Old Road",
    image:
      "https://html.tf.dreamitsolution.net/roadly/assets/images/home_one/blog2.png",
    description:
      "Fantastic shop! Great selection prices service read our news recend from.",
  },
  {
    title: "Best Practices management",
    image:
      "https://html.tf.dreamitsolution.net/roadly/assets/images/home_one/blog3.png",
    description:
      "Fantastic shop! Great selection prices service read our news recend from.",
  },
];

const BlogSection = () => {
  return (
    <section className="bg-[#f8f9fb] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-red-600 font-medium text-sm uppercase tracking-wide mb-2">
            Recent Blog
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1A36]">
            Read our News & Blogs
          </h2>
        </motion.div>

        {/* Blog Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white rounded-md shadow-sm hover:shadow-xl transition duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-lg font-semibold text-[#0B1A36] group-hover:text-red-600 transition-colors duration-300 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {post.description}
                  </p>
                </div>

                {/* Read More Link with Icon */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex justify-between items-center text-sm font-medium text-gray-700 group-hover:text-red-600 transition-colors duration-300 cursor-pointer"
                >
                  <span>Read More</span>
                  <motion.img
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    src="https://cdn-icons-png.flaticon.com/128/13554/13554816.png"
                    alt="Arrow Icon"
                    className="w-10 h-10"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
