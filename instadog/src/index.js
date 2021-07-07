import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

import Logo from "./components/Logo"
import Photo from "./components/Photo"

const Main = () => {
  return (
    <View style={styles.container}>
      <>
        <Logo />
        <Photo count={10} file={require("./assets/images/gohan.jpeg")}/>
        <Photo count={15} file={require("./assets/images/sebastiana.jpeg")}/>
      </>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#222',
  }
})

export default Main