import React, { useCallback, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const [favorites, setFavorites] = useState({});
  const [cart, setCart] = useState([]); // Giỏ hàng

  const products = [
    { id: '1', name: 'Air Zoom Flight', price: 181, image: require('../assets/air_zoom_flight.png') },
    { id: '2', name: 'Cosmic Unity 2', price: 169, image: require('../assets/cosmic_unity_2.png') },
    { id: '3', name: 'Jordan', price: 117, image: require('../assets/giay1.png') },
    { id: '4', name: 'Nike Air Jordan', price: 200, image: require('../assets/giay2.png') },
    { id: '5', name: 'Nike Air Force', price: 190, image: require('../assets/giay3.png') },
    { id: '6', name: 'Nike Pegasus 38', price: '$199', image: require('../assets/giay4.png') },
    { id: '7', name: 'Giày Cao Gót', price: '$222', image: require('../assets/giay5.png') },
    { id: '8', name: 'DINCOX', price: '$250', image: require('../assets/giay6.png') },
    { id: '9', name: 'Archives', price: '$149', image: require('../assets/giay7.png') },
    { id: '10', name: 'Adidas NEO', price: '$177', image: require('../assets/giay8.png') },
    { id: '11', name: 'Giày Da Nam', price: '$277', image: require('../assets/giay9.png') },
    { id: '12', name: 'Sneaker', price: '$111', image: require('../assets/giay10.png') },
    { id: '13', name: 'Adidas A83', price: '$197', image: require('../assets/giay11.png') },
  ];

  const handlePress = useCallback((product) => {
    navigation.navigate('ProductDetails', { product });
  }, [navigation]);

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [id]: !prevFavorites[id],
    }));
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    Alert.alert('Thêm vào giỏ hàng', `${product.name} đã được thêm vào giỏ hàng!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sản Phẩm</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <View style={styles.productWrapper}>
            <TouchableOpacity style={styles.productContainer} onPress={() => handlePress(item)} activeOpacity={0.7}>
              <Image source={item.image} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>${item.price}</Text>

              {/* Icon trái tim */}
              <TouchableOpacity onPress={() => toggleFavorite(item.id)} style={styles.heartButton}>
                <Ionicons 
                  name={favorites[item.id] ? 'heart' : 'heart-outline'} 
                  size={24} 
                  color={favorites[item.id] ? 'red' : 'gray'} 
                />
              </TouchableOpacity>

              {/* Nút Thêm vào giỏ hàng */}
              <TouchableOpacity style={styles.addToCartButton} onPress={() => addToCart(item)}>
                <Text style={styles.addToCartText}>Thêm vào giỏ hàng</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#F8F8F8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#333',
  },
  row: {
    justifyContent: 'space-between',
  },
  productWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  productContainer: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    margin: 8,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  productImage: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  heartButton: {
    alignItems: 'center',
    marginBottom: 10,
  },
  addToCartButton: {
    backgroundColor: '#ff6f00',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  addToCartText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
