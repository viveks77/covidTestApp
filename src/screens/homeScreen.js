import React, { useState } from "react";
import { Text, View, StyleSheet,ScrollView, SafeAreaView } from "react-native";
import News from "./News";
import CountryView from "../components/CountryView";
import WorldSummary from '../components/WorldSummary';

const HomeScreen = () => {
  return (
    <ScrollView>
      <CountryView />
      <WorldSummary />
      <News />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
