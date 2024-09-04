import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "../i18n";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(App);
