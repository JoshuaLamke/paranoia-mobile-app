import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import React from 'react';
import COLORS from './colors';

const baseOptions: () => NativeStackNavigationOptions = () => {
    return ({
        title: "", 
        headerStyle: {backgroundColor: COLORS.primaryBackgroundLight},
        headerTitleStyle: {color: COLORS.primaryText},
        headerTitleAlign: "center",
        headerBackTitle: "Back"
    })
}

export default baseOptions;