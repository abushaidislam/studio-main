export const siteConfig = {
  name: "Flinkeo",
  description:
    "Flinkeo designs, builds, and refines modern digital experiences for ambitious teams.",
  url: "https://flinkeo.vercel.app",
  image: "/agency.PNG",
  email: "abushaidislam7@gmail.com",
  socials: [
    {
      title: "YouTube",
      href: "https://www.youtube.com/@flinkeo",
      icon: "youtube",
    },
    {
      title: "GitHub",
      href: "https://github.com/flinkeo",
      icon: "github",
    },
    {
      title: "Facebook",
      href: "https://www.facebook.com/flinkeo",
      icon: "facebook",
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/company/flinkeo",
      icon: "linkedin",
    },
    {
      title: "Twitter",
      href: "https://twitter.com/flinkeo",
      icon: "twitter",
    },
  ],
  offices: [
    {
      name: "Dhaka",
      lines: ["Remote-first delivery hub", "Client sessions by appointment"],
    },
    {
      name: "London",
      lines: ["Strategy and partnership meetings", "Available for UK and EU teams"],
    },
  ],
  contactEmails: [
    ["General inquiries", "hello@flinkeo.com"],
    ["Partnerships", "partnerships@flinkeo.com"],
  ],
};

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.image,
  icons = "/favicon.ico",
  noIndex = false,
} = {}) {
  const socialTitle =
    title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    openGraph: {
      title: socialTitle,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
      creator: "@flinkeo",
    },
    icons,
    metadataBase: new URL(siteConfig.url),
    themeColor: "#FFF",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
