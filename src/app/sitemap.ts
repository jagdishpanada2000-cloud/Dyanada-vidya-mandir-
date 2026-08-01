import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.dvmedu.co.in", lastModified: new Date() },
    { url: "https://www.dvmedu.co.in/about", lastModified: new Date() },
    { url: "https://www.dvmedu.co.in/academics", lastModified: new Date() },
    { url: "https://www.dvmedu.co.in/admissions", lastModified: new Date() },
    { url: "https://www.dvmedu.co.in/alumni", lastModified: new Date() },
    { url: "https://www.dvmedu.co.in/contact", lastModified: new Date() },
    { url: "https://www.dvmedu.co.in/facilities", lastModified: new Date() },
    { url: "https://www.dvmedu.co.in/gallery", lastModified: new Date() },
  ];
}