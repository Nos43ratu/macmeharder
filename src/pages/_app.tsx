import "../assets/styles/index.css";
import { ApolloProvider } from "@apollo/client";
import React from "react";
import { useApollo } from "../apollo";
import Layout from "../Layout";
interface Props {
  Component: any;
  pageProps: any;
}

function MyApp({ Component, pageProps }: Props) {
  const client = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
