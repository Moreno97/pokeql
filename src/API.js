/* @flow */

import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";

// Create a new ApolloClient instance
const CLIENT = new ApolloClient({
  link: new HttpLink({
    uri: "https://graphql-pokemon.now.sh",
    headers: {
      // All headers would go here
    },
  }),
  cache: new InMemoryCache(),
});

export default CLIENT;
