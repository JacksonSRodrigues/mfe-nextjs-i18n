import { NextFederationPlugin } from "@module-federation/nextjs-mf";
import i18nConfig from "./next-i18next.config.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: i18nConfig.i18n,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "mfe3",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./Button": "./src/components/Button.tsx",
          "./i18n": "./src/i18n/index.ts",
        },
        shared: {},
        extraOptions: {
          exposePages: true,
          enableImageLoaderFix: true,
          enableUrlLoaderFix: true,
        },
      })
    );
    return config;
  },
};

export default nextConfig;
