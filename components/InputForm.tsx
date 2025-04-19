import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons'; // Ensure you have expo/vector-icons installed

const InputForm = () => {
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('Groceries');

    const handleAddExpense = () => {
        console.log(`Expense Added: ${amount} - ${category}`);
        // Add your logic to handle the expense addition
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Enter Amount:</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Enter a number"
                value={amount}
                onChangeText={setAmount}
            />

            <Text style={styles.label}>Select Category:</Text>
            <Picker
                selectedValue={category}
                style={styles.picker}
                onValueChange={(itemValue) => setCategory(itemValue)}
            >
                <Picker.Item label="Groceries" value="Groceries" />
                <Picker.Item label="Fuel" value="Fuel" />
                <Picker.Item label="Eating out" value="Eating out" />
                <Picker.Item label="Discretionary" value="Discretionary" />
                <Picker.Item label="Stay out" value="Stay out" />
            </Picker>

            <TouchableOpacity style={styles.button} onPress={handleAddExpense}>
                <Ionicons name="add-circle-outline" size={24} color="#fff" style={styles.icon} />
                <Text style={styles.buttonText}>Add Expense</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        marginBottom: 16,
        fontSize: 16,
    },
    picker: {
        height: 50,
        width: '100%',
        marginBottom: 16,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#007BFF',
        padding: 12,
        borderRadius: 8,
        marginTop: 16,
    },
    icon: {
        marginRight: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default InputForm;