import React from "react";
import {HeaderBackButton} from "react-navigation-stack";
import {Logo} from "js_pro_src/components/header/header";

/**
 * 制造 exampleScreen 修饰器   用法  @makeExampleScreen
 * @param {string} routeName 路由标志, 用于导航 如 "Settings"
 * @param {string} routeTitle 路由名称 用于显示 如 "设置"
 * */
function makeExampleScreen(routeName, routeTitle) {
  return (target: any) => {
    target.navigationOptions = ({ navigation }) => {
      return {
        // @ts-ignore
        headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)}  layoutPreset="left" scene={null}/>,
        headerTitle: <Logo />,
        headerBackTitle: routeTitle,
        headerLayoutPreset: "center"
      }
    }
  }
}


export default makeExampleScreen
