import React from "react";
import { withNavigation } from "react-navigation";
import {
  Text,
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Template from "./Template";

class CountrySummary extends React.Component {
  //Shows state info

  static navigationOptions = {
    title: "State Overview",
    /* No more header config here! */
  };

  table = this.props.navigation.getParam("data");
  data = this.table.slice(1);

  render() {
    return (
      <View>
        <FlatList
          keyExtractor={(item) => item.state}
          data={this.data}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("State", { data: item });
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
  }
}

const styles = StyleSheet.create({});

export default withNavigation(CountrySummary);
