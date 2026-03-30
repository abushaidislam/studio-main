import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowLeft, FiClock, FiCalendar } from "react-icons/fi";
import { constructMetadata } from "@/config/site";
import { getBlogPostBySlug, formatBlogPostForDisplay } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { MermaidDiagram } from "@/components/MermaidDiagram";
import { MathRenderer } from "@/components/MathRenderer";
import remarkGfm from "remark-gfm";

export async function generateMetadata({ params }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return constructMetadata({
      title: "Post Not Found",
      noIndex: true,
    });
  }

  const formattedPost = formatBlogPostForDisplay(post);

  return constructMetadata({
    title: formattedPost.title,
    description: formattedPost.excerpt,
  });
}

const components = {
  h1: (props) => (
    <h1
      className="text-3xl md:text-4xl font-bold text-neutral-900 mt-12 mb-6"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="text-2xl md:text-3xl font-bold text-neutral-900 mt-10 mb-5"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="text-xl md:text-2xl font-bold text-neutral-900 mt-8 mb-4"
      {...props}
    />
  ),
  p: (props) => (
    <p className="text-lg text-neutral-600 leading-relaxed mb-6" {...props} />
  ),
  ul: (props) => (
    <ul
      className="list-disc list-inside space-y-2 mb-6 text-neutral-600 ml-4"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="list-decimal list-inside space-y-2 mb-6 text-neutral-600 ml-4"
      {...props}
    />
  ),
  li: (props) => <li className="text-lg leading-relaxed" {...props} />,
  strong: (props) => (
    <strong className="font-semibold text-neutral-900" {...props} />
  ),
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-neutral-900 pl-6 italic text-neutral-700 my-8 text-xl"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="bg-neutral-100 px-2 py-1 rounded text-sm font-mono text-neutral-800"
      {...props}
    />
  ),
  pre: ({ children, ...props }) => {
    const childArray = React.Children.toArray(children);
    const firstChild = childArray[0];

    if (
      firstChild &&
      firstChild.props &&
      firstChild.props.className === "language-mermaid"
    ) {
      return <MermaidDiagram chart={firstChild.props.children} />;
    }

    if (
      firstChild &&
      firstChild.props &&
      firstChild.props.className === "language-math"
    ) {
      return <MathRenderer math={firstChild.props.children} block={true} />;
    }

    return (
      <pre
        className="bg-neutral-900 text-white p-6 rounded-lg overflow-x-auto mb-6"
        {...props}
      >
        {children}
      </pre>
    );
  },
  a: (props) => (
    <a
      className="text-neutral-900 underline hover:text-neutral-600 transition-colors"
      {...props}
    />
  ),
  img: (props) => (
    <Image
      {...props}
      className="rounded-lg w-full my-8"
      width={800}
      height={400}
      alt={props.alt || ""}
    />
  ),
  table: (props) => (
    <div className="overflow-x-auto my-6 rounded-lg border border-neutral-200 shadow-sm">
      <table className="min-w-full border-collapse bg-white" {...props} />
    </div>
  ),
  thead: (props) => <thead className="bg-neutral-900 text-white" {...props} />,
  tbody: (props) => <tbody className="bg-white" {...props} />,
  tr: (props) => (
    <tr
      className="border-b border-neutral-200 hover:bg-neutral-50 transition-colors"
      {...props}
    />
  ),
  th: (props) => (
    <th
      className="px-4 py-3 text-left font-semibold text-white border-r border-neutral-700 last:border-r-0"
      {...props}
    />
  ),
  td: (props) => (
    <td
      className="px-4 py-3 text-neutral-800 border-r border-neutral-200 last:border-r-0"
      {...props}
    />
  ),
};

export default function BlogPostPage({ params }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const formattedPost = formatBlogPostForDisplay(post);

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
        >
          <FiArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>

      <article className="max-w-4xl mx-auto px-6 lg:px-8 pt-8 pb-16">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-neutral-100 text-neutral-900 text-sm font-medium mb-6">
          {formattedPost.category}
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-neutral-900 leading-tight mb-6">
          {formattedPost.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-neutral-500 mb-8 pb-8 border-b border-neutral-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden relative">
              <Image
                src={formattedPost.author.avatar}
                alt={formattedPost.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-medium text-neutral-900">
                {formattedPost.author.name}
              </div>
              <div className="text-sm">{formattedPost.author.role}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FiCalendar className="w-4 h-4" />
            {formattedPost.date}
          </div>
          <div className="flex items-center gap-2">
            <FiClock className="w-4 h-4" />
            {formattedPost.readTime}
          </div>
        </div>

        {formattedPost.coverImage && (
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-12">
            <Image
              src={formattedPost.coverImage}
              alt={formattedPost.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          <MDXRemote
            source={post.content}
            components={components}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
              },
            }}
          />
        </div>
      </article>
    </main>
  );
}
