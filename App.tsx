import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Join from './src/pages/Join';
import Create from './src/pages/Create';
import Lobby from './src/pages/Lobby';
import baseOptions from './src/utils/baseScreenOptions';
export type RootStackParamList = {
  Home: undefined, 
  Join: undefined,
  Create: undefined,
  Lobby: undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC<{}> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={baseOptions()}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Join" component={Join} />
        <Stack.Screen name="Create" component={Create} />
        <Stack.Screen name="Lobby" component={Lobby} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
