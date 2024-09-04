import NextFederationPlugin from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const federatedConfig = {
      name: "mfe1",
      filename: "static/chunks/remoteEntry.js",
      remotes: {
        mfe2: `mfe2@http://localhost:3001/_next/static/${
          options.isServer ? "ssr" : "chunks"
        }/remoteEntry.js`,
        mfe3: `mfe3@http://localhost:3002/_next/static/${
          options.isServer ? "ssr" : "chunks"
        }/remoteEntry.js`,
      },
      shared: {},
      extraOptions: {
        exposePages: true,
        enableImageLoaderFix: true,
        enableUrlLoaderFix: true,
      },
    };

    config.plugins.push(new NextFederationPlugin(federatedConfig));
    return config;
  },
};

export default nextConfig;
