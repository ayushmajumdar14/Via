import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

export default function UserProfile() {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image style={styles.profileImage} source={{uri: 'https://via.placeholder.com/100'}} />
        <Text style={styles.profileName}>Alex Johnson</Text>
        <Text style={styles.profileStatus}>Verified Driver</Text>
      </View>
      
      <View style={styles.rideDetails}>
        <Text>Start Point: 123 Main St</Text>
        <Text>End Point: 456 Elm St</Text>
        <Text>Time: 10:00 AM</Text>
        <Text>Available Seats: 3</Text>
        <Text>Price: $15</Text>
      </View>
      
      <View style={styles.carInfo}>
        <Text>Toyota Camry</Text>
        <Text>Blue, 2018</Text>
      </View>
      
      <View style={styles.gpsTracking}>
        <Text>GPS Tracking</Text>
        <Image style={styles.mapImage} source={{uri: 'https://via.placeholder.com/300x150'}} />
      </View>
      
      <View style={styles.ratingsReviews}>
        <Text>Ratings & Reviews</Text>
        <Text>★ 4.8 (20 reviews)</Text>
        <Text>"Great driver, smooth ride!" - Sarah L.</Text>
        <Text>"Very punctual and friendly." - John D.</Text>
        <Text>"Will ride again!" - Emily R.</Text>
      </View>

      <Button title="Chat with Driver" onPress={() => { /* Navigate to messaging */ }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileStatus: {
    color: 'grey',
  },
  rideDetails: {
    marginBottom: 20,
  },
  carInfo: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  gpsTracking: {
    marginBottom: 20,
  },
  mapImage: {
    width: '100%',
    height: 150,
  },
  ratingsReviews: {
    marginBottom: 20,
  },
});
