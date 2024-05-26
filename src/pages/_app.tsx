// pages/_app.tsx
import 'bulma/css/bulma.css'
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
