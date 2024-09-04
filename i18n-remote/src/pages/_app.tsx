import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../i18n";
import { withTranslation } from "../i18n/withTranslation";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default withTranslation(App);