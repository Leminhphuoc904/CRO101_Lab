import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const faqData = [
  { id: '1', question: 'How can I track my order?', answer: 'You can track your order in the Order Tracking section.' },
  { id: '2', question: 'What is the return policy?', answer: 'You can return products within 30 days of purchase.' },
  { id: '3', question: 'Do you offer international shipping?', answer: 'Yes, we ship to multiple countries worldwide.' },
];

const CustomerSupportScreen = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleSendMessage = () => {
    if (!userInput.trim()) return;
    
    const userMessage = { id: chatMessages.length.toString(), text: userInput, isUser: true };
    setChatMessages([...chatMessages, userMessage]);
    
    // Simulate bot response if question matches FAQ
    const matchedFaq = faqData.find(faq => faq.question.toLowerCase().includes(userInput.toLowerCase()));
    if (matchedFaq) {
      setTimeout(() => {
        setChatMessages(prev => [
          ...prev,
          { id: (prev.length + 1).toString(), text: matchedFaq.answer, isUser: false },
        ]);
      }, 1000);
    }

    setUserInput('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🤖 Customer Support</Text>

      <Text style={styles.sectionTitle}>📌 Frequently Asked Questions</Text>
      <FlatList
        data={faqData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.faqItem}>
            <Text style={styles.question}>{item.question}</Text>
            <Text style={styles.answer}>{item.answer}</Text>
          </View>
        )}
      />

      <Text style={styles.sectionTitle}>💬 Live Chat Support</Text>
      <FlatList
        data={chatMessages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.chatBubble, item.isUser ? styles.userBubble : styles.botBubble]}>
            <Text style={styles.chatText}>{item.text}</Text>
          </View>
        )}
        contentContainerStyle={styles.chatContainer}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={userInput}
          onChangeText={setUserInput}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: 15,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#444',
  },
  faqItem: {
    backgroundColor: '#FFF',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  answer: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  chatContainer: {
    paddingVertical: 10,
  },
  chatBubble: {
    padding: 12,
    borderRadius: 8,
    marginVertical: 5,
    maxWidth: '75%',
  },
  userBubble: {
    backgroundColor: '#007BFF',
    alignSelf: 'flex-end',
  },
  botBubble: {
    backgroundColor: '#E0E0E0',
    alignSelf: 'flex-start',
  },
  chatText: {
    fontSize: 14,
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FFF',
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CustomerSupportScreen;
