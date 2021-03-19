import "../assets/styles/index.css";
import React from "react";
import Layout from "../layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
