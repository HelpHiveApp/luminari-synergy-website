import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = new URL("https://www.luminarisynergy.com");

  return ["/", "/verdaqua", "/research", "/about", "/contact"].map(path => ({
    url: new URL(path, baseUrl).href,
  }));
}
