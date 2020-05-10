import React from "react";
import { withNavigation } from "react-navigation";
import { Text, FlatList, View, StyleSheet } from "react-native";
import Template from "./Template";
import { TouchableHighlight } from "react-native-gesture-handler";

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
            <TouchableHighlight
              onPress={() => {
                navigation.navigate("State", { data: item });
              }}
              activeOpacity={0.0}
              underlayColor="transparent"
            >
              <Template data={item} />
            </TouchableHighlight>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default withNavigation(CountrySummary);
