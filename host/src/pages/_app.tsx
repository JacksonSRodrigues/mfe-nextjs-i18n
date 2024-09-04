import type { AppProps } from "next/app";
import "mfe2/i18n";
import { withTranslation } from "mfe2/withTranslation";
import { useEffect } from "react";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log("withTranslation", withTranslation);
  }, []);
  return <Component {...pageProps} />;
}

export default withTranslation(App);
