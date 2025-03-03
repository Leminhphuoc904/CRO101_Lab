import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const WishlistScreen = ({ navigation }) => {
  const [wishlist, setWishlist] = useState([
    { id: '1', name: 'Nike Air Max', price: 150.99, image: require('../assets/nike_air_max.png') },
    { id: '2', name: 'Adidas Ultraboost', price: 180.49, image: require('../assets/adidas_ultraboost.png') },
  ]);

  const removeFromWishlist = (id) => {
    Alert.alert(
      'Xóa sản phẩm?',
      'Bạn có chắc muốn xóa sản phẩm này khỏi Wishlist?',
      [
        { text: 'Hủy', style: 'cancel' },
        { text: 'Xóa', onPress: () => setWishlist(wishlist.filter(item => item.id !== id)), style: 'destructive' }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛍️ Wishlist của bạn</Text>
      {wishlist.length === 0 ? (
        <Text style={styles.emptyText}>Chưa có sản phẩm nào trong Wishlist.</Text>
      ) : (
        <FlatList
          data={wishlist}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.wishlistItem}>
              <Image source={item.image} style={styles.productImage} />
              <View style={styles.infoContainer}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
              </View>
              <TouchableOpacity style={styles.removeButton} onPress={() => removeFromWishlist(item.id)}>
                <MaterialIcons name="delete" size={24} color="#FFF" />
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F7F7F7',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#222',
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'gray',
    marginTop: 50,
  },
  wishlistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 15,
    marginBottom: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginRight: 15,
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 18,
    color: '#777',
  },
  removeButton: {
    backgroundColor: '#FF5733',
    padding: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FF5733',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
});

export default WishlistScreen;