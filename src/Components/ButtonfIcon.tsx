//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

type Props = {
    icon: any,
    title: string,
    size: number
}


const ButtonfIcon = ({ icon, title, size }: Props) => {
    return (
        <Ionicons name={icon} size={size}></Ionicons >
    );
};

export default ButtonfIcon;
