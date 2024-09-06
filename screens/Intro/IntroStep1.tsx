// screens/IntroStep1.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';
import { useNavigation } from '@react-navigation/native';

// Navigation tipini belirliyoruz
type IntroStep1NavigationProp = StackNavigationProp<RootStackParamList, 'IntroStep1'>;

export default function IntroStep1() {
  const navigation = useNavigation<IntroStep1NavigationProp>();

  return (
    <View>
      <Text>Welcome to the App! This is Step 1</Text>
      <Button title="Next" onPress={() => navigation.navigate('IntroStep2')} />
      <Button title="Skip" onPress={() => navigation.replace('Auth')} />
    </View>
  );
}
