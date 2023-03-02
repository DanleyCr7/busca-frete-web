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
    <body>
      {/* <Main />
      <NextScript /> */}
    </body>
  </Html>
  );
}

export default MyMap;