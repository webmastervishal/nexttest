import { ApolloProvider } from "@apollo/react-hooks";
import client from "./../apollo/client";
import { GlobalStyle } from "./../components/Common/Layout/style";

function MyApp({ Component, pageProps }) {

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ApolloProvider>
  );
}

export default MyApp;
