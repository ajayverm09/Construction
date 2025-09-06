import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "./BlogsData";
import { motion } from "framer-motion";

const BlogS = () => {
  return (
    <section className="bg-[#f8f9fb] py-16 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <span className="text-red-600 font-medium text-sm uppercase tracking-wide mb-2 block">
            Recent Blog
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1A36]">
            Read our News & Blogs
          </h2>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => {
            const preview =
              post.description.split(" ").slice(0, 20).join(" ") + "...";

            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
              >
                <Link
                  to={`/blogs/${post.id}`}
                  className="bg-white rounded-md shadow-md hover:shadow-xl transition duration-300 overflow-hidden group flex flex-col h-full"
                >
                  {/* Image */}
                  <div className="overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      src={post.image}
                      alt={post.title}
                      className="w-full h-72 object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-[#0B1A36] group-hover:text-red-600 transition-colors duration-300 mb-1">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      {preview}
                    </p>

                    <motion.div
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center justify-start text-sm font-medium text-black px-4 py-2 w-fit group-hover:text-red-600 rounded-md transition"
                    >
                      Read More ....
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogS;
