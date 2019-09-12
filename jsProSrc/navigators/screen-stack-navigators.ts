import {createStackNavigator} from "react-navigation-stack"
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";
import {SCREEN_NAMES} from "js_pro_src/screens/screenNames";

//Add navigators with screens in this file
export const HomeNavigator = createStackNavigator({
  [SCREEN_NAMES.Home]: { screen: HomeScreen }
});

export const SettingsNavigator = createStackNavigator({
  [SCREEN_NAMES.Settings]: { screen: SettingsScreen }
});

export const ProfileNavigator = createStackNavigator({
  [SCREEN_NAMES.Profile]: { screen: ProfileScreen }
});

export const SearchNavigator = createStackNavigator({
  [SCREEN_NAMES.Search]: { screen: SearchScreen }
});
