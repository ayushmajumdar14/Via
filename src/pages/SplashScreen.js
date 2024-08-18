import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Via</Text>
      <Image style={styles.image} source={{uri: 'https://via.placeholder.com/300x150'}} />
      <Text style={styles.subtitle}>Book rides securely and conveniently.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: 'grey',
  },
});
