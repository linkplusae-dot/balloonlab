import type { MetadataRoute } from "next";
import { employees } from "@/lib/employees/data";
import { absoluteUrl } from "@/lib/seo/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-20T00:00:00+04:00");

  const employeePages: MetadataRoute.Sitemap = employees.map((employee) => ({
    url: absoluteUrl(`/employee/${employee.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.5,
    images: [absoluteUrl(employee.cardImage)],
  }));

  return [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "weekly", priority: 1, images: [absoluteUrl("/logo-transparent.png"), absoluteUrl("/balloon-gallery.png")] },
    { url: absoluteUrl("/designs"), lastModified, changeFrequency: "weekly", priority: 0.9, images: [absoluteUrl("/occasion-birthdays.png"), absoluteUrl("/occasion-love.png"), absoluteUrl("/occasion-kids.png"), absoluteUrl("/occasion-events.png"), absoluteUrl("/occasion-corporate.png"), absoluteUrl("/occasion-surprise.png")] },
    { url: absoluteUrl("/gallery"), lastModified, changeFrequency: "weekly", priority: 0.85, images: [absoluteUrl("/balloon-gallery.png"), absoluteUrl("/occasion-birthdays.png"), absoluteUrl("/occasion-love.png"), absoluteUrl("/occasion-kids.png"), absoluteUrl("/occasion-events.png"), absoluteUrl("/occasion-corporate.png"), absoluteUrl("/occasion-surprise.png")] },
    { url: absoluteUrl("/how-it-works"), lastModified, changeFrequency: "monthly", priority: 0.8, images: [absoluteUrl("/balloon-gallery.png")] },
    { url: absoluteUrl("/about"), lastModified, changeFrequency: "monthly", priority: 0.8, images: [absoluteUrl("/mubarak-obaid-al-dhaheri-founder-balloon-lab-uae.webp"), absoluteUrl("/malik-muhammad-general-manager-balloon-lab-uae.webp"), absoluteUrl("/zain-mustafa-operational-manager-balloon-lab-uae.webp")] },
    ...employeePages,
  ];
}
