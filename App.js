/* @flow */

import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { ApolloProvider } from "react-apollo";

/** API **/
import CLIENT from "./src/API";

/** UI Components **/
import Pokedex from "./src/Home/Components/Pokedex";
import Details from "./src/Home/Components/Details";

type Props = {};
class Home extends React.PureComponent<Props> {
  _onPressDetail = (item: Object) => {
    this.props.navigation.navigate("Detail", { item: item });
  };

  render() {
    return (
      <ApolloProvider client={CLIENT}>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <Pokedex onPressDetail={this._onPressDetail} />
        </View>
      </ApolloProvider>
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
    fontSize: 16
  }
});

export default createAppContainer(
  createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        title: "PokédexQL"
      }
    },
    Detail: {
      screen: Details,
    }
  }, {
    defaultNavigationOptions: {
      title: "PokédexQL",
      headerStyle: {
        backgroundColor: "#F4511E"
      },
      headerTintColor: "#FFFFFF",
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerBackTitle: null
    }
  })
);
