import {createStackNavigator} from "react-navigation-stack"
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";
import {ROUTE_NAMES} from "js_pro_src/navigators/routeNames";

//Add navigators with screens in this file
export const HomeNavigator = createStackNavigator({
  [ROUTE_NAMES.Home]: { screen: HomeScreen }
});

export const SettingsNavigator = createStackNavigator({
  [ROUTE_NAMES.Settings]: { screen: SettingsScreen }
});

export const ProfileNavigator = createStackNavigator({
  [ROUTE_NAMES.Profile]: { screen: ProfileScreen }
});

export const SearchNavigator = createStackNavigator({
  [ROUTE_NAMES.Search]: { screen: SearchScreen }
});
