import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const Photo = ({file, count}) => {
  const [like, setLike] = useState(count);

  const increment = () =>{
    setLike(like + 1);
  }

  return (
    <View style = {styles.container}>
      <Image style={styles.image} source={file}/>
      
      <TouchableOpacity style={styles.button} onPress={increment}>
        <Image style={styles.heartLogo} source={require("../assets/logos/coracao-72.png")}/>
        <Text style = {styles.text}>{like}
        
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    justifyContent: "center"
  },

  text: {
    fontSize: 22
  },

  image: {
    height: 300,
    width: 350
  },

  heartLogo: {
    height: 25,
    width: 28
  },

  button: {
    flexDirection: 'row',
    margin: 10
  }
});

export default Photo