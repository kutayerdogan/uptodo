import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './navigation/AuthStack';
import MainStack from './navigation/MainStack';
import IntroStack from './navigation/IntroStack';

const Stack = createStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Intro" component={IntroStack} />
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="Main" component={MainStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
