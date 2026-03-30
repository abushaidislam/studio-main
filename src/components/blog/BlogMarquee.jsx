"use client";

import { motion } from "framer-motion";

const CategoryBox = ({ category }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, backgroundColor: "#f5f5f5" }}
      transition={{ duration: 0.2 }}
      className="flex items-center justify-center px-8 py-6 bg-white border border-neutral-200 min-w-[140px] cursor-pointer"
    >
      <span className="text-neutral-900 font-medium text-sm whitespace-nowrap">
        {category}
      </span>
    </motion.div>
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
  ];

  const items = categories.length > 0 ? categories : defaultCategories;

  return (
    <section className="py-0 border-y border-neutral-200 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row -mx-6 lg:-mx-8">
          {/* Left side - Text label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center lg:justify-start px-6 lg:px-8 py-6 lg:py-0 border-b lg:border-b-0 lg:border-r border-neutral-200 bg-white"
          >
            <p className="text-sm text-neutral-600 leading-relaxed">
              Trusted by{" "}
              <span className="text-orange-500 font-medium">80,000+</span>
              <br />
              <span className="text-orange-500 font-medium">companies</span> of all sizes
            </p>
          </motion.div>

          {/* Right side - Scrolling categories */}
          <div className="flex-1 overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {/* First set of items */}
              {items.map((category, index) => (
                <CategoryBox key={`cat-1-${index}`} category={category} />
              ))}
              {/* Duplicate for seamless loop */}
              {items.map((category, index) => (
                <CategoryBox key={`cat-2-${index}`} category={category} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogMarquee;
