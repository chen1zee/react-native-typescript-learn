import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Logo } from "../components/header/header";
import { HeaderBackButton } from "react-navigation-stack";

export default class SettingsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      // @ts-ignore
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)}  layoutPreset="left" scene={null}/>,
      headerTitle: <Logo />,
      headerBackTitle: "Settings",
      headerLayoutPreset: "center"
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello! Welcome to my settings page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
