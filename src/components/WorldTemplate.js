import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import numbro from "numbro";

const convertIntoDigits = (str) => {
    
    let num = parseInt(str.split(',').join(""));

    return numbro(num).format({
    average: true,
    mantissa: 1,
  });
};

const WorldTemplate = (props) => {
  let deaths;
  let recovered;
  let confirmed = convertIntoDigits(props.data.TotalCases);;

  
  if (props.data.TotalDeaths > 1000) {
    deaths = convertIntoDigits(props.data.TotalDeaths);
  } else {
    deaths = props.data.TotalDeaths;
  }

  if (props.data.TotalRecovered > 1000) {
    recovered = convertIntoDigits(props.data.TotalRecovered);
  } else {
    recovered = props.data.TotalRecovered;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.countryName}>{props.data.Country}</Text>
      </View>
      <View style={styles.wrapper}>
        <View style={{ paddingRight: 25, flex: 1 }}>
          <Text style={styles.contentTitle}>Confirmed</Text>
          <Text style={styles.content}>{confirmed}</Text>
        </View>
        <View style={{ paddingRight: 25, flex: 1 }}>
          <Text style={styles.contentTitle}>Recovered</Text>
          <Text style={styles.content}>{recovered}</Text>
        </View>
        <View style={{ paddingRight: 25, flex: 1 }}>
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
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default WorldTemplate;
