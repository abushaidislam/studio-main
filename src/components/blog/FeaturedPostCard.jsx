"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowUpRight, FiClock } from "react-icons/fi";

const BorderBeam = ({ className = "" }) => {
  return (
    <div
      className={`
        pointer-events-none
        absolute
        inset-0
        rounded-[inherit]
        [border:calc(var(--border-width)*1px)_solid_transparent]
        ![mask-clip:padding-box,border-box]
        ![mask-composite:intersect]
        [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]
        after:absolute
        after:aspect-square
        after:w-[200%]
        after:animate-border-beam
        after:[background:linear-gradient(to_left,var(--beam-color),transparent,transparent)]
        after:[offset-anchor:90%_50%]
        after:[offset-path:rect(0_auto_auto_0_round_calc(var(--border-width)*1px))]
        ${className}
      `}
      style={{
        "--border-width": "2",
        "--beam-color": "#171717",
        "--beam-speed": "8s",
      }}
    />
  );
};

const FeaturedPostCard = ({ post }) => {
  const {
    title,
    excerpt,
    coverImage,
    category,
    author,
    date,
    readTime,
    slug,
  } = post;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="group relative"
    >
      {/* Card Container with Border Beam */}
      <div className="relative overflow-hidden rounded-3xl bg-white border border-neutral-200/60 shadow-sm hover:shadow-xl transition-shadow duration-500">
        {/* Animated Border Effect */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.03) 50%, transparent 100%)",
                backgroundSize: "200% 100%",
                animation: "shimmer 2s infinite",
              }}
            />
          </motion.div>
          {/* Border glow effect on hover */}
          <motion.div
            className="absolute inset-0 rounded-3xl"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)",
            }}
          />
        </div>

        <a href={`/blog/${slug}`} className="block relative z-10">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden">
              <Image
                src={coverImage}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Category Badge */}
              <div className="absolute top-6 left-6">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-neutral-900 text-sm font-medium shadow-sm">
                  {category}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              {/* Meta Info */}
              <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
                <span>{date}</span>
                <span className="w-1 h-1 rounded-full bg-neutral-300" />
                <span className="flex items-center gap-1.5">
                  <FiClock className="w-4 h-4" />
                  {readTime}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-neutral-900 leading-tight mb-4 group-hover:text-neutral-700 transition-colors">
                {title}
              </h2>

              {/* Excerpt */}
              <p className="text-neutral-600 leading-relaxed mb-6 line-clamp-3">
                {excerpt}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-neutral-200 overflow-hidden relative">
                  <Image
                    src={author.avatar}
                    alt={author.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <div className="font-medium text-neutral-900">
                    {author.name}
                  </div>
                  <div className="text-sm text-neutral-500">{author.role}</div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex items-center gap-2 text-neutral-900 font-medium group/link">
                <span className="relative">
                  Read Article
                  <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-neutral-900 transition-all duration-300 group-hover/link:w-full" />
                </span>
                <FiArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>
        </a>
      </div>
    </motion.article>
  );
};

export default FeaturedPostCard;
