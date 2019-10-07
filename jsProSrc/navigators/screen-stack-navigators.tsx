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
import GestureExampleScreen from "js_pro_src/screens/exampleScreen/GestureExampleScreen";
import MapSwiperScreen from "js_pro_src/screens/exampleScreen/MapSwiperScreen";
import TwitterUsrScreen from "js_pro_src/screens/exampleScreen/TwitterUsrScreen";
import TumblrMenuScreen from "js_pro_src/screens/exampleScreen/TumblrMenuScreen";

/**
 * 制造 exampleNavigation 修饰器
 * @param {string} routeName 路由标志, 用于导航 如 "Settings"
 * @param {string} routeTitle 路由名称 用于显示 如 "设置"
 * @param {boolean} showHeader 显示header flag
 * */
const makeExampleNavigation = (routeName, routeTitle, showHeader=true): NavigationStackScreenOptions => ({navigation}) => {
  const tmp: any = {
    // @ts-ignore
    headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} layoutPreset="left" scene={null} />,
    headerTitle: <Logo />,
    headerBackTitle: routeTitle,
  }
  if (!showHeader) tmp.header = null
  return tmp
}

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
    navigationOptions: makeExampleNavigation(SCREEN_NAMES.TwitterAni, SCREEN_2_TITLE.TwitterAni, false)
  }
})

export const GestureExampleNavigator = createStackNavigator({
  [SCREEN_NAMES.GestureExample]: {
    screen: GestureExampleScreen,
    navigationOptions: makeExampleNavigation(SCREEN_NAMES.GestureExample, SCREEN_2_TITLE.GestureExample)
  }
})

export const MapSwiperNavigator = createStackNavigator({
  [SCREEN_NAMES.MapSwiper]: {
    screen: MapSwiperScreen,
    navigationOptions: makeExampleNavigation(SCREEN_NAMES.MapSwiper, SCREEN_2_TITLE.MapSwiper)
  }
})

export const TwitterUsrNavigator = createStackNavigator({
  [SCREEN_NAMES.TwitterUsr]: {
    screen: TwitterUsrScreen,
    navigationOptions: makeExampleNavigation(SCREEN_NAMES.TwitterUsr, SCREEN_2_TITLE.TwitterUsr)
  }
})

export const TumblrMenuNavigator = createStackNavigator({
  [SCREEN_NAMES.TumblrMenu]: {
    screen: TumblrMenuScreen,
    navigationOptions: makeExampleNavigation(SCREEN_NAMES.TumblrMenu, SCREEN_2_TITLE.TumblrMenu)
  }
})
