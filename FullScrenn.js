import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export const FullScreenLoader = () => {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Задайте полупрозрачный фон здесь
    },
  });