import * as React from 'react';
import 'tailwindcss/tailwind.css'
import CustomizedSnackbars from '../components/alert'

import Context from './Context';
function MyApp({ Component, pageProps }) {
  const [open, setOpen] =  React.useState(false);
  return ( 
    <Context.Provider value={[open, setOpen]}>
    <CustomizedSnackbars/>
    <Component {...pageProps} />
    </Context.Provider>
  )
}

export default MyApp
