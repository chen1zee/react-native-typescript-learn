import React from "react"
import {View, Text, StyleSheet} from "react-native"
import Swiper from "react-native-swiper"

class WeatherReportScreen extends React.PureComponent {
  render() {
    return (
      <Swiper style={styles.wrapper} dot={<View style={styles.dotStyle} />}>
        <View style={styles.slide1}><Text style={styles.text}>Swiper 1</Text></View>
        <View style={styles.slide1}><Text style={styles.text}>Swiper 2</Text></View>
      </Swiper>
    )
  }
}

export default WeatherReportScreen

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#9DD6EB"
  },
  text: { color: "#fff", fontSize: 30, fontWeight: "bold" },
  dotStyle: {
    width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3,
    marginTop: 3, marginBottom: 3, backgroundColor: "red",
  }
})
