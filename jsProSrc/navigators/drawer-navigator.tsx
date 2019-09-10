import { createAppContainer } from "react-navigation";
import {createDrawerNavigator} from "react-navigation-drawer"
import BottomTabNavigator from "./bottom-tab-navigator";
import { SettingsNavigator } from "./screen-stack-navigators";

const DrawerNavigator = createDrawerNavigator({
  Home: BottomTabNavigator,
  Settings: SettingsNavigator
}, {
  defaultNavigationOptions: ({navigation}) => ({
    // TODO 修改
  })
});

const Drawer = createAppContainer(DrawerNavigator);

export default Drawer;
