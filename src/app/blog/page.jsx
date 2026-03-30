import BlogHero from "@/components/blog/BlogHero";
import FeaturedPostCard from "@/components/blog/FeaturedPostCard";
import BlogGrid from "@/components/blog/BlogGrid";
import BlogMarquee from "@/components/blog/BlogMarquee";
import NewsletterSignupForm from "@/components/NewsletterSignupForm";
import { constructMetadata } from "@/config/site";
import { getAllBlogPosts, formatBlogPostForDisplay } from "@/lib/blog";

export const metadata = constructMetadata({
  title: "Blog",
  description:
    "Insights from Flinkeo on design systems, digital delivery, product thinking, and modern web execution.",
});

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const formattedPosts = posts.map(formatBlogPostForDisplay);
  const featuredPost = formattedPosts[0] || null;
  const blogPosts = formattedPosts.slice(1);
  const categories = [...new Set(formattedPosts.map((post) => post.category))];
  const allCategories =
    categories.length > 0
      ? categories
      : [
          "Design",
          "Development",
          "Marketing",
          "Strategy",
          "Branding",
          "UI/UX",
          "Technology",
        ];

  const fallbackFeaturedPost = {
    title: "Designing digital experiences that teams can actually maintain",
    excerpt:
      "A closer look at how strong systems, sharper messaging, and practical front-end decisions create better launches.",
    coverImage: "/agency.PNG",
    category: "Strategy",
    author: {
      name: "Flinkeo Editorial Team",
      role: "Insights Desk",
      avatar: "/agency.PNG",
    },
    date: "Mar 30, 2026",
    readTime: "6 min read",
    slug: "designing-digital-experiences-that-scale",
  };

  return (
    <main className="min-h-screen bg-white">
      <BlogHero />
      <BlogMarquee categories={allCategories} />

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

      <BlogGrid
        posts={blogPosts.length > 0 ? blogPosts : []}
        title="Latest Articles"
      />

      {formattedPosts.length === 0 && (
        <section className="py-16 md:py-24 bg-neutral-50">
          <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-display font-bold text-neutral-900 mb-4">
              No blog posts yet
            </h3>
            <p className="text-neutral-600 mb-6">
              Create a `.mdx` file in the{" "}
              <code className="bg-neutral-200 px-2 py-1 rounded text-sm">
                content/blog
              </code>{" "}
              directory to publish the first Flinkeo article.
            </p>
            <div className="bg-neutral-900 text-white p-4 rounded-lg text-left text-sm font-mono overflow-x-auto">
              {`---
title: "Your Blog Post Title"
excerpt: "A brief description of your post"
coverImage: "/agency.PNG"
category: "Design"
date: "2026-03-30"
readTime: "5 min read"
author:
  name: "Flinkeo Team"
  role: "Editorial"
  avatar: "/agency.PNG"
---

# Your Content Here

Write your blog post content using Markdown...`}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
              Stay in the Loop
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Subscribe by email to hear when Flinkeo publishes new thinking on
              product, design, and digital delivery.
            </p>
            <NewsletterSignupForm />
            <p className="text-sm text-neutral-500 mt-4">
              This opens a prefilled email so you can request updates directly.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
