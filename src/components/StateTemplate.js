import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import StateView from "./StateView";
import getDistrictData from "../hooks/StateDistrictSummary";
import axios from "axios";

const StateTemplate = ({ navigation }) => {
  const data = navigation.getParam("data");
  const distData = getDistrictData();

  if (!distData) {
    return null;
  }

  return (
    <View>
      <StateView renderData={data} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default StateTemplate;
