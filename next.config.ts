import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // The floating dev badge sits on top of the hero CTA and shows up in
  // preview screenshots; the terminal already reports build state.
  devIndicators: false,
  // The Lightsprint preview serves this app from https://<port>-<sandbox>.lightsprint.ai,
  // so the dev origin has to be allow-listed for HMR and server actions.
  allowedDevOrigins: ['*.lightsprint.ai'],
};

export default nextConfig;
