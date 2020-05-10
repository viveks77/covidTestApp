import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import numbro from "numbro";

const convertIntoDigits = (num) => {
  return numbro(num).format({
    average: true,
    mantissa: 1,
  });
};

const Template = (props) => {
  let deaths;
  let recovered;
  let confirmed;

  if (props.data.confirmed < 1000) {
    confirmed = props.data.confirmed;
  } else {
    confirmed = convertIntoDigits(props.data.confirmed);
  }

  if (props.data.deaths < 1000) {
    deaths = props.data.deaths;
  } else {
    deaths = convertIntoDigits(props.data.deaths);
  }

  if (props.data.recovered < 1000) {
    recovered = props.data.recovered;
  } else {
    recovered = convertIntoDigits(props.data.recovered);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.countryName}>{props.data.state}</Text>
      </View>
      <View style={styles.wrapper}>
        <View style={{ marginRight: 30, flex: 1 }}>
          <Text style={styles.contentTitle}>Confirmed</Text>
          <Text style={styles.content}>{confirmed}</Text>
        </View>
        <View style={{ marginRight: 25, flex: 1 }}>
          <Text style={styles.contentTitle}>Recovered</Text>
          <Text style={styles.content}>{recovered}</Text>
        </View>
        <View style={{ marginRight: 25, flex: 1 }}>
          <Text style={styles.contentTitle}>Deaths</Text>
          <Text style={styles.content}>{deaths}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 15,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
  },
  header: {
    flexDirection: "row",
    marginVertical: 5,
  },
  wrapper: {
    flexDirection: "row",
    paddingHorizontal: 5,
    paddingBottom: 10,
  },
  countryName: {
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  contentTitle: {
    fontSize: 10,
  },
  content: {
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default Template;
