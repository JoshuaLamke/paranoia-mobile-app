import React from 'react';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import COLORS from './colors';

const baseOptions: () => NativeStackNavigationOptions = () => {
    return ({
        title: "", 
        headerStyle: {backgroundColor: COLORS.primaryBackgroundLight},
        headerTitleStyle: {color: COLORS.primaryText},
        headerTitleAlign: "center",
        headerBackTitle: "Back",
        headerTitle: () => <Image style={{width: 60, height: 60}} source={require("../../assets/p-logo.png")}/>
    })
}

export default baseOptions;