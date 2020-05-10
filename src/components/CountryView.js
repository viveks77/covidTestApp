import React from "react";
import { withNavigation } from "react-navigation";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  Button,
} from "react-native";
import getCountrytData from "../hooks/getCountrySummary";
import CountryTemplate from "./CountryTemplate";

const CountryView = (props) => {
  //homepage india template
  const CountryData = getCountrytData();

  if (!CountryData) {
    return null;
  }

  return (
    <TouchableHighlight
      onPress={() => {
        props.navigation.navigate("Country", {
          data: CountryData.data[0].table,
        });
      }}
      activeOpacity={0.0}
      underlayColor="transparent"
    >
      <CountryTemplate data={CountryData.data[0].table[0]} />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({});

export default withNavigation(CountryView);
