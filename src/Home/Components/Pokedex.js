/* @flow */

import React from "react";
import { Text, StyleSheet, ActivityIndicator, FlatList } from "react-native";
import { graphql, Query } from "react-apollo";

/** Query **/
import getFirstPokemonQuery from "../Query/HomeQuery";

/* Locals */
import ListItem from "./ListItem";

type Props = {};
class Pokedex extends React.PureComponent<Props> {
  render() {
    return (
      <Query query={getFirstPokemonQuery(6)}>
        {({ loading, error, data, fetchMore }) => {
          if (error) {
            return <Text style={styles.text}>{error}</Text>;
          }
          if (loading) {
            return <ActivityIndicator color="#FFFFFF" size="large" />;
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
                    // TODO: Navigate to screen
                  }}
                />
              )}
              keyExtractor={(item, index) => index.toString()}
              onEndReachedThreshold={1}
              onEndReached={() => {
                // TODO: Fetch more items
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
    flex: 1,
    backgroundColor: "#000000"
  }
});

export default Pokedex;
