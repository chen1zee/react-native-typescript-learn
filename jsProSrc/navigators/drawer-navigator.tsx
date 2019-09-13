import { createAppContainer } from "react-navigation";
import {createDrawerNavigator} from "react-navigation-drawer"
import BottomTabNavigator from "./bottom-tab-navigator";
import {DatepickerNavigator, SettingsNavigator, WatchStopNavigator} from "./screen-stack-navigators";
import {SCREEN_2_TITLE, SCREEN_NAMES} from "js_pro_src/screens/screenNames";

const DrawerNavigator = createDrawerNavigator({
  [SCREEN_NAMES.Home]: BottomTabNavigator,
  [SCREEN_NAMES.Settings]: SettingsNavigator,
  [SCREEN_NAMES.Datepicker]: DatepickerNavigator,
  [SCREEN_NAMES.WatchStop]: WatchStopNavigator,
}, {
  // @ts-ignore
  defaultNavigationOptions: ({navigation}) => {
    const routeName: keyof typeof SCREEN_2_TITLE = navigation.state.routeName
    return {
      title: SCREEN_2_TITLE[routeName]
    }
  }
});

const Drawer = createAppContainer(DrawerNavigator);

export default Drawer;
