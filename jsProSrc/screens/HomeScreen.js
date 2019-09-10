import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { MenuButton, Logo } from "../components/header/header";

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "首页",
      headerLeft: <MenuButton onPress={() => navigation.openDrawer()} />,
      headerTitle: <Logo />,
      headerBackTitle: "Home",
      headerLayoutPreset: "center"
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello! Welcome to my homepage</Text>
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
