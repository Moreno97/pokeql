/* @flow */

import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { Headline, Card, Chip, IconButton } from "react-native-paper";

type Props = {
  id: string,
  number: string,
  name: string,
  image: string,
  types: Array<string>,
  onPress: Function,
};

const ListItem = (props: Props) => (
  <Card style={styles.card} onPress={props.onPress}>
    <ImageBackground
      resizeMode="contain"
      source={{
        uri: props.image,
      }}
      style={styles.image}>
      <View style={styles.container}>
        <Headline style={styles.name}>{`#${props.number} ${
          props.name
        }`}</Headline>
        <View style={styles.row}>
          {props.types.map((type: string) => (
            <Chip key={type} style={styles.chip} mode="outlined" disabled>
              {type}
            </Chip>
          ))}
        </View>
        <IconButton
          icon="star-border"
          color="#FFFFFF"
          onPress={() => {}}
          style={styles.icon}
        />
      </View>
    </ImageBackground>
  </Card>
);

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    height: 160,
  },
  row: {
    flexDirection: "row",
  },
  chip: {
    marginRight: 5,
    marginBottom: 5,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  name: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.54)",
    paddingLeft: 16,
  },
  icon: {
    position: "absolute",
    right: 5,
    top: 15,
  },
});

export default ListItem;
