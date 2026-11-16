import type {NextConfig} from 'next';

// Where the sponsorship pages live (BISA Partners on Vercel). Change it when the
// app moves to app.bilusoccer.com, or set SPONSOR_APP_ORIGIN to test locally.
const SPONSOR_APP = (process.env.SPONSOR_APP_ORIGIN ?? 'https://bisapartner-one.vercel.app').replace(/\/$/, '');

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Allow access to remote image placeholder.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**', // This allows any path under the hostname
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'bilusoccer.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Canonical host is www (see lib/site.ts). Send the bare domain there so Google sees one version of each page.
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'bilusoccer.com' }],
        destination: 'https://www.bilusoccer.com/:path*',
        permanent: true,
      },
    ];
  },
  // Sponsorship: /sponsorship and /p/... are the sponsor pages of BISA Partners
  // (the club's sponsorship system), shown here under www.bilusoccer.com.
  // The pages load their own scripts and images from SPONSOR_APP.
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/sponsorship', destination: `${SPONSOR_APP}/p` },
        { source: '/sponsorship/:path*', destination: `${SPONSOR_APP}/p/:path*` },
        { source: '/p', destination: `${SPONSOR_APP}/p` },
        { source: '/p/:path*', destination: `${SPONSOR_APP}/p/:path*` },
        { source: '/api/pitch/:path*', destination: `${SPONSOR_APP}/api/pitch/:path*` },
      ],
      afterFiles: [],
      // Files the sponsor pages use; only when the site has no file of its own there.
      fallback: [
        { source: '/bisa-crest.png', destination: `${SPONSOR_APP}/bisa-crest.png` },
        ...['kit', 'leagues', 'partners', 'show', 'projeto-bilu', 'champions', 'email'].map((d) => ({
          source: `/${d}/:path*`,
          destination: `${SPONSOR_APP}/${d}/:path*`,
        })),
      ],
    };
  },
  output: 'standalone',
  transpilePackages: ['motion'],
  webpack: (config, {dev}) => {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
