import * as React from 'react';
import 'tailwindcss/tailwind.css'
import CustomizedSnackbars from '../components/alert'
import Head from "next/head";

import Context from '../plugins/context';
function MyApp({ Component, pageProps }) {
  const [open, setOpen] =  React.useState(false);
  return (
    <>
      <Head>
        <title>Busca frete</title>
        <link rel="icon" href="/logo.png" />
        {/* <script
            src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBjuqBcsXPhQEui5qk-5VQzIkNWj8P0wsI&callback=initMap&libraries=&v=weekly`}
            async
          ></script> */}
      </Head>
      <Context.Provider value={[open, setOpen]}>
      <CustomizedSnackbars/>
      <Component {...pageProps} />
      </Context.Provider>
    </>
  )
}

export default MyApp
