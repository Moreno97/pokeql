/* @flow */

import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { ApolloProvider } from "react-apollo";
import NavigationBar from "react-native-navbar-color";

/* API */
import CLIENT from "./src/API";

/* UI Components */
import Pokedex from "./src/home/components/Pokedex";
import Details from "./src/home/components/Details";

type Props = {
  navigation: Object,
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
  fonts: {
    regular: "Orbitron-Regular",
    medium: "Orbitron-Medium",
  },
};

class Home extends React.PureComponent<Props> {
  componentWillMount() {
    NavigationBar.setStatusBarTheme("dark", true);
  }

  _onPressDetail = (item: Object) => {
    this.props.navigation.navigate("Detail", { item });
  };

  render() {
    return (
      <PaperProvider theme={theme}>
        <ApolloProvider client={CLIENT}>
          <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#DB7424" />
            <Pokedex onPressDetail={this._onPressDetail} />
          </View>
        </ApolloProvider>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});

export default createAppContainer(
  createStackNavigator(
    {
      Home: {
        screen: Home,
        navigationOptions: {
          title: "PokédexQL",
        },
      },
      Detail: {
        screen: Details,
        navigationOptions: {
          header: null,
        },
      },
    },
    {
      defaultNavigationOptions: {
        title: "PokédexQL",
        headerStyle: {
          backgroundColor: "#E69138",
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
          fontWeight: "bold",
          fontFamily: "Orbitron-Bold",
          fontWeight: "normal",
        },
      },
    },
  ),
);
