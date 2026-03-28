import BlogHero from "@/components/blog/BlogHero";
import FeaturedPostCard from "@/components/blog/FeaturedPostCard";
import BlogGrid from "@/components/blog/BlogGrid";
import BlogMarquee from "@/components/blog/BlogMarquee";
import { getAllBlogPosts, formatBlogPostForDisplay } from "@/lib/blog";

export const metadata = {
  title: "Blog | Insights, Stories & Creative Ideas",
  description:
    "Explore our collection of articles on design, development, and digital innovation. Stay ahead with expert insights and industry trends.",
};

export default function BlogPage() {
  // Read all blog posts from MDX files
  const posts = getAllBlogPosts();
  
  // Format posts for display
  const formattedPosts = posts.map(formatBlogPostForDisplay);
  
  // Get featured post (first post) and remaining posts
  const featuredPost = formattedPosts[0] || null;
  const blogPosts = formattedPosts.slice(1);

  // Extract unique categories from posts
  const categories = [...new Set(formattedPosts.map(post => post.category))];
  // Add default categories if no posts exist
  const allCategories = categories.length > 0 
    ? categories 
    : ["Design", "Development", "Marketing", "Strategy", "Branding", "UI/UX", "Technology"];

  // Fallback featured post if no MDX files exist
  const fallbackFeaturedPost = {
    title: "The Future of Digital Design: Trends Shaping 2024 and Beyond",
    excerpt:
      "Explore the cutting-edge design trends that are transforming the digital landscape. From AI-powered interfaces to sustainable design practices, discover what's next for creative professionals and businesses alike.",
    coverImage: "/agency.PNG",
    category: "Design",
    author: {
      name: "Sarah Mitchell",
      role: "Creative Director",
      avatar: "/agency.PNG",
    },
    date: "Dec 15, 2023",
    readTime: "8 min read",
    slug: "future-of-digital-design-trends-2024",
  };
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <BlogHero />

      {/* Marquee Categories */}
      <BlogMarquee categories={allCategories} />

      {/* Featured Post */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
              Featured Story
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mt-2">
              Editor&apos;s Pick
            </h2>
          </div>
          <FeaturedPostCard post={featuredPost || fallbackFeaturedPost} />
        </div>
      </section>

      {/* Blog Grid */}
      <BlogGrid posts={blogPosts.length > 0 ? blogPosts : []} title="Latest Articles" />

      {/* Empty State - Show when no MDX files exist */}
      {formattedPosts.length === 0 && (
        <section className="py-16 md:py-24 bg-neutral-50">
          <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-display font-bold text-neutral-900 mb-4">
              No blog posts yet
            </h3>
            <p className="text-neutral-600 mb-6">
              Create a .mdx file in the <code className="bg-neutral-200 px-2 py-1 rounded text-sm">content/blog</code> directory to add your first blog post.
            </p>
            <div className="bg-neutral-900 text-white p-4 rounded-lg text-left text-sm font-mono overflow-x-auto">
              {`---
title: "Your Blog Post Title"
excerpt: "A brief description of your post"
coverImage: "/agency.PNG"
category: "Design"
date: "2024-12-01"
readTime: "5 min read"
author:
  name: "Your Name"
  role: "Your Role"
  avatar: "/agency.PNG"
---

# Your Content Here

Write your blog post content using Markdown...`}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
              Stay in the Loop
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Get the latest articles, insights, and creative inspiration delivered
              straight to your inbox every week.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-full border border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-300 transition-all"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-neutral-500 mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
