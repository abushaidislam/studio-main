# Flinkeo

Flinkeo is a multi-page agency website built with Next.js, Tailwind CSS, Framer Motion, and MDX-powered blog content. The project is structured around a branded marketing site with supporting content pages, contact flows, and editorial posts.

![Flinkeo](/public/agency.PNG)

## Stack

- Next.js 13 App Router
- Tailwind CSS
- Framer Motion
- MDX blog content

## Project highlights

- Branded marketing pages for home, about, process, work, contact, and blog
- Shared metadata and site configuration for consistent Flinkeo identity
- Email-based contact and newsletter flows using `mailto:`
- Blog content sourced from `content/blog`

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open `http://localhost:3000`

## Content

- Marketing pages live under `src/app`
- Reusable UI sections live under `src/components`
- Blog posts live under `content/blog`
- Shared site identity and contact details live in `src/config/site.js`
