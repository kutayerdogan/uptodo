import { View, StyleSheet, Text, Pressable } from 'react-native';
import { router } from 'expo-router';
import Logo from '../../../assets/icons/logo.svg';
import { Fonts } from '@/constants/Fonts';
import { Colors } from '@/constants/Colors';

export default function Intro() {
  const handlePress = () => {
    router.push('/(auth)/introduction/step1');
  };

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <Logo width={96} height={82} />
      <View style={styles.titleContainer}>
        <Text style={[styles.title, styles.firstLetter]}>Up</Text>
        <Text style={[styles.title, styles.remainingText]}>Todo</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
  },
  titleContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: 40,
    letterSpacing: -1,
    color: Colors.text.primary,
  },
  firstLetter: {
    marginRight: -4, // Up ve Todo arasındaki boşluğu ayarlar
  },
  remainingText: {
    // Todo kısmı için özel ayarlar gerekirse
  },
}); 