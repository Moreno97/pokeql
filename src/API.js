/* @flow */

import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";

const API_URL = "https://graphql-pokemon.now.sh";

// Create the client in order to staet
const CLIENT = new ApolloClient({
  link: new HttpLink({
    uri: API_URL,
    headers: {
      // All headers would go here
    }
  }),
  cache: new InMemoryCache()
});

export default CLIENT;
