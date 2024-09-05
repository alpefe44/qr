//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';

type Props = {
    navigation: NativeStackNavigationProp<any>
}

const LoginPage = ({ navigation }: Props) => {
    return (
        <View style={styles.container}>
            <Text>LoginPage</Text>
            <Button title='Next Page' onPress={() => navigation.navigate('TabPage')}></Button>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default LoginPage;
