import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import numbro from 'numbro';

const convertIntoDigits = (num) => {
    return numbro(num).format({
      thousandSeparated: true,
    });
  };

const WorldSummaryTemplate = ({worldData}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Global Overview</Text>
      </View>
      <View>
        <View style={styles.contentWrap}>
          <Text style={styles.cases}>Total Cases</Text>
    <Text style={styles.casesActive}>{convertIntoDigits(worldData.total)}</Text>
        </View>
        <View style={styles.contentWrap}>
          <Text style={styles.cases}>Recovered</Text>
     <Text style={styles.casesRecovered}>{convertIntoDigits(worldData.recovered)}</Text>
        </View>
        <View style={styles.contentWrap}>
          <Text style={styles.cases}>Deaths</Text>
     <Text style={styles.casesDeaths}>{convertIntoDigits(worldData.deaths)}</Text>
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
    padding: 15,
  },
  header : {
      marginVertical : 10
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
  },
  contentWrap: {
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
  },
  casesActive: {
    flex: 1,
    fontSize: 15,
    color: "red",
  },
  casesDeaths: {
    flex: 1,
    fontSize: 15,
    color: "grey",
  },
  casesRecovered: {
    flex: 1,
    fontSize: 15,
    color: "green",
  },
  cases: {
    flex: 1,
    fontSize: 15,
    fontWeight: "700",
  },
});

export default WorldSummaryTemplate;
