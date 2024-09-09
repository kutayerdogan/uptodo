// screens/IntroStep1.tsx
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';
import { useNavigation } from '@react-navigation/native';
import StepIndicator from '../../components/StepIndicator';
import { getFontFamily } from '@/utils/fontFamily';

// Navigation tipini belirliyoruz
type IntroStep1NavigationProp = StackNavigationProp<RootStackParamList, 'IntroStep1'>;

export default function IntroStep1() {
  const navigation = useNavigation<IntroStep1NavigationProp>();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.skipButton} 
        onPress={() => navigation.navigate('IntroStepFinal')}
        activeOpacity={1} // Görsel geri bildirim için, değeri 1 olarak ayarlayarak herhangi bir değişiklik olmamasını sağlar
      >
        <Text style={styles.skipText}>SKIP</Text>
      </TouchableOpacity>
      <View style={styles.innerContainer}>
        <Image
          source={require('../../assets/images/onboadingstep2.png')}
          style={styles.logo}
        />
      </View>
      <StepIndicator currentStep={1} />
      <View
        style={styles.textContainer}
      >
        <Text style={styles.title}>Manage your tasks</Text>
        <Text style={styles.description}>You can easily manage all of your daily tasks in DoMe for free</Text>
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
            activeOpacity={1}
          >
            <Text style={styles.skipText}>BACK</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => navigation.navigate('IntroStep3')}
            activeOpacity={1}
          >
            <Text style={styles.nextText}>next</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 213,
    height: 277.78,
    marginTop: 84,
  },
  skipButton: {
    position: 'absolute',
    top: 58,
    left: 24,
    width: 35,
    height: 24,
  },
  skipText: {
    fontFamily: getFontFamily('normal'),
    color: 'white',
    fontSize: 16,
    opacity: 0.44,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 54,
    paddingHorizontal: 38,
  },
  title: {
    fontFamily: getFontFamily('bold'),
    color: 'white',
    fontSize: 32,
    lineHeight: 32,
  },
  description: {
    fontFamily: getFontFamily('normal'),
    color: 'white',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 50,
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 100,
  },
  backButton: {
    position: 'absolute',
    top: 58,
    left: 24,
    width: 35,
    height: 24,
  },
  nextButton: {
    display: 'flex',
    paddingVertical: 12,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderRadius: 4,
    backgroundColor: '#8875FF',
  },
  nextText: {
    color: 'white',
    fontFamily: 'Lato',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24.08,
    textTransform: 'uppercase',
  },
});
