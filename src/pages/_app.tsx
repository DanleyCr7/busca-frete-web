import 'tailwindcss/tailwind.css'

import { AuthProvider } from '../contexts/AuthContext'
import SnackContext from '../contexts/snackContext'
import SuccessContext from '../contexts/successContext'
import MessageContext from '../contexts/messageContext'
import React from 'react'
import CustomizedSnackbars from '../components/alert'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const [open, setOpen] =  React.useState<boolean>(false);
  const [message, setMessage] =  React.useState<String>('');
  const [success, setSuccess] =  React.useState<boolean>(false);
  
  const openDialog = (resp = true, msg = "Sucesso") => {      
      setOpen(true);
      setSuccess(resp ?? false);
      setMessage(msg ?? "");
  }

  return (
    <>
    <Head>
      <title>Busca frete</title>
      <link rel="icon" href="/somente_logo_branca.svg" />
    </Head>
      <SnackContext.Provider value={{open, setOpen}}>
        <SuccessContext.Provider value={{success, openDialog}}>
          <MessageContext.Provider value={{message, setMessage}}>
            <AuthProvider>
              <CustomizedSnackbars/>
              <Component {...pageProps} />
            </AuthProvider>
          </MessageContext.Provider>
        </SuccessContext.Provider>
      </SnackContext.Provider>

  </>
  )
}

export default MyApp


