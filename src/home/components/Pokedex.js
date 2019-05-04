/* @flow */

import React from "react";
import { Text, StyleSheet, RefreshControl, FlatList } from "react-native";
import { Query } from "react-apollo";

/* Query */
import POKEMON_QUERY from "../query";

/* Locals */
import ListItem from "./ListItem";

type Props = {
  onPressDetail: Function,
};

class Pokedex extends React.PureComponent<Props> {
  render() {
    return (
      <Query
        query={POKEMON_QUERY}
        variables={{
          first: 5,
        }}>
        {({ loading, error, data, fetchMore }) => {
          if (error) {
            return <Text>{error}</Text>;
          }
          return (
            <FlatList
              data={data.pokemons}
              renderItem={({ item }) => (
                <ListItem
                  id={item.id}
                  number={item.number}
                  name={item.name}
                  image={item.image}
                  types={item.types}
                  onPress={() => {
                    this.props.onPressDetail(item);
                  }}
                />
              )}
              refreshControl={
                <RefreshControl
                  refreshing={loading}
                  title="Updating..."
                  titleColor="#FFFFFF"
                  tintColor="#FFFFFF"
                  onRefresh={() => {
                    fetchMore({
                      variables: {
                        first: data.pokemons.length,
                      },
                      updateQuery: (previousResult, { fetchMoreResult }) => {
                        const newResults = fetchMoreResult.pokemons;
                        return {
                          pokemons: [...newResults],
                        };
                      },
                    });
                  }}
                />
              }
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={styles.container}
              onEndReachedThreshold={1}
              onEndReached={() => {
                fetchMore({
                  variables: {
                    first: data.pokemons.length + 5, // Fetch 5 more items to the initial data
                  },
                  updateQuery: (previousResult, { fetchMoreResult }) => {
                    const newResults = fetchMoreResult.pokemons;
                    return {
                      pokemons: [...newResults],
                    };
                  },
                });
              }}
            />
          );
        }}
      </Query>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default Pokedex;
