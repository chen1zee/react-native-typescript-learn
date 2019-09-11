import { createAppContainer } from "react-navigation";
import {createDrawerNavigator} from "react-navigation-drawer"
import BottomTabNavigator from "./bottom-tab-navigator";
import { SettingsNavigator } from "./screen-stack-navigators";
import {ROUTE_2_TITLE, ROUTE_NAMES} from "js_pro_src/navigators/routeNames";

const DrawerNavigator = createDrawerNavigator({
  [ROUTE_NAMES.Home]: BottomTabNavigator,
  [ROUTE_NAMES.Settings]: SettingsNavigator
}, {
  // @ts-ignore
  defaultNavigationOptions: ({navigation}) => {
    const routeName: keyof typeof ROUTE_2_TITLE = navigation.state.routeName
    return {
      title: ROUTE_2_TITLE[routeName]
    }
  }
});

const Drawer = createAppContainer(DrawerNavigator);

export default Drawer;
