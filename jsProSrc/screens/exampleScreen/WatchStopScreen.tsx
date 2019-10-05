import React, {Fragment} from "react"
import {StyleSheet, View, Text, TouchableHighlight, FlatList, StatusBar, Dimensions} from "react-native"
import {percW2dp, pR2dp, pxW2dp} from "js_pro_src/utils/sizes";

type WatchFaceProps = {
  sectionTimeTxt: string, // 本轮计时ts txt
  totalTimeTxt: string, // 总时间ts txt
}

type WatchControlProps = {
  watchState: WATCH_STATES, // 表状态
  startWatch: () => void, // 开始计时器函数
  suspendWatch: () => void, // 暂停计时器函数
  recordTimeFunc: () => void // 记录时间 函数
}

type WatchRecordProps = {
  list: Array<string>
}

type WatchRecordStates = {
}

const RIGHT_BTNS = { // 右侧
  start: { color: "#60B644", text: "启动" },
  stop: { color: "#B63028", text: "停止" }
}

enum WATCH_STATES {
  init = 0, // 初始化
  running = 1, // 运行中
  suspend = 2, // 暂停
}

class WatchFace extends React.PureComponent<WatchFaceProps> {
  render() {
    const {sectionTimeTxt, totalTimeTxt} = this.props
    return (
      <View style={styles.watchFaceContainer}>
        <Text style={styles.secionTime}>{sectionTimeTxt}</Text>
        <Text style={styles.totalTime}>{totalTimeTxt}</Text>
      </View>
    )
  }
}

class WatchControl extends React.PureComponent<WatchControlProps> {
  state = {
    rightBtn: RIGHT_BTNS.start
  }
  _rightBtnClick = () => {
    const {watchState} = this.props
    if ([WATCH_STATES.init, WATCH_STATES.suspend].includes(watchState)) { // 初始化状态 或 暂停中
      console.log(`WatchControl Btn click ${Date.now()}`)
      this.props.startWatch()
      this.setState({ rightBtn: RIGHT_BTNS.stop })
    } else if (watchState == WATCH_STATES.running) { // 运行中
      this.props.suspendWatch()
      this.setState({ rightBtn: RIGHT_BTNS.start })
    }
  }
  _leftClick = () => {
    this.props.recordTimeFunc()
  }
  render() {
    const { rightBtn } = this.state
    console.log("WatchControl Render")
    // TODO
    // const leftBtnText = resetWatch ? "计次" : stopWatch ? "复位" : "计次"
    const leftBtnText = "计次"
    return (
      <View style={styles.watchControlContainer}>
        <View style={{flex: 1,alignItems: "center"}}>
          <TouchableHighlight style={styles.btnCommon} underlayColor="#eee" onPress={this._leftClick}>
            <Text style={styles.btnText}>{leftBtnText}</Text>
          </TouchableHighlight>
        </View>
        <View style={{flex: 1, alignItems: "center"}}>
          <TouchableHighlight style={styles.btnCommon} underlayColor="#eee" onPress={this._rightBtnClick}>
            <Text style={[styles.btnText, {color: rightBtn.color}]}>{rightBtn.text}</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

class WatchRecord extends React.PureComponent<WatchRecordProps, WatchRecordStates> {
  state = {
    timeList: ["00:00.05", "00:00.02", "00:00.03", "00:00.04", "00:00.05", "00:00.01", "00:00.01", "00:00.01"]
  }
  render() {
    const {list} = this.props
    return (
      <FlatList style={styles.recordList}
        data={list}
        // keyExtractor={} extraData={}
        keyExtractor={(item, index) => index + ""}
        renderItem={({item, index}) => (
          <Fragment>
            <View style={styles.recordItem}>
              <Text style={styles.recordItemTitle}>{item === "" ? "" : "计次" + (index + 1)}</Text>
              <Text style={styles.recordItemTime}>{item}</Text>
            </View>
            <View style={styles.recordBottom} />
          </Fragment>
        )}
      />
    )
  }
}

class WatchStopScreen extends React.PureComponent {
  // 将 number 转为 "01" , 小于10的number 自动前方填充0
  static fix2NumTxt = num => {
    return num < 10 ? ("0" + num) : num
  }
  currentTs = 0 // 当前时间戳 ts
  sectionTs = 0 // 当前计次 ts
  totalTs = 0 // 总计时 ts
  state = {
    watchState: WATCH_STATES.init, // 表 状态
    sectionTimeTxt: "00:00:00",
    totalTimeTxt: "00:00:00",
    records: [],
    initialTime: 0,
    currentTime: 0,
    recordTime: 0,
    timeAccumulation: 0
  }
  // 启动计时
  _runWatch = () => {
    this.setState({ watchState: WATCH_STATES.running }) // 运行中
    const timeout = 10
    console.log(`_runWatch_${Date.now()}`)
    const timer = setInterval(() => {
      if (this.state.watchState != WATCH_STATES.running) return clearInterval(timer)
      const nowTs = (new Date()).getTime()
      const isFirstTime = this.currentTs == 0
      const deltaTs = isFirstTime ? timeout : (nowTs - this.currentTs)
      this.currentTs = nowTs
      this.sectionTs = this.sectionTs + deltaTs
      this.totalTs = this.totalTs + deltaTs
      const min = Math.floor(this.totalTs / 60000)
      const sec = Math.floor((this.totalTs % 60000) / 1000)
      const milSec = Math.floor((this.totalTs % 1000) / 10)
      const sectionMin = Math.floor(this.sectionTs / 60000)
      const sectionSec = Math.floor((this.sectionTs % 60000) / 1000)
      const sectionMilSec = Math.floor((this.sectionTs % 1000) / 10)
      this.setState({
        sectionTimeTxt: `${WatchStopScreen.fix2NumTxt(sectionMin)}:${WatchStopScreen.fix2NumTxt(sectionSec)}:${WatchStopScreen.fix2NumTxt(sectionMilSec)}`,
        totalTimeTxt: `${WatchStopScreen.fix2NumTxt(min)}:${WatchStopScreen.fix2NumTxt(sec)}:${WatchStopScreen.fix2NumTxt(milSec)}`
      })
      if (isFirstTime) this.forceUpdate()
    }, timeout)
  }
  _suspendWatch = () => {
    this.currentTs = 0
    this.setState({ watchState: WATCH_STATES.suspend })
  }
  _recordTimeFunc = () => { // 记录时间
    this.sectionTs = 0
    this.setState(prevState => ({
      // @ts-ignore
      records: [prevState.sectionTimeTxt].concat(prevState.records)
    }))
  }
  componentDidMount(): void {
    StatusBar.setBarStyle("dark-content")
    const { width: winW, height: winH } = Dimensions.get("window")
    const { width: scrW, height: scrH } = Dimensions.get("screen")
    console.log(winW, winH, scrW, scrH)
    console.log(StatusBar.currentHeight)
  }

  render() {
    const {sectionTimeTxt, totalTimeTxt, watchState, records} = this.state
    return (
      <View style={styles.watchContainer}>
        {/** 计时时间 */}
        <WatchFace sectionTimeTxt={sectionTimeTxt} totalTimeTxt={totalTimeTxt} />
        {/** 计时控制按钮 */}
        <WatchControl watchState={watchState}  startWatch={this._runWatch} suspendWatch={this._suspendWatch}  recordTimeFunc={this._recordTimeFunc}/>
        {/** 计时记录 */}
        <WatchRecord list={records} />
      </View>
    )
  }
}

export default WatchStopScreen

const styles = (() => {
  const recordItemH = pxW2dp(100)
  const recordNum = 7
  return StyleSheet.create({
    watchContainer: {
      flex: 1, alignItems: "center", backgroundColor: "#f3f3f3"
    },
    watchFaceContainer: {
      alignItems: "center",
      width: percW2dp(100), paddingHorizontal: 10, paddingVertical: 10,
      backgroundColor: "#fff", borderBottomWidth: 1, borderBottomColor: "#ddd",
    },
    secionTime: {
      position: "relative", left: pxW2dp(90),
      fontSize: pxW2dp(40), fontWeight: "100", color: "#555",
    },
    totalTime: {
      fontSize: pxW2dp(80), fontWeight: "100", color: "#222",
    },
    watchControlContainer: {
      width: percW2dp(100), paddingTop: pxW2dp(30),
      backgroundColor: "#f3f3f3", flexDirection: "row"
    },
    btnCommon: { // 按钮 通用样式
      width: percW2dp(24), height: percW2dp(24), borderRadius: percW2dp(12),
      alignItems: "center", justifyContent: "center", backgroundColor: "#fff"
    },
    btnText: {
      fontSize: pxW2dp(50), backgroundColor: "transparent", color: "#555"
    },
    recordList: {
      width: percW2dp(100), height: recordItemH * recordNum, paddingLeft: pxW2dp(15)
    },
    recordItem: {
      paddingLeft: pxW2dp(30), paddingRight: pxW2dp(10), height: recordItemH,
      flexDirection: "row", alignItems: "center", justifyContent: "space-between"
    },
    recordBottom: { height: pR2dp(1), backgroundColor: "#bbb" },
    recordItemTitle: {
      backgroundColor: "transparent", color: "#777"
    },
    recordItemTime: {
      backgroundColor: "transparent", color: "#222"
    }
  })
})()
