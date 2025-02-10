import React from "react";
import { FlatList, View, Text, Image, StyleSheet } from "react-native";

const App = () => {
  const data = [
    {
      name: "Lê Minh Phước",
      email: "phuoc.le@example.com",
      position: "Mobile Developer",
      photo: "https://via.placeholder.com/150",
    },
    {
      name: "Nguyễn Văn An",
      email: "an.nguyen@example.com",
      position: "UI/UX Designer",
      photo: "https://via.placeholder.com/150",
    },
    {
      name: "Trần Thị Bích",
      email: "bich.tran@example.com",
      position: "Project Manager",
      photo: "https://via.placeholder.com/150",
    },
    {
      name: "Hoàng Văn Tùng",
      email: "tung.hoang@example.com",
      position: "Backend Developer",
      photo: "https://via.placeholder.com/150",
    },
  ];

  const ContactItem = ({ contact }) => (
    <View style={styles.card}>
      <Image source={{ uri: contact.photo }} style={styles.photo} />
      <View style={styles.info}>
        <Text style={styles.name}>{contact.name}</Text>
        <Text style={styles.position}>{contact.position}</Text>
        <Text style={styles.email}>{contact.email}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <ContactItem contact={item} />}
        keyExtractor={(item) => item.email}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  card: {
    flexDirection: "row",
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  info: {
    marginLeft: 10,
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  position: {
    fontSize: 14,
    color: "gray",
  },
  email: {
    fontSize: 12,
    color: "blue",
  },
});

export default App;

