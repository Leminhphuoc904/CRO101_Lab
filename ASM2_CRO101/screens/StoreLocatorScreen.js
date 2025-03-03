import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const StoreLocatorScreen = () => {
  const stores = [
    { id: '1', name: 'Store A', latitude: 37.7749, longitude: -122.4194 },
    { id: '2', name: 'Store B', latitude: 34.0522, longitude: -118.2437 },
    { id: '3', name: 'Store C', latitude: 40.7128, longitude: -74.0060 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find a Store Near You</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.7749,
          longitude: -122.4194,
          latitudeDelta: 10,
          longitudeDelta: 10,
        }}
      >
        {stores.map((store) => (
          <Marker
            key={store.id}
            coordinate={{ latitude: store.latitude, longitude: store.longitude }}
            title={store.name}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  map: {
    flex: 1,
  },
});

export default StoreLocatorScreen;
