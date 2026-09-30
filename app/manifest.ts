import type { MetadataRoute } from 'next';
import { BUSINESS } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BUSINESS.fullName,
    short_name: BUSINESS.name,
    description: BUSINESS.tagline,
    start_url: '/',
    display: 'standalone',
    background_color: '#0a1f14',
    theme_color: '#0a1f14',
    icons: [{ src: BUSINESS.logo, sizes: '512x512', type: 'image/png', purpose: 'any' }],
  };
}
