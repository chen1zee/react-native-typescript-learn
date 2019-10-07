import React from "react"
import {TouchableWithoutFeedback, View, Text, Animated, ImageBackground, StyleSheet, Image, Easing} from "react-native"

class TumblrMenuScreen extends React.Component {
  state = {
    shift: new Animated.Value(-70),
    show: false // 显示 菜单flag
  }
  private _pushMenu = () => {
    this.setState({ show: true })
    Animated.timing(
      this.state.shift,
      {
        toValue: 0, duration: 200, delay: 100, easing: Easing.elastic(1),
        useNativeDriver: true
      }
    ).start(() => {
      setTimeout(() => {
        this.setState({ show: false })
      }, 500)
    })
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: "#37465c"}}>
        <TouchableWithoutFeedback onPress={this._pushMenu}>
          <ImageBackground
            style={{width: "100%", height: "100%", backgroundColor: "cyan"}}
            source={require("js_pro_src/assets/tumblr.png")}
            imageStyle={{resizeMode: "contain"}}
          >
            <Text>32111123</Text>
          </ImageBackground>
        </TouchableWithoutFeedback>
        {this.state.show ?
          <ImageBackground
            style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "cyan"}}
            source={require("js_pro_src/assets/tumblrblur.png")}
            imageStyle={{resizeMode: "contain"}}
          >
            {/** TODO 修改 shift 为 transform */}
            <Animated.View style={[styles.menuItem1, {transform: this.state.shift}]}>
              <Image
                source={require("js_pro_src/assets/tumblr-text.png")}
                style={styles.menuImg}
              />
            </Animated.View>
          </ImageBackground> :
          <View />
        }
      </View>
    )
  }
}

export default TumblrMenuScreen

const styles = StyleSheet.create({
  menuItem1: { position: "absolute", left: 50, top: 80 },
  menuImg: { width: 120, height: 100, resizeMode: "contain" }
})
