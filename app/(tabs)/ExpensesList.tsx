import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Ensure you have expo/vector-icons installed

const ExpensesList = () => {
    // Placeholder data for now
    const expenses = [
        { id: '1', amount: '50', category: 'Groceries' },
        { id: '2', amount: '30', category: 'Fuel' },
        { id: '3', amount: '20', category: 'Eating out' },
    ];

    const navigation = useNavigation();

    return (
        <>
            <ThemedView style={styles.header}>
                <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => navigation.navigate('index')}
                >
                    <Ionicons name="arrow-back-outline" size={24} color="#000" />
                </TouchableOpacity>
            </ThemedView>
            <View style={styles.container}>
                <Text style={styles.title}>Expenses List</Text>
                <FlatList
                    data={expenses}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.expenseItem}>
                            <Text style={styles.expenseText}>
                                {item.category}: ${item.amount}
                            </Text>
                        </View>
                    )}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        marginTop: 0,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    expenseItem: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    expenseText: {
        fontSize: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 0,
        marginTop: 32,
    },
    iconButton: {
        padding: 8,
    },
});

export default ExpensesList;