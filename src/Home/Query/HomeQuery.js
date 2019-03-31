/* @flow */

import gql from "graphql-tag";

const getFirstPokemon = (first: number) => gql`
  query {
    pokemons(first: ${first}) {
      id
      number
      name
      image
      types
      resistant
      classification
      weaknesses
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

export default getFirstPokemon;
