import type { MetadataRoute } from 'next';
import { absoluteUrl, nav } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return nav.map((item) => ({
    url: absoluteUrl(item.href),
    changeFrequency: 'monthly',
    priority: item.href === '/' ? 1 : 0.8,
  }));
}
