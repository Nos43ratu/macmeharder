import "../assets/styles/index.css";
import { ApolloProvider } from "@apollo/client";
import React from "react";
import apolloClient from "../apollo";
import Layout from "../layout";
interface Props {
  Component: any;
  pageProps: any;
}

function MyApp({ Component, pageProps }: Props) {
  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
