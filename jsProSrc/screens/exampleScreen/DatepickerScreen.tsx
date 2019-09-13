import React from "react"
import {StyleSheet, View, Platform, DatePickerIOS} from "react-native"
import Datepicker from "react-native-datepicker"
import {percW2dp, pxW2dp} from "js_pro_src/utils/sizes";

class DatepickerScreen extends React.Component {
  state = {
    date: new Date(2019, 11, 12)
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
              dateInput: { borderColor: "red", width: pxW2dp(350) }
            }}
            date={date}
            // iconComponent={<Text />}
            locale="zh_cn" style={styles.datepicker} androidMode="spinner" mode="datetime"
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
