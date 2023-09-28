import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper'
import LottieView from 'lottie-react-native';
import { StatusBar } from 'expo-status-bar';

const {width,height}=Dimensions.get('window')
export default function OnboardScreen() {
  return (
    
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" barStyle="light-content" />
      <Onboarding
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: '#a7f3d0',
            image: (<View style={styles.lottie}>
              <LottieView source={require('../assets/animations/boost.json')} autoPlay loop />
            </View>
            ),
            title: 'Boost Productivity',
            subtitle: 'Follow this page to boost your productivity level',
          },
          {
            backgroundColor: '#fef3c7',
            image: (<View style={styles.lottie}>
              <LottieView source={require('../assets/animations/work.json')} autoPlay loop />
            </View>
            ),
            title: 'Work Seamlessly',
            subtitle: 'Get your work done seamlessly without interruption',
          },
          {
            backgroundColor: '#a78bfa',
            image: (<View style={styles.lottie}>
              <LottieView source={require('../assets/animations/achieve.json')} autoPlay loop />
            </View>
            ),
            title: 'Achieve Higher Goals',
            subtitle: 'By boosting your productivity we help ypou achieve higher goals',
          },
        ]}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop:StatusBar.currentHeight

  },
  lottie: {
    width: width * 0.9,
    height: width,
  }
})