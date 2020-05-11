import React from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import StateView from "./StateView";
import getDistrictData from "../hooks/StateDistrictSummary";
import numbro from "numbro";

const convertIntoDigits = (num) => {
  return numbro(num).format({
    thousandSeparated: true,
  });
};

const StateTemplate = ({ navigation }) => {
  const data = navigation.getParam("data");
  const distData = getDistrictData();

  if (!distData) {
    return null;
  }

  if (!distData.state_wise[data.state].district) {
    return (
      <>
        <StateView renderData={data} />
      </>
    );
  } else {
    const distNames = Object.keys(distData.state_wise[data.state].district);
    const distContent = distData.state_wise[data.state].district;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StateView renderData={data} />
        <FlatList
          keyExtractor={(dist) => dist}
          data={distNames}
          renderItem={({ item }) => {
            return (
              <View style={styles.container}>
                <Text style={styles.cityName}>{item}</Text>
                <Text style={styles.active}>
                  {convertIntoDigits(distContent[item].confirmed)}
                </Text>
              </View>
            );
          }}
        />
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 15,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
  },
  cityName: {
    flex: 1,
    fontSize: 15,
    fontWeight: "700",
  },
  active: {
    fontSize: 15,
    fontWeight: "700",
    color: "red",
  },
});

export default StateTemplate;
