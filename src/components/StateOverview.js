import React from "react";
import StateTemplate from "./StateTemplate";

class StateOverview extends React.Component {
  data = this.props.navigation.getParam("data");
  static navigation = {
    title: "Overview",
  };
  render() {
    return <StateTemplate stateData={this.data} />;
  }
}

export default StateOverview;
