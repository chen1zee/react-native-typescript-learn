import { createAppContainer } from "react-navigation";
import {createDrawerNavigator} from "react-navigation-drawer"
import BottomTabNavigator from "./bottom-tab-navigator";
import { SettingsNavigator } from "./screen-stack-navigators";
import {SCREEN_2_TITLE, SCREEN_NAMES} from "js_pro_src/screens/screenNames";
import DatepickerScreen from "js_pro_src/screens/exampleScreen/DatepickerScreen";

const DrawerNavigator = createDrawerNavigator({
  [SCREEN_NAMES.Home]: BottomTabNavigator,
  [SCREEN_NAMES.Settings]: SettingsNavigator,
  [SCREEN_NAMES.Datepicker]: DatepickerScreen,
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
