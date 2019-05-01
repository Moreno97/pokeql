/* @flow */

import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { Headline, Text } from "react-native-paper";
import ParallaxScroll from "@monterosa/react-native-parallax-scroll";

/* UI Components */
import Header from "../../Navigation/Header";

type Props = {
  navigation: Object,
};

class Details extends React.PureComponent<Props> {
  static navigationOptions = ({ navigation }: Object) => ({
    title: navigation.state.params.item.name,
  });

  render() {
    const { item } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <ParallaxScroll
          renderHeader={({ animatedValue }) => (
            <Header
              animatedValue={animatedValue}
              imageURI={item.image}
              height={250}
            />
          )}
          useNativeDriver
          headerHeight={250}
          isHeaderFixed={false}
          parallaxHeight={250}
          parallaxBackgroundScrollSpeed={5}
          parallaxForegroundScrollSpeed={2.5}>
          <Headline style={styles.text}>Category</Headline>
          <Text style={styles.content}>{item.classification}</Text>
          <Headline style={styles.text}>Weight</Headline>
          <Text style={styles.content}>
            {`${item.weight.minimum} - ${item.weight.maximum}`}
          </Text>
          <Headline style={styles.text}>Height</Headline>
          <Text style={styles.content}>
            {`${item.height.minimum} - ${item.height.maximum}`}
          </Text>
          <Headline style={styles.text}>Attacks</Headline>
          {item.attacks.special.map((attack: Object) => (
            <View key={attack.name} style={styles.attacks}>
              <Text style={styles.content}>{attack.name}</Text>
              <Text style={styles.content}>{attack.type}</Text>
              <Text style={styles.content}>{attack.damage}</Text>
            </View>
          ))}
        </ParallaxScroll>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  text: {
    color: "#FFFFFF",
    fontFamily: "Orbitron-Bold",
    fontSize: 18,
    paddingLeft: 10,
  },
  content: {
    color: "#FFFFFF",
    fontFamily: "Orbitron-Regular",
    fontSize: 16,
    paddingLeft: 10,
  },
  attacks: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default Details;
