import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import OnboardScreen from '../screens/OnboardScreen';

const Stack=createNativeStackNavigator();

export default function AppNavigation() {
  return (
        <NavigationContainer>
            <Stack.Navigator >
              
            <Stack.Screen name='Onboarding' options={{headerShown:false}} component={OnboardScreen}/>

              <Stack.Screen name='Home' options={{headerShown:false}} component={HomeScreen}/>

            </Stack.Navigator>
        </NavigationContainer>
  )
}

const styles = StyleSheet.create({})