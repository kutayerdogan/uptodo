// screens/IntroStep1.tsx
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';
import { useNavigation } from '@react-navigation/native';

// Navigation tipini belirliyoruz
type IntroStep1NavigationProp = StackNavigationProp<RootStackParamList, 'IntroStep1'>;

export default function IntroStep1() {
  const navigation = useNavigation<IntroStep1NavigationProp>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('IntroStep2')}
      activeOpacity={1} // Görsel geri bildirim için, değeri 1 olarak ayarlayarak herhangi bir değişiklik olmamasını sağlar
    >
      <View style={styles.innerContainer}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 135,
    height: 180,
  },
});
