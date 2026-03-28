"use client";

import { motion } from "framer-motion";
import { FadeInStagger } from "@/components/FadeIn";

const AnimatedGradientText = ({ children, className = "" }) => {
  return (
    <span
      className={`
        inline-flex
        animate-gradient
        bg-gradient-to-r
        from-neutral-900
        via-neutral-500
        to-neutral-900
        bg-[length:200%_auto]
        bg-clip-text
        text-transparent
        ${className}
      `}
    >
      {children}
    </span>
  );
};

const BlogHero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeInStagger className="flex flex-col items-center text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-neutral-100 text-neutral-600 text-sm font-medium mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-500" />
            </span>
            Our Blog
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold tracking-tight text-neutral-900 max-w-5xl"
          >
            Insights, stories, and{" "}
            <AnimatedGradientText className="font-display font-bold">
              creative ideas
            </AnimatedGradientText>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-neutral-600 max-w-2xl leading-relaxed"
          >
            Explore our collection of articles on design, development, and
            digital innovation. Stay ahead with expert insights and industry
            trends.
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex flex-wrap justify-center gap-8 md:gap-12"
          >
            {[
              { value: "150+", label: "Articles" },
              { value: "50K", label: "Readers" },
              { value: "Weekly", label: "Updates" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-neutral-900">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </FadeInStagger>
      </div>

      {/* CSS for gradient animation */}
      <style jsx global>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 4s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default BlogHero;
