import {View, Text, StyleSheet, DatePickerIOS, Platform} from "react-native";
import React from "react";
import { MenuButton, Logo } from "../components/header/header";
import {percW2dp, pxW2dp} from "js_pro_src/utils/sizes";
import Datepicker from "react-native-datepicker"

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "首页",
      headerLeft: <MenuButton onPress={() => navigation.openDrawer()} />,
      headerTitle: <Logo />,
      headerLayoutPreset: "center",
    };
  };
  state = {
    date: new Date() // 日期
  }
  _onDateChange = date => {
    this.setState({ date })
  }
  render() {
    const {date} = this.state
    return (
      <View style={styles.container}>
        <Text>Hello! Welcome to my homepage</Text>
        <View style={styles.halfWidthBox} />
        <View style={styles.fullWidthBox} />
        {Platform.OS === "ios" ?
          <DatePickerIOS date={date}  onDateChange={this._onDateChange} /> :
          <Datepicker
            customStyles={{
              dateInput: {
                height: pxW2dp(50),
                borderColor: "red"
              }
            }}
            iconComponent={<Text />}
            style={styles.datepicker} androidMode="spinner" mode="datetime"
            hideText={false} onDateChange={this._onDateChange}
          />
        }

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  halfWidthBox: {
    width: pxW2dp(375),
    height: pxW2dp(100),
    backgroundColor: "red"
  },
  fullWidthBox: {
    width: pxW2dp(750),
    height: pxW2dp(100),
    backgroundColor: "red"
  },
  datepicker: {
    width: percW2dp(50),
  }
});
