import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';

import resolvers from './resolvers';

const cache = new InMemoryCache();
const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://localhost:3000', fetch }),
  cache,
  resolvers
});

//Initial local state
const initialData = {
  data: {
    menuitem: "1"
  }
};
cache.writeData(initialData);

//persist cache
if (typeof window !== 'undefined') {
  persistCache({
    cache,
    storage: window.localStorage
  });
}

export default client;
