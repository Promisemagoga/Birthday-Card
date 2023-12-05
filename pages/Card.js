import React from 'react'
import { ImageBackground, Image } from 'react-native'
import { StyleSheet } from 'react-native'
import { View, Text } from 'react-native'
import backgroundImage from '../assets/gif.gif'
import { Animated } from 'react-native-web'
import { TouchableOpacity } from 'react-native'




const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "auto",
    marginBottom: "auto",
    alignItems: 'center',
    height: '100vh',
    padding: 50,
    width: "90%",
    height: 100

  },


  image: {
    width: 350,
    height: 350,
    resizeMode: 'fit',
  },


  message: {
    marginTop: 50,
    fontWeight: "200"
  },

  from: {
    marginTop: 50,
    fontSize: 20,
    fontWeight: "bold"

  },

  to: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: "bold"
  },

  span: {
    fontWeight: "300",
    fontSize: 18
  }

})


function Card() {

  return (

    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={backgroundImage}
      >
      </ImageBackground >
      <View>
        <Text style={styles.to}>To: <Text style={styles.span}>Jane</Text></Text>
        <Text style={styles.message}>Happy birthday to my dear friend Jane! May your day be filled with love, laughter, and lots of cake. Remember, age is just a number, and with every year that passes, you become more fabulous. Enjoy your special day, and may the laughter never cease! 🎉💕</Text>
        <Text style={styles.from}>From: <Text style={styles.span}>Promise Tshegofatso Magoga</Text></Text>
      </View>
    </View>

  );
}



export default Card