import React from "react"
import { View, Button, Alert } from "react-native"

type Props = {
  aaa?: number|string
  bbb?: string
}

class Aaa extends React.Component<Props> {
  _handleBtnClk = () => {
    Alert.alert(
      "this title", "this msg",
      [
        {text: "txt1", onPress: () => console.log("txt1")}
      ],
      {
        cancelable: false
      }
    )
  }
  render() {
    const { aaa } = this.props
    return (
      <View>
        {aaa}
        <Button onPress={this._handleBtnClk} title="asd" />
      </View>
    )
  }
}

export default Aaa
