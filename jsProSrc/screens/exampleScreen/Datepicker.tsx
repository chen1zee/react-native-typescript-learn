import React from "react"
import {StyleSheet, View, Platform, DatePickerIOS} from "react-native"

class Comp extends React.Component {
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
          null
        }
      </View>
    )
  }
}

// TODO 制作 example

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: "center", justifyContent: "center"
  }
})
