import React from "react";
import {createStackNavigator} from "react-navigation-stack"
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";
import {SCREEN_2_TITLE, SCREEN_NAMES} from "js_pro_src/screens/screenNames";
import {NavigationStackScreenOptions} from "react-navigation-stack/lib/typescript/types";
import {HeaderBackButton} from "react-navigation-stack";
import {Logo} from "js_pro_src/components/header/header";
import DatepickerScreen from "js_pro_src/screens/exampleScreen/DatepickerScreen";
import WatchStopScreen from "js_pro_src/screens/exampleScreen/WatchStopScreen";
import WeatherReportScreen from "js_pro_src/screens/exampleScreen/WeatherReportScreen";
import TwitterAniScreen from "js_pro_src/screens/exampleScreen/TwitterAniScreen";

/**
 * 制造 exampleNavigation 修饰器
 * @param {string} routeName 路由标志, 用于导航 如 "Settings"
 * @param {string} routeTitle 路由名称 用于显示 如 "设置"
 * */
const makeExampleNavigation = (routeName, routeTitle): NavigationStackScreenOptions => ({navigation}) => ({
  // @ts-ignore
  headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} layoutPreset="left" scene={null} />,
  headerTitle: <Logo />,
  headerBackTitle: routeTitle
})

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

export const DatepickerNavigator = createStackNavigator({
  [SCREEN_NAMES.Datepicker]: {
    screen: DatepickerScreen,
    navigationOptions: makeExampleNavigation(SCREEN_NAMES.Datepicker, SCREEN_2_TITLE.Datepicker)
  }
})

export const WatchStopNavigator = createStackNavigator({
  [SCREEN_NAMES.WatchStop]: {
    screen: WatchStopScreen,
    navigationOptions: makeExampleNavigation(SCREEN_NAMES.WatchStop, SCREEN_2_TITLE.WatchStop)
  }
})

export const WeatherReportNavigator = createStackNavigator({
  [SCREEN_NAMES.WeatherReport]: {
    screen: WeatherReportScreen,
    navigationOptions: makeExampleNavigation(SCREEN_NAMES.WeatherReport, SCREEN_2_TITLE.WeatherReport)
  }
})

export const TwitterAniNavigator = createStackNavigator({
  [SCREEN_NAMES.TwitterAni]: {
    screen: TwitterAniScreen,
    navigationOptions: makeExampleNavigation(SCREEN_NAMES.TwitterAni, SCREEN_2_TITLE.TwitterAni)
  }
})
