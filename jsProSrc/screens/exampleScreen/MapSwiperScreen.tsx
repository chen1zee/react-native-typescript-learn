import React from "react"
import {View} from "react-native"
import MapView from "react-native-maps"

class MapSwiperScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <MapView initialRegion={{latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.09, longitudeDelta: 0.04}} />
      </View>
    )
  }
}

export default MapSwiperScreen
