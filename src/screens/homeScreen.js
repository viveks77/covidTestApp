import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../screens/SearchBar";
import CountryView from "../components/CountryView";
import WorldSummary from '../components/WorldSummary';

const HomeScreen = () => {
  return (
    <>
      <CountryView />
      <WorldSummary />
    </>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
