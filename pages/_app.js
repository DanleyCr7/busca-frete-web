import * as React from 'react';
import 'tailwindcss/tailwind.css'
import CustomizedSnackbars from '../components/alert'
import Head from "next/head";
import '../styles/globals.css'
import SnackContext from '../context/snackContext';
import MessageContext from '../context/messageContext';
import SuccessContext from '../context/successContext';

function MyApp({ Component, pageProps }) {
  const [open, setOpen] =  React.useState(false);
  const [message, setMessage] =  React.useState('teste');
  const [success, setSuccess] =  React.useState(false);
  
  const openDialog = (resp = true, msg = "Sucesso") => {      
      setOpen(true);
      setSuccess(resp);
      setMessage(msg);
  }

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
      <SnackContext.Provider value={{open, setOpen}}>
        <SuccessContext.Provider value={{success, openDialog}}>
          <MessageContext.Provider value={{message, setMessage}}>
            <CustomizedSnackbars/>
            <Component {...pageProps} />
          </MessageContext.Provider>
        </SuccessContext.Provider>
      </SnackContext.Provider>
    </>
  )
}

export default MyApp
