import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IntroStep1 from '../screens/Intro/IntroStep1';
import IntroStep2 from '../screens/Intro/IntroStep2';
import IntroStepFinal from '../screens/Intro/IntroStepFinal';
// Diğer adımlar için ekranları import et

const Stack = createStackNavigator();

export default function IntroStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="IntroStep1" component={IntroStep1}
      />
      <Stack.Screen name="IntroStep2" component={IntroStep2} />
      <Stack.Screen name="IntroStepFinal" component={IntroStepFinal} />
      {/* Diğer adımları da ekle */}
    </Stack.Navigator>
  );
}
