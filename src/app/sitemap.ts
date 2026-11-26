import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();

  return ["/", "/verdaqua", "/research", "/about", "/contact"].map(path => ({
    url: new URL(path, baseUrl).href,
  }));
}
