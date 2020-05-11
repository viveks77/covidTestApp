import React from "react";
import { Text, FlatList, View, StyleSheet } from "react-native";
import WorldTemplate from "./WorldTemplate";
import Test from "./Test";

class WorldListRender extends React.Component {
  //Shows state info
  static navigationOptions = {
    title: "Countries Overview",
  };

  table = this.props.navigation.getParam("data");
  data = this.table.slice(1);

  render() {
    return (
      <View>
        <FlatList
          keyExtractor={(item) => item.Country}
          data={this.data}
          renderItem={({ item }) => {
            return <WorldTemplate data={item} />;
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default WorldListRender;
