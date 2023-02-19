import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,Pressable } from 'react-native';
import Logo from '/Users/kemish/Documents/GIT/Intake/Images/Logo.jpeg'
import Bottle from '/Users/kemish/Documents/GIT/Intake/Images/Bottle.jpg'

const Button = ({onPress, text, type = "PRIMARY", bgColor, fgColor}) => {
    return(
        <Pressable
            onPress={onPress}
            style={[
                styles.container,
                styles[`container_${type}`],
                bgColor ? {backgroundColor: bgColor}:{}
            ]}>
            <Text
            style={[
            styles.text,
            styles[`text_${type}`],
            fgColor ? {foregroundColor: fgColor}:{}
            ]}
            >
            </Text>

        </Pressable>


    );
};
