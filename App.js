import "react-native-gesture-handler";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "./src/screens/homeScreen";
import CountrySummary from "./src/components/CountrySummary";
import StateTemplate from "./src/components/StateTemplate";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Country: CountrySummary,
    State: StateTemplate,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Home",
    },
  }
);

export default createAppContainer(navigator);
