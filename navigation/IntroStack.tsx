import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IntroStep1 from '../screens/Intro/IntroStep1';
import IntroStep2 from '../screens/Intro/IntroStep2';
// Diğer adımlar için ekranları import et

const Stack = createStackNavigator();

export default function IntroStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="IntroStep1" component={IntroStep1} />
      <Stack.Screen name="IntroStep2" component={IntroStep2} />
      {/* Diğer adımları da ekle */}
    </Stack.Navigator>
  );
}
