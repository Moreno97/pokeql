/* @flow */

import React from "react";
import { ScrollView, StyleSheet } from "react-native";

class Details extends React.PureComponent<Props> {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.item.name
  });

  render() {
    return <ScrollView style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000"
  }
});

export default Details;
