/* @flow */

import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";

type Props = {};
class App extends React.PureComponent<Props> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000"
  }
});

export default App;
