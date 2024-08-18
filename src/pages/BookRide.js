import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function BookRide() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select Your Ride</Text>
      
      <View style={styles.rideOption}>
        <Text>Economy</Text>
        <Text>Affordable rides, all to yourself</Text>
      </View>
      
      <View style={styles.rideOption}>
        <Text>Luxury</Text>
        <Text>Ride in style and comfort</Text>
      </View>
      
      <View style={styles.driverDetails}>
        <Text>Jane Smith</Text>
        <Text>4.9 stars (200 rides)</Text>
      </View>
      
      <Text style={styles.sectionHeader}>Payment & Security</Text>
      <TextInput style={styles.input} placeholder="Card Number" />
      <TextInput style={styles.input} placeholder="Expiry Date" />
      <TextInput style={styles.input} placeholder="CVV" />
      
      <Text style={styles.sectionHeader}>Additional Notes</Text>
      <TextInput style={styles.input} placeholder="Add any notes or preferences" />
      
      <Text style={styles.sectionHeader}>Chat with Driver</Text>
      <Text>Coordinate with your driver for a smooth pickup.</Text>
      
      <Button title="Confirm Booking" onPress={() => { /* Confirm Booking Logic */ }} />
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
  rideOption: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  driverDetails: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
});
