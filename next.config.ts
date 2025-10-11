import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // `ppr` was removed and merged into `cacheComponents`.
    // Enable Partial Prerendering via `cacheComponents`.
    cacheComponents: true,
  } as any,
};

export default nextConfig;
