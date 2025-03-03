import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const CartScreen = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([
    { id: '1', name: 'Air Zoom Flight', price: 181.68, image: require('../assets/air_zoom_flight.png'), quantity: 1 },
    { id: '2', name: 'Cosmic Unity 2', price: 169.61, image: require('../assets/cosmic_unity_2.png'), quantity: 1 },
    { id: '3', name: 'Nike Air Jordan', price: 169.61, image: require('../assets/giay2.png'), quantity: 1 },
    { id: '4', name: 'Nike Air Force', price: 169.61, image: require('../assets/giay3.png'), quantity: 1 },
    { id: '5', name: 'Adidas A83', price: 169.61, image: require('../assets/giay11.png'), quantity: 1 },
  ]);

  // Cập nhật số lượng sản phẩm
  const updateQuantity = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      )
    );
  };

  // Xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (id) => {
    Alert.alert(
      'Xóa sản phẩm?',
      'Bạn có chắc muốn xóa sản phẩm này khỏi giỏ hàng?',
      [
        { text: 'Hủy', style: 'cancel' },
        { text: 'Xóa', onPress: () => setCartItems(cartItems.filter(item => item.id !== id)), style: 'destructive' }
      ]
    );
  };

  // Tính tổng tiền
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛒 Shopping Cart</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>${item.price}</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => updateQuantity(item.id, -1)} style={styles.quantityButton}>
                  <Text style={styles.quantityText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => updateQuantity(item.id, 1)} style={styles.quantityButton}>
                  <Text style={styles.quantityText}>+</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.removeButton}>
                <Text style={styles.removeButtonText}>Xóa</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <Text style={styles.totalPrice}>Total: ${getTotalPrice()}</Text>
      <TouchableOpacity style={styles.checkoutButton} onPress={() => alert('Proceeding to checkout...')}>
        <Text style={styles.checkoutText}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

// 📌 **Styles**
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  productImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginRight: 15,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  productPrice: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#007BFF',
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    paddingHorizontal: 10,
  },
  quantity: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  removeButton: {
    backgroundColor: '#FF5733',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 6,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  removeButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFF',
  },
  totalPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    color: '#333',
  },
  checkoutButton: {
    backgroundColor: '#28A745',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  checkoutText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default CartScreen;
