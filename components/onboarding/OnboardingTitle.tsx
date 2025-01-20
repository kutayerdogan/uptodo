import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';

type OnboardingTitleProps = {
  title: string;
  description: string;
};

export function OnboardingTitle({ title, description }: OnboardingTitleProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 42,
    paddingHorizontal: 38,
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: 32,
    color: Colors.text.primary,
    opacity: 0.87,
    textAlign: 'center',
  },
  description: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: Colors.text.primary,
    opacity: 0.87,
    textAlign: 'center',
    lineHeight: 24,
  },
}); 