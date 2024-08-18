import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function PaymentPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Payment Methods</Text>
      
      <View style={styles.paymentMethod}>
        <Text>Visa ending in 1234</Text>
      </View>
      
      <View style={styles.paymentMethod}>
        <Text>MasterCard ending in 5678</Text>
      </View>
      
      <Button title="Add Payment Method" onPress={() => { /* Add Payment Method Logic */ }} />
      
      <Text style={styles.sectionHeader}>Secure Transactions</Text>
      <Text>SSL Encryption</Text>
      <Text>PCI Compliance</Text>
      <Text>Driver Verification</Text>
      <Text>GPS Tracking</Text>
      
      <Text style={styles.sectionHeader}>Personal Information</Text>
      <TextInput style={styles.input} placeholder="Name" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Phone" />
      
      <View style={styles.buttonContainer}>
        <Button title="Cancel" onPress={() => { /* Cancel Logic */ }} />
        <Button title="Save" onPress={() => { /* Save Logic */ }} />
      </View>
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
  paymentMethod: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 10,
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
