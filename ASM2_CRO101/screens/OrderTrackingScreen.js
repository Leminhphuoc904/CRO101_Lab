import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const OrderTrackingScreen = () => {
  const [orders, setOrders] = useState([
    { id: '1', status: 'Processing', estimatedDelivery: 'March 5, 2025' },
    { id: '2', status: 'Shipped', estimatedDelivery: 'March 3, 2025' },
    { id: '3', status: 'Delivered', estimatedDelivery: 'March 1, 2025' },
  ]);

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Processing': return { color: '#FFA500', emoji: '🟡' };
      case 'Shipped': return { color: '#007BFF', emoji: '🚚' };
      case 'Delivered': return { color: '#28A745', emoji: '✅' };
      default: return { color: '#000', emoji: '' };
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📦 Theo dõi đơn hàng</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const { color, emoji } = getStatusStyle(item.status);
          return (
            <View style={styles.orderItem}>
              <Text style={styles.orderId}>🔹 Mã đơn hàng: <Text style={styles.bold}>{item.id}</Text></Text>
              <Text style={[styles.orderStatus, { color }]}>
                {emoji} Trạng thái: {item.status}
              </Text>
              <Text style={styles.estimatedDelivery}>📅 Giao hàng dự kiến: <Text style={styles.bold}>{item.estimatedDelivery}</Text></Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8F9FA',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  orderItem: {
    backgroundColor: '#FFF',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  orderId: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  orderStatus: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  estimatedDelivery: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
  bold: {
    fontWeight: 'bold',
    color: '#333',
  },
});

export default OrderTrackingScreen;
