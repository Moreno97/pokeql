/* @flow */

import React from "react";
import { StatusBar, Animated, StyleSheet } from "react-native";

type Props = {
  imageURI: string,
  animatedValue: Animated.Value,
};

const Header = (props: Props) => {
  const opacity = props.animatedValue.interpolate({
    inputRange: [0, 800],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const scale = props.animatedValue.interpolate({
    inputRange: [0, 800],
    outputRange: [1, 2],
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const translateY = props.animatedValue.interpolate({
    inputRange: [0, 400],
    outputRange: [0, -400],
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Animated.View
        style={[
          {
            opacity,
          },
        ]}>
        <Animated.Image
          style={[
            styles.image,
            {
              transform: [
                {
                  scale,
                },
                {
                  translateY,
                },
              ],
            },
          ]}
          source={{
            uri: props.imageURI,
          }}
        />
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
});

export default Header;
