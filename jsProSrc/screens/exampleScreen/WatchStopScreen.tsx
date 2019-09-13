import React from "react"
import {StyleSheet, View, Text, TouchableHighlight, FlatList} from "react-native"
import {percW2dp, pR2dp, pxW2dp} from "js_pro_src/utils/sizes";

type WatchFaceProps = {
  sectionTime: string, // 本论即使
  totalTime: string, // 总时间
}

type WatchControlProps = {
  stopWatch: boolean, // 计时器 停止flag
  resetWatch: boolean, // 重置状态

}

type WatchRecordProps = {
}

enum COLORS {
  green = "#60B644"
}

class WatchFace extends React.Component<WatchFaceProps> {
  render() {
    return (
      <View style={styles.watchFaceContainer}>
        <Text style={styles.secionTime}>{this.props.sectionTime}</Text>
        <Text style={styles.totalTime}>{this.props.totalTime}</Text>
      </View>
    )
  }
}

class WatchControl extends React.Component<WatchControlProps> {
  state = {
    startBtn: {
      color: COLORS.green,
      text: "启动"
    }
  }
  render() {
    const { startBtn } = this.state
    const {stopWatch, resetWatch} = this.props
    const leftBtnText = resetWatch ? "计次" : stopWatch ? "复位" : "计次"
    return (
      <View style={styles.watchControlContainer}>
        <View style={{flex: 1,alignItems: "center"}}>
          <TouchableHighlight style={styles.btnCommon} underlayColor="#eee" onPress={() => console.log("TODO")}>
            <Text style={styles.btnText}>{leftBtnText}</Text>
          </TouchableHighlight>
        </View>
        <View style={{flex: 1, alignItems: "center"}}>
          <TouchableHighlight style={styles.btnCommon} underlayColor="#eee" onPress={() => console.log("TODO")}>
            <Text style={[styles.btnText, {color: startBtn.color}]}>{startBtn.text}</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

class WatchRecord extends React.Component<WatchRecordProps> {
  state = {
    timeList: ["", "", "", "", "", "", ""]
  }
  render() {
    const {timeList} = this.state
    return (
      <FlatList style={styles.recordList}
        data={timeList}
        // keyExtractor={} extraData={}
        renderItem={({item, index}) => (
          <View style={styles.recordItem}>
            <Text style={styles.recordItemTitle}>{item === "" ? "" : "计次" + (index + 1)}</Text>
            <Text style={styles.recordItemTime}>{item}</Text>
          </View>
        )}
      />
    )
  }
}

class WatchStopScreen extends React.Component {
  state = {
    stopWatch: false, // 停止flag
    resetWatch: true, // 重置态flag true: 为重置状态
    initialTime: 0,
    currentTime: 0,
    recordTime: 0,
    timeAccumulation: 0,
    totalTime: "00:00.00",
    sectionTime: "00:00.00"
  }
  render() {
    const {sectionTime, totalTime, stopWatch} = this.state
    return (
      <View style={styles.watchContainer}>
        <WatchFace sectionTime={sectionTime} totalTime={totalTime} />
        <WatchControl stopWatch={stopWatch} />
        <WatchRecord />
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
      paddingLeft: pxW2dp(30), paddingRight: pxW2dp(10),
      height: recordItemH, borderBottomWidth: pR2dp(1), borderBottomColor: "#bbb",
      flexDirection: "row", alignItems: "center", justifyContent: "space-between"
    },
    recordItemTitle: {
      backgroundColor: "transparent", color: "#777"
    },
    recordItemTime: {
      backgroundColor: "transparent", color: "#222"
    }
  })
})()
