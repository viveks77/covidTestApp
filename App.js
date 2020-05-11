import "react-native-gesture-handler";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "./src/screens/homeScreen";
import CountrySummary from "./src/components/CountrySummary";
import StateOverview from "./src/components/StateOverview";
import WorldListRender from "./src/components/WorldListRender";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Country: CountrySummary,
    State: StateOverview,
    World: WorldListRender,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Home",
    },
  }
);

export default createAppContainer(navigator);
