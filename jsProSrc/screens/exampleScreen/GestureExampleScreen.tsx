import React from "react"
import {View, StyleSheet, ImageBackground, PanResponder} from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons";
import {pxW2dp, screenW, screenH} from "js_pro_src/utils/sizes";

const COLORS = {
  white: "white",
  tran07: "rgba(255, 255, 255, 0.6)"
}

class GestureExampleScreen extends React.PureComponent {
  _baseballRef // baseball ref
  _panResponder // 触摸操作 handler
  _baseballStyles = { style: { top: 0, left: 0 } }
  _prevTop = 0
  _prevLeft = 0
  state = {
    color: COLORS.tran07
  }
  private _updatePosition = () => {
    this._baseballRef && this._baseballRef.setNativeProps(this._baseballStyles)
  }
  private _endMove = (evt, gestureState) => {
    this._prevTop += gestureState.dy
    this._prevLeft += gestureState.dx
    this.setState({ color: COLORS.tran07 })
  }
  componentWillMount(): void {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      /**
       * onStartShouldSetResponder与onMoveShouldSetResponder是以冒泡的形式调用的，
       * 即嵌套最深的节点最先调用。这意味着当多个 View 同时在*ShouldSetResponder中返回 true 时，
       * 最底层的 View 将优先“夺权”。在多数情况下这并没有什么问题，因为这样可以确保所有控件和按钮是可用的。
       *
       * 但是有些时候，某个父 View 会希望能先成为响应者。
       * 我们可以利用“捕获期”来解决这一需求。
       * 响应系统在从最底层的组件开始冒泡之前，会首先执行一个“捕获期”，
       * 在此期间会触发on*ShouldSetResponderCapture系列事件。
       * 因此，如果某个父 View 想要在触摸操作开始时阻止子组件成为响应者，
       * 那就应该处理onStartShouldSetResponderCapture事件并返回 true 值。
       * */
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      /** 现在要开始响应触摸事件了。这也是需要做高亮的时候，使用户知道他到底点到了哪里。 */
      onPanResponderGrant: () => this.setState({ color: COLORS.white }),
      /**
       * 最近一次的移动距离为gestureState.move{X,Y}
       * 从成为响应者开始时的累计手势移动距离为gestureState.d{x,y}
       * */
      onPanResponderMove: (evt, gestureState) => {
        let left = this._prevLeft + gestureState.dx
        let top = this._prevTop + gestureState.dy

        if (left < 0) left = 0
        else if (left > screenW) left = screenW

        if (top < 0) top = 0
        else if (top > screenH) top = screenH

        this._baseballStyles.style.left = left
        this._baseballStyles.style.top = top
        this._updatePosition()
      },
      onPanResponderRelease: (evt, gestureState) => this._endMove(evt, gestureState),
      /** 有其他组件请求接替响应者，当前的 View 是否“放权”？返回 true 的话则释放响应者权力。 */
      onPanResponderTerminationRequest: () => true,
      /**
       *  响应者权力已经交出。
       *  这可能是由于其他 View 通过onResponderTerminationRequest请求的，
       *  也可能是由操作系统强制夺权（比如 iOS 上的控制中心或是通知中心）。
       * */
      onPanResponderTerminate: (evt, gestureState) => this._endMove(evt, gestureState),
      /**
       * 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
       * 默认返回true。目前暂时只支持android。
       * */
      onShouldBlockNativeResponder: () => true,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("js_pro_src/assets/agrass.png")} style={{width: "100%", height: "100%"}}
          imageStyle={{resizeMode: "cover"}}
        >
          <View ref={circle => {this._baseballRef = circle}} style={styles.baseballWrap} {...this._panResponder.panHandlers}>
            <Ionicons name="ios-baseball" size={pxW2dp(240)} color={this.state.color} />
          </View>
        </ImageBackground>
      </View>
    )
  }
}

export default GestureExampleScreen

const styles = StyleSheet.create({
  container: { flex: 1 },
  baseballWrap: {
    backgroundColor: "transparent", width: pxW2dp(240), height: pxW2dp(240),
    position: "absolute", left: 0, top: 0
  }
})
