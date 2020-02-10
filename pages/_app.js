import ApolloClient from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';


const cache = new InMemoryCache();

//Initial local state
cache.writeData({
  data: {
    sidebar: "1"
  }
});

const client = new ApolloClient({
  link: createHttpLink({ uri: 'localhost:4000/graphql', fetch }),
  cache,
  resolvers: {}
});

function MyApp({ Component, pageProps }) {
  return <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
}

export default MyApp;
