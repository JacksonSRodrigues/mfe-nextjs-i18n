import { NextFederationPlugin } from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "mfe2",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./Button": "./src/components/Button.tsx",
          "./i18n": "./src/i18n/index.ts",
          "./withTranslation": "./src/i18n/withTranslation.tsx",
          "./LanguageSelect": "./src/i18n/LanguageSelect.tsx",
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
