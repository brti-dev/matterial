const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    '@ariakit/react',
    'matterial',
    'react-icons/ai',
    'react-icons/bi',
  ],
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}

module.exports = withMDX(nextConfig)
