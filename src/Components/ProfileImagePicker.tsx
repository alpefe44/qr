import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from '@expo/vector-icons/Ionicons';

const ProfileImagePicker = () => {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // Medya galerisine erişim izni al
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                {image ? (
                    <Image source={{ uri: image }} style={styles.profileImage} />
                ) : (
                    <Ionicons name="person" size={80} color="#bdc3c7" />
                )}
                <TouchableOpacity style={styles.cameraIconContainer} onPress={pickImage}>
                    <Ionicons name="camera" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        position: 'relative',
        borderRadius: 50,
        width: 120,
        height: 120,
        backgroundColor: '#ecf0f1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImage: {
        width: '100%',
        height: '100%',
        borderRadius: 60,
    },
    cameraIconContainer: {
        position: 'absolute',
        right: 0,
        bottom: 5,
        backgroundColor: '#3498db',
        borderRadius: 18,
        padding: 5,
    },
});

export default ProfileImagePicker;
