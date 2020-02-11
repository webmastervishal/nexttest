import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';

import resolvers from './resolvers';

const cache = new InMemoryCache();

//Initial local state
const initialData = {
  data: {
    sidebar: "1"
  }
};

cache.writeData(initialData);

const client = new ApolloClient({
  link: createHttpLink({ uri: 'localhost:4000/graphql', fetch }),
  cache,
  resolvers
});

export default client;
