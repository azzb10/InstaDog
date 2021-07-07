import React from "react";
import { Image, StyleSheet } from "react-native";


const Logo = () => {
  return (<Image style={styles.logo} source={require("../assets/logos/36503-InstaDog-download-v1.png")} />)
}

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    margin: 20,
    height: 45,
    width: 123
  }
})

export default Logo;