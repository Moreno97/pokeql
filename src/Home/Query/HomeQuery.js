/* @flow */

import gql from "graphql-tag";

const POKEMON_QUERY = gql`
  query Pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      image
      classification
      types
      weaknesses
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      attacks {
        special {
          name
          type
          damage
        }
      }
      evolutions {
        id
        number
        name
        weight {
          minimum
          maximum
        }
        attacks {
          fast {
            name
            type
            damage
          }
        }
      }
    }
  }
`;

export default POKEMON_QUERY;
