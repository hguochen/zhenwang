import type { MetadataRoute } from 'next';
import { locales } from '@/i18n';
import { absoluteUrl, navRoutes } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    navRoutes.map((route) => ({
      url: absoluteUrl(`/${locale}${route.href === '/' ? '' : route.href}`),
      changeFrequency: 'monthly' as const,
      priority: route.href === '/' ? 1 : 0.8,
      // Tells search engines the two trees are translations of one another
      // rather than duplicate content competing with each other.
      alternates: {
        languages: Object.fromEntries(
          locales.map((other) => [
            other === 'zh' ? 'zh-Hans' : 'en-SG',
            absoluteUrl(`/${other}${route.href === '/' ? '' : route.href}`),
          ]),
        ),
      },
    })),
  );
}
