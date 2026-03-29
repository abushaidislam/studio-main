import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content/blog');

export function getAllBlogPosts() {
  // Create directory if it doesn't exist
  if (!fs.existsSync(contentDirectory)) {
    fs.mkdirSync(contentDirectory, { recursive: true });
    return [];
  }

  const files = fs.readdirSync(contentDirectory);
  const mdxFiles = files.filter((file) => file.endsWith('.mdx') || file.endsWith('.md'));

  const posts = mdxFiles.map((fileName) => {
    const slug = fileName.replace(/\.mdx?$/, '');
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      frontmatter: data,
      content,
    };
  });

  // Sort by date (newest first)
  return posts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date || '');
    const dateB = new Date(b.frontmatter.date || '');
    return dateB - dateA;
  });
}

export function getBlogPostBySlug(slug) {
  const fullPath = path.join(contentDirectory, `${slug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    // Try .md extension
    const mdPath = path.join(contentDirectory, `${slug}.md`);
    if (!fs.existsSync(mdPath)) {
      return null;
    }
  }
  
  const filePath = fs.existsSync(fullPath) ? fullPath : path.join(contentDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    frontmatter: data,
    content,
  };
}

export function formatBlogPostForDisplay(post) {
  // Fix coverImage path - strip /public prefix if present
  let coverImage = post.frontmatter.coverImage || post.frontmatter.image || '/agency.PNG';
  if (coverImage.startsWith('/public/')) {
    coverImage = coverImage.replace('/public/', '/');
  }

  return {
    slug: post.slug,
    title: post.frontmatter.title || 'Untitled',
    excerpt: post.frontmatter.excerpt || post.frontmatter.description || '',
    coverImage: coverImage,
    category: post.frontmatter.category || 'General',
    date: post.frontmatter.date ? new Date(post.frontmatter.date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }) : '',
    readTime: post.frontmatter.readTime || `${Math.ceil(post.content.split(' ').length / 200)} min read`,
    author: {
      name: post.frontmatter.author?.name || post.frontmatter.author || 'Anonymous',
      role: post.frontmatter.author?.role || post.frontmatter.authorRole || 'Author',
      avatar: post.frontmatter.author?.avatar || post.frontmatter.authorImage || '/agency.PNG',
    },
    content: post.content,
  };
}
