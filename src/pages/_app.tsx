import '../assets/styles/index.css'
import React from "react";
interface Props {
  Component:any,
  pageProps:any
}

function MyApp({ Component, pageProps }:Props) {
  return <Component {...pageProps} />
}

export default MyApp
