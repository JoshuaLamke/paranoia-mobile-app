import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Join from './src/pages/Join';
import COLORS from './src/utils/colors';

const Stack = createNativeStackNavigator();

const App: React.FC<{}> = () => {
  return (
    <NavigationContainer>
        
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{title: "", headerStyle: {backgroundColor: COLORS.primaryBackgroundLight}, headerTitleStyle: {color: COLORS.primaryText}}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Join" component={Join} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
