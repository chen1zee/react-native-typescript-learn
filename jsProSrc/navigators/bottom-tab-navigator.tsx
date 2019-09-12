import React from "react";
// @ts-ignore
import Ionicons from "react-native-vector-icons/Ionicons";
import {createBottomTabNavigator} from "react-navigation-tabs"
import { HomeNavigator, ProfileNavigator, SearchNavigator } from "./screen-stack-navigators";
import {SCREEN_2_TITLE, SCREEN_NAMES} from "js_pro_src/screens/screenNames";

// @ts-ignore
const getTabBarIcon = (navigation, focused: any, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === SCREEN_NAMES.Home) {
    iconName = "ios-home";
  } else if (routeName === SCREEN_NAMES.Profile) {
    iconName = "ios-contact";
  } else if (routeName === SCREEN_NAMES.Search) {
    iconName = "ios-search";
  }
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const BottomTabNavigator = createBottomTabNavigator(
  {
    [SCREEN_NAMES.Home]: HomeNavigator,
    [SCREEN_NAMES.Profile]: ProfileNavigator,
    [SCREEN_NAMES.Search]: SearchNavigator
  },
  {
    // @ts-ignore 默认配置
    defaultNavigationOptions: ({ navigation }) => {
      const routeName: keyof typeof SCREEN_2_TITLE = navigation.state.routeName
      return {
        tabBarIcon: ({ focused, tintColor } : {focused: boolean, tintColor: string}) =>
          getTabBarIcon(navigation, focused, tintColor),
        title: SCREEN_2_TITLE[routeName],
      }
    },
    tabBarOptions: {
      activeTintColor: "black",
      inactiveTintColor: "gray"
    }
  }
);

export default BottomTabNavigator
