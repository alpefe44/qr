//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomTextInput from '../Components/CustomTextInput';
import ProfileImagePicker from '../Components/ProfileImagePicker';

// create a component
const ProfilePage = () => {

    const [value, setValue] = useState<string>("")

    return (
        <View style={styles.container}>
            <ProfileImagePicker></ProfileImagePicker>
            <CustomTextInput value={value} setValue={setValue}></CustomTextInput>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

export default ProfilePage;
