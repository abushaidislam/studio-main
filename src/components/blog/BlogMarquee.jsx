"use client";

import { motion } from "framer-motion";

const MarqueeItem = ({ children }) => {
  return (
    <div className="mx-4 flex-shrink-0">
      {children}
    </div>
  );
};

const Marquee = ({ children, direction = "left", speed = 30, pauseOnHover = true }) => {
  return (
    <div
      className={`
        group
        flex
        overflow-hidden
        [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]
        ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}
      `}
    >
      <motion.div
        className="flex shrink-0 items-center"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};

const CategoryTag = ({ category }) => {
  return (
    <span className="inline-flex items-center px-6 py-3 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-sm font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap">
      {category}
    </span>
  );
};

const BlogMarquee = ({ categories = [] }) => {
  const defaultCategories = [
    "Design",
    "Development",
    "Marketing",
    "Strategy",
    "Branding",
    "UI/UX",
    "Technology",
    "Innovation",
    "Business",
    "Creative",
  ];

  const items = categories.length > 0 ? categories : defaultCategories;

  return (
    <section className="py-12 md:py-16 border-y border-neutral-200/60 bg-neutral-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-medium text-neutral-500 uppercase tracking-wider"
        >
          Browse by Category
        </motion.p>
      </div>

      <Marquee speed={40} pauseOnHover>
        {items.map((category, index) => (
          <MarqueeItem key={`${category}-${index}`}>
            <CategoryTag category={category} />
          </MarqueeItem>
        ))}
      </Marquee>

      {/* Second row - opposite direction */}
      <div className="mt-4">
        <Marquee direction="right" speed={35} pauseOnHover>
          {items.slice().reverse().map((category, index) => (
            <MarqueeItem key={`reverse-${category}-${index}`}>
              <CategoryTag category={category} />
            </MarqueeItem>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default BlogMarquee;
