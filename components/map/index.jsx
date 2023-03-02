import React from 'react'
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import Head from 'next/head';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -2.90453,
  lng: -41.7523
};


function MyMap() {
  const { styles } = this.props;

  return (
    <Html lang="en">
    <Head>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="application-name" content="App" />
      <script
        src={`https://maps.googleapis.com/maps/api/js?key=${'AIzaSyCNa7ZY48E0O3acp6qr68sjf_n0cIGv1bY'}&callback=initMap&libraries=&v=weekly`}
        async
      ></script>
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
  );
}

export default MyMap;