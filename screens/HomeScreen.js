import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native'
import { Dimensions } from 'react-native'
// import { StatusBar } from 'expo-status-bar'
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';


const {width,height}=Dimensions.get('window')

export default function HomeScreen() {
const navigation=useNavigation()

  const handlePress = () => {
    navigation.navigate('Onboarding')
  };

  return (
    <View style={styles.container}>
  {/* <StatusBar backgroundColor="transparent" barStyle="light-content" /> */}
      <StatusBar/>

     {/* <LottieView source={require('../assets/animations/confetti.json')} autoPlay loop /> */}
      <View style={styles.lottie}>
        <LottieView source={require('../assets/animations/confetti.json')} autoPlay loop />
      </View>
      <Text style={styles.text}>
      Home Page
      </Text>
      <TouchableOpacity style={styles.resetBtn} onPress={handlePress}>
        <Text>
          Reset
        </Text>
      </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop:StatusBar.currentHeight,
    alignItems:'center',
    justifyContent:'center'

  },
  lottie: {
    width: width * 0.9,
    height: width,
  },
  text:{
fontSize:40,
  },
  resetBtn:{
    backgroundColor:'lime',
    padding:10,
    borderRadius:10
  }



})