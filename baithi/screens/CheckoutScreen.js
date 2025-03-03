import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as WebBrowser from "expo-web-browser";

const CheckoutScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const [loading, setLoading] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState(null);

  useEffect(() => {
    if (paymentUrl) {
      WebBrowser.openBrowserAsync(paymentUrl);
    }
  }, [paymentUrl]);

  const handlePayment = async () => {
    setLoading(true);
    try {
      const orderInfo = {
        amount: product.price,
        orderId: `ORDER_${Date.now()}`,
        orderDescription: `Thanh toán đơn hàng ${product.name}`,
      };
      
      const response = await fetch("https://your-server.com/api/vnpay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderInfo),
      });

      const data = await response.json();
      if (data.paymentUrl) {
        setPaymentUrl(data.paymentUrl);
      } else {
        Alert.alert("Lỗi", "Không thể tạo thanh toán.");
      }
    } catch (error) {
      Alert.alert("Lỗi", "Có lỗi xảy ra khi xử lý thanh toán.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thanh toán</Text>

      <View style={styles.productContainer}>
        <Image source={product.image} style={styles.image} />
        <View>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        </View>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#4CAF50" />
      ) : (
        <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
          <Text style={styles.payText}>Xác nhận & Thanh toán</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  productContainer: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  image: { width: 100, height: 100, borderRadius: 10, marginRight: 15 },
  name: { fontSize: 18, fontWeight: "bold" },
  price: { fontSize: 16, color: "#666" },
  payButton: { backgroundColor: "#4CAF50", padding: 15, borderRadius: 10, alignItems: "center" },
  payText: { color: "white", fontSize: 18, fontWeight: "bold" },
});

export default CheckoutScreen;
