import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Flag from "react-native-flags-kit";
import numbro from "numbro";

const convertIntoDigits = (num) => {
  return numbro(num).format({
    thousandSeparated: true,
  });
};

const CountryTemplate = ({ data }) => {
  if (!data) {
    return null;
  }

  let active;
  let confirmed;
  let recovered;
  let deaths;

  if (data.active < 1000) {
    active = data.active;
  } else {
    active = convertIntoDigits(data.active);
  }

  if (data.confirmed < 1000) {
    confirmed = data.confirmed;
  } else {
    confirmed = convertIntoDigits(data.confirmed);
  }

  if (data.recovered < 1000) {
    recovered = data.recovered;
  } else {
    recovered = convertIntoDigits(data.recovered);
  }

  if (data.deaths < 1000) {
    deaths = data.deaths;
  } else {
    deaths = convertIntoDigits(data.deaths);
  }

  //homePage render template
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.content}>
          <Flag style={styles.flag} code="IN" size={32} />
          <Text style={styles.head}>India</Text>
        </View>
        <Text style={styles.headerTitle}>Total confirmed cases</Text>
        <Text style={styles.headerCases}>{confirmed}</Text>
      </View>
      <View>
        <View style={styles.contentWrap}>
          <Text style={styles.cases}>Active Cases</Text>
          <Text style={styles.casesActive}>{active}</Text>
        </View>
        <View style={styles.contentWrap}>
          <Text style={styles.cases}>Recovered</Text>
          <Text style={styles.casesRecovered}>{recovered}</Text>
        </View>
        <View style={styles.contentWrap}>
          <Text style={styles.cases}>Deaths</Text>
          <Text style={styles.casesDeaths}>{deaths}</Text>
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
  header: {
    marginVertical: 5,
  },
  content: {
    flexDirection: "row",
  },
  flag: {
    alignSelf: "center",
    marginRight: 15,
  },
  head: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 5,
  },
  headerTitle: {
    fontSize: 15,
    fontWeight: "700",
    marginVertical: 8,
  },
  headerCases: {
    fontSize: 40,
    fontWeight: "bold",
    color: "red",
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
    color: "orange",
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

export default CountryTemplate;
