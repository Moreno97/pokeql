/* @flow */

import React from "react";
import { Text, StyleSheet, ActivityIndicator, ScrollView } from "react-native";
import { graphql } from "react-apollo";

/** Query **/
import getFirstPokemon from "../Query/HomeQuery";

const PokeComponent = graphql(getFirstPokemon(20))(props => {
  const { error, pokemons } = props.data;
  if (error) {
    return <Text style={styles.text}>{error}</Text>;
  }
  if (pokemons) {
    return pokemons.map(pok => (
      <Text key={pok.id} style={styles.text}>
        {`#${pok.number} ${pok.name}`}
      </Text>
    ));
  }
  return <ActivityIndicator color="#FFFFFF" size="large" />;
});

type Props = {};
class Pokedex extends React.PureComponent<Props> {
  render() {
    return (
      <ScrollView>
        <PokeComponent />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000"
  },
  text: {
    color: "white",
    fontSize: 18,
    fontFamily: "Avenir Next"
  }
});

export default Pokedex;
