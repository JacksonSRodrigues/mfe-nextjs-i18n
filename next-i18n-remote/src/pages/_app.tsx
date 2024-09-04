import "@/styles/globals.css";
import type { AppProps } from "next/app";
//import { appWithTranslation } from "next-i18next";
import translation from '../i18n'
const { appWithTranslation } = translation;

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(App);
