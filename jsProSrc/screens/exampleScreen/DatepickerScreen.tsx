import React from "react"
import {StyleSheet, View, Platform, DatePickerIOS, Text} from "react-native"
import makeExampleScreen from "js_pro_src/screens/exampleScreen/makeExampleScreenDecorator";
import {SCREEN_2_TITLE, SCREEN_NAMES} from "js_pro_src/screens/screenNames";
import Datepicker from "react-native-datepicker"
import {percW2dp} from "js_pro_src/utils/sizes";

@makeExampleScreen(SCREEN_NAMES.Datepicker, SCREEN_2_TITLE.Datepicker)
class DatepickerScreen extends React.Component {
  state = {
    date: new Date()
  }
  _onDateChange = date => {
    this.setState({date})
  }
  render() {
    const {date} = this.state
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" ?
          <DatePickerIOS date={date} onDateChange={this._onDateChange} /> :
          <Datepicker
            customStyles={{
              dateInput: { borderColor: "red" }
            }}
            iconComponent={<Text />}
            style={styles.datepicker} androidMode="spinner" mode="datetime"
            hideText={false} onDateChange={this._onDateChange}
          />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: "center", justifyContent: "center"
  },
  datepicker: {
    width: percW2dp(50),
  }
})

export default DatepickerScreen
