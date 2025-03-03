import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const PromotionNotificationsScreen = () => {
  const [promotions, setPromotions] = useState([
    { id: '1', title: 'Spring Sale!', description: 'Get 20% off on all items this week only.' },
    { id: '2', title: 'New Arrivals', description: 'Check out our latest collection of sneakers and apparel.' },
    { id: '3', title: 'Exclusive Member Discount', description: 'Members get an extra 10% off on all purchases.' },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Promotions</Text>
      <FlatList
        data={promotions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.promoItem}>
            <Text style={styles.promoTitle}>{item.title}</Text>
            <Text style={styles.promoDescription}>{item.description}</Text>
          </View>
        )}
      />
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
    marginBottom: 20,
    textAlign: 'center',
  },
  promoItem: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  promoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  promoDescription: {
    fontSize: 16,
    color: 'gray',
  },
});

export default PromotionNotificationsScreen;
