import React from "react";
import {HeaderBackButton} from "react-navigation-stack";
import {Logo} from "js_pro_src/components/header/header";
/**
 * 制造 exampleScreen 工厂
 * @param {string} routeName 路由标志, 用于导航 如 "Settings"
 * @param {string} routeTitle 路由名称 用于显示 如 "设置"
 * @param {React.Component} Comp react 组件
 * */
function makeScreen(routeName, routeTitle, Comp) {
  return class extends React.Component {
    static navigationOptions = ({ navigation }) => {
      return {
        // @ts-ignore
        headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)}  layoutPreset="left" scene={null}/>,
        headerTitle: <Logo />,
        headerBackTitle: routeTitle,
        headerLayoutPreset: "center"
      }
    }
    render() {
      return <Comp />
    }
  }
}

export default makeScreen
