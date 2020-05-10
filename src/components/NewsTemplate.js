import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const NewsTemplate = ({ data }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: data.urlToImage }} />
      <Text style={styles.title}>{data.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 250,
    marginRight: 20,
    marginVertical: 15,
  },
  image: {
    height: 150,
    width: 250,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    marginLeft: 3,
    fontWeight: "700",
    fontSize: 15,
  },
});

export default NewsTemplate;
