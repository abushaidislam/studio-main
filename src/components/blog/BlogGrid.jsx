"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowUpRight, FiClock } from "react-icons/fi";
import { FadeInStagger } from "@/components/FadeIn";

const BlogCard = ({ post, index }) => {
  const { title, excerpt, coverImage, category, date, readTime, slug } = post;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group"
    >
      <a href={`/blog/${slug}`} className="block">
        {/* Card */}
        <div className="relative overflow-hidden rounded-2xl bg-white border border-neutral-200/60 hover:border-neutral-300 transition-all duration-300 hover:shadow-lg hover:shadow-neutral-200/50">
          {/* Image Container */}
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-neutral-900 text-xs font-medium shadow-sm">
                {category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            {/* Meta */}
            <div className="flex items-center gap-3 text-xs text-neutral-500 mb-3">
              <span>{date}</span>
              <span className="w-1 h-1 rounded-full bg-neutral-300" />
              <span className="flex items-center gap-1">
                <FiClock className="w-3.5 h-3.5" />
                {readTime}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-neutral-900 leading-snug mb-2 group-hover:text-neutral-700 transition-colors line-clamp-2">
              {title}
            </h3>

            {/* Excerpt */}
            <p className="text-sm text-neutral-600 leading-relaxed line-clamp-2 mb-4">
              {excerpt}
            </p>

            {/* Read More */}
            <div className="flex items-center gap-1.5 text-sm font-medium text-neutral-900">
              <span className="relative">
                Read More
                <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-neutral-900 transition-all duration-300 group-hover:w-full" />
              </span>
              <FiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </div>
      </a>
    </motion.article>
  );
};

const BlogGrid = ({ posts, title = "Latest Articles" }) => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <FadeInStagger>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-sm font-medium text-neutral-500 uppercase tracking-wider"
              >
                Explore More
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mt-2"
              >
                {title}
              </motion.h2>
            </div>
            
            {/* View All Link */}
            <motion.a
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              href="/blog/all"
              className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
            >
              View All Articles
              <FiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          </div>
        </FadeInStagger>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
