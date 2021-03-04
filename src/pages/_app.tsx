import { AppContext, AppInitialProps } from "next/app";
import Head from "next/head";
import React, { ReactElement } from "react";

import "public/css/global.css";

function App({
  Component,
  pageProps,
}: AppContext & AppInitialProps): ReactElement {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="images/png" href="/images/logo_symbol.png" />
        <link rel="stylesheet" href="/css/bootstrap.min.css"></link>
        <link rel="stylesheet" href="/css/dashforge.min.css"></link>
        <link rel="stylesheet" href="/css/dashforge.dashboard.min.css"></link>
        <link rel="stylesheet" href="/css/dashforge.skin.min.css"></link>
        <script
          type="application/javascript"
          src="/js/perfect-scrollbar.min.js"
        />
        <script type="application/javascript" src="/js/jquery.min.js" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Blockfrost.io - Your gateway to the Cardano ecosystem</title>
        <meta
          name="title"
          content="Blockfrost.io - Your gateway to the Cardano ecosystem"
        />
        <meta
          name="description"
          content="We provide an instant and scalable API to the Cardano blockchain for free."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blockfrost.io/" />
        <meta
          property="og:title"
          content="Blockfrost.io - Your gateway to the Cardano ecosystem"
        />
        <meta
          property="og:description"
          content="We provide an instant and scalable API to the Cardano blockchain for free."
        />
        <meta
          property="og:image"
          content="https://blockfrost.io/images/logo_full.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://blockfrost.io/" />
        <meta
          property="twitter:title"
          content="Blockfrost.io - Your gateway to the Cardano ecosystem"
        />
        <meta
          property="twitter:description"
          content="We provide an instant and scalable API to the Cardano blockchain for free."
        />
        <meta
          property="twitter:image"
          content="https://blockfrost.io/images/logo_full.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
