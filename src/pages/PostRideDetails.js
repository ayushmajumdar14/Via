import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function PostRideDetails() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ride</Text>
      <Text>Your ride request has been confirmed!</Text>
      <Text>Ride Details</Text>
      <Text>8:00am - 9:00am February 15, 2023</Text>
      <Text>Driver Name, Rider 1 Rider 2</Text>
      <Button title="Add to schedule" onPress={() => { /* Add to schedule logic */ }} />
      <Button title="Share ride" onPress={() => { /* Share ride logic */ }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
