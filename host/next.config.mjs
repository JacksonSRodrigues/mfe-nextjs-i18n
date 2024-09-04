import { NextFederationPlugin } from "@module-federation/nextjs-mf";
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const { isServer } = options;
    const location = isServer ? "ssr" : "chunks";
    const remotes = {
      mfe2: `mfe2@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
      mfe3: `mfe3@http://localhost:3002/_next/static/${location}/remoteEntry.js`,
    };
    const federatedConfig = {
      name: "host",
      filename: "static/chunks/remoteEntry.js",
      remotes: remotes,
      shared: {},
    };
    config.plugins.push(new NextFederationPlugin(federatedConfig));
    return config;
  },
};

export default nextConfig;
