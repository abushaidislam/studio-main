/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Disabled mdxRs to fix special character rendering in tables
  // experimental: {
  //   mdxRs: true,
  // },
}

module.exports = nextConfig
