import type { Metadata } from "next";

export const siteConfig = {
  name: "Balloon Lab",
  url: "https://balloonlab.ae",
  tagline: "Memories Made",
  locale: "en_AE",
  language: "en-AE",
  phoneDisplay: "+971 56 131 5511",
  phoneE164: "+971561315511",
  whatsapp: "https://wa.me/971561315511",
  address: "Office 26, Floor 20, Al Wahda Commercial Tower, Abu Dhabi, UAE",
  social: {
    instagram: "https://instagram.com/balloonlabae",
    tiktok: "https://www.tiktok.com/@balloonlabae",
    linkedin: "https://www.linkedin.com/in/balloonlab-ae-95bb74420/",
  },
} as const;

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords: string[];
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
}: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: path,
      siteName: siteConfig.name,
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${siteConfig.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: ["/opengraph-image"],
    },
  };
}

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
