import React from "react"
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  StatusBar,
  Animated,
  Button,
  LayoutChangeEvent
} from "react-native"
import {Header} from "react-navigation-stack"
import Icon from "react-native-vector-icons/Ionicons"

const AnimatedIcon = Animated.createAnimatedComponent(Icon)

const animatedTimingAsync = (animState, config) => (new Promise(resolve => {
  Animated.timing(animState, config).start(() => resolve())
}))

class TwitterAniScreen extends React.PureComponent {
  state = {
    iconSizeAnim: new Animated.Value(1)
  }
  _startAni = async () => {
    await animatedTimingAsync(
      this.state.iconSizeAnim,
      { toValue: 5, duration: 1000, useNativeDriver: true }
    )
    Animated.timing(
      this.state.iconSizeAnim,
      { toValue: 1, duration: 100, useNativeDriver: true }
    ).start()
  }
  componentDidMount(): void {
    console.log("mounted HEADER HEIGHT", Header.HEIGHT)
  }
  onLayout = ({nativeEvent: { layout: { height } }}: LayoutChangeEvent) => {
    console.log('layout height ', height)
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: "#ddd"}} onLayout={this.onLayout}>
        <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollInner}>
          <View style={{minHeight: 700}}>
            <Text>1323</Text>
            <AnimatedIcon
              style={{transform: [{scale: this.state.iconSizeAnim}]}}
              size={60} name="logo-twitter" color="red" />
            <Button title="动画" color="blue" onPress={this._startAni} />
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default TwitterAniScreen

const styles = (() => {
  const {height: winH} = Dimensions.get("window")
  // @ts-ignore
  const contentHeight = winH - Header.HEIGHT - (StatusBar.currentHeight || 0)
  console.log("Header HEIGHT", Header.HEIGHT)
  return StyleSheet.create({
    scrollContainer: { backgroundColor: "#fbfbfb" },
    container: { height: contentHeight },
    scrollInner: { alignItems: "center", justifyContent: "center" }
  })
})()
