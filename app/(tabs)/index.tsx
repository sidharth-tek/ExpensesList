import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure you have expo/vector-icons installed
import { useNavigation } from '@react-navigation/native';
import { ThemedView } from '@/components/ThemedView';
import InputForm from '@/components/InputForm';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <ThemedView style={styles.header}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.navigate('ExpensesList')}
        >
          <Ionicons name="list-outline" size={24} color="#000" />
        </TouchableOpacity>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <InputForm />
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 0,
    marginTop: 32,
  },
  iconButton: {
    padding: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    marginTop: 0,
  },
});
