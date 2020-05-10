import React from "react";
import { withNavigation } from "react-navigation";
import { Text, FlatList, View, StyleSheet, TouchableOpacity } from "react-native";
import Template from "./Template";

const CountrySummary = ({ navigation }) => {
  //Shows state info
  const table = navigation.getParam("data");
  const data = table.slice(1);

  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.state}
        data={data}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("State", { data: item });
              }}
              activeOpacity={1}
            >
              <Template data={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default withNavigation(CountrySummary);
