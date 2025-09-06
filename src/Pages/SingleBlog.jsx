import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../Components/BlogsData";
import BlogBanner from "../Components/BlogBanner";
import { motion } from "framer-motion";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogPosts.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#f8f9fb]">
        <h2 className="text-2xl sm:text-3xl font-bold text-red-600">
          Blog not found
        </h2>
      </div>
    );
  }

  return (
    <div className="bg-[#f8f9fb] min-h-screen flex flex-col">
      <BlogBanner />

      <section className="flex-grow py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Blog Image */}
          <motion.div
            className="mb-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* Blog Title */}
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1A36] mb-6 leading-snug"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {blog.title}
          </motion.h1>

          {/* Blog Content */}
          <motion.p
            className="text-gray-700 text-base sm:text-lg leading-relaxed whitespace-pre-line"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {blog.description}
          </motion.p>

          {/* Back Link */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link
              to="/blogs"
              className="inline-block text-red-600 font-semibold hover:underline transition"
            >
              ← Back to Blogs
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default BlogDetails;
