import { ApolloProvider } from "@apollo/react-hooks";
import client from "./../apollo/client";
import { GlobalStyle } from "./../components/Common/Layout/style";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <link rel="shortcut icon" href="/images/logo.png" />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </ApolloProvider>
  );
}

export default MyApp;
