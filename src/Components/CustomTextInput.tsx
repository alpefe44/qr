import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';


type Props = {
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
}


const CustomTextInput = ({ value, setValue }: Props) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                value={value}
                onChangeText={(text) => setValue(text)}
                placeholder="Enter your text"
                placeholderTextColor="#7f8c8d"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        width: '90%',
        marginVertical: 10,
        backgroundColor: '#ecf0f1',
        borderRadius: 25,
        paddingHorizontal: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    textInput: {
        height: 50,
        fontSize: 16,
        color: '#2c3e50',
    }
});

export default CustomTextInput;
