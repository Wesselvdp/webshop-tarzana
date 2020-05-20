import React, { FC } from 'react'

import Footer from "./Footer";
import Head from "./Head";

type T = any;

const Layout: FC<T> = ({children}) => {
  return (
    <div>
      <Head />
      {children}
      <Footer />
    </div>
  )
}

export default Layout