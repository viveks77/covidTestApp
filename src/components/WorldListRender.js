import React from "react";
import { Text, FlatList, View, StyleSheet } from "react-native";
import WorldTemplate from "./WorldTemplate";
import Test from './Test';

const WorldListRender = ({ navigation }) => {
  //Shows state info
  const table = navigation.getParam("data");

  const data = table.slice(1);

  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.Country}
        data={data}
        renderItem={({ item }) => {
          return (
              <WorldTemplate data={item} />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default WorldListRender;
